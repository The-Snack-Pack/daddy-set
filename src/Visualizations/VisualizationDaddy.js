import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import InfoCard from './InfoCard';
import { BiSolidCameraMovie } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import "./VisualizationDaddy.css";

const VisualizationDaddy = () => {
  const [actorData, setActorData] = useState([]);
  const [personalProfile, setPersonalProfile] = useState(null);

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  useEffect(() => {
    if (actorData.length > 0) {
      setScatterData({
        x: actorData.map((actor) => actor.Avg_Ratings),
        y: actorData.map((actor) => actor.Ranker_com_Best_Male_Actors_Ranking),
        text: actorData.map((actor) => actor.Actor),
        mode: 'markers',
        marker: {
          symbol: "star",
          size: 20,
        },
        hoverinfo: 'text',
      });

      // Set the default actor profile (e.g., the first actor)
      setDefaultActorProfile(actorData.find(actor => actor.Actor === 'Pedro Pascal'));
    }
  }, [actorData]);

  const [scatterData, setScatterData] = useState({
    x: [],
    y: [],
    mode: 'markers',
    text: [],
    hoverinfo: 'text',
  });

  const setDefaultActorProfile = (actor) => {
    if (!actor) return;

    const page1 = (
      <div className="profileInfo">
        <h1><strong>{actor.Actor}</strong></h1>
        <p>Birthday: {actor.DOB}</p>
        <p>Age: {actor.Age}</p>
        <p>Height: {actor.Height}</p>
        <p>Status: {actor.Status}</p>
        <p>Number of Children: {actor.children}</p>
      </div>
    );

    const page2 = (
      <div className="profileInfo2">
        <h2>Top 4 Movies / Shows</h2>
        <h5>IMDb.com</h5>
        <p>
          {actor.Top_4_Movies.split('\n').map((movie, index) => {
            const [title, year, rating] = movie.split(',').map(item => item.trim());
            return (<li key={index}><BiSolidCameraMovie /> {title}&emsp;|&emsp;<SlCalender /> {year}&emsp;|&emsp;<FaStar /> {rating}<br /><br /></li>);
          })}
        </p>
      </div>
    );

    const page3 = (
      <div className="profileInfo">
        <h2>Ratings & Rankings</h2>
        <p>
          <li>Avg. Ratings (x/10): {actor.Avg_Ratings}</li>
        </p>
        <p>
          <li>YouGov Popularity Percentage: {actor.YouGov_Popularity_Percentage}</li>
        </p>
        <p>
          <li>YouGov Dislike Percentage: {actor.YouGov_Dislike_Percentage}</li>
        </p>
        <p>
          <li>YouGov Neutral Percentage: {actor.YouGov_Neutral_Percentage}</li>
        </p>
        <p>
          <li>Ranker.com Best Male Actors Ranking (x/269): {actor.Ranker_com_Best_Male_Actors_Ranking}</li>
        </p>
      </div>
    );

    const allPages = [page1, page2, page3];

    const newPersonalProfile = (
      <div className="profile">
        <div className="image-container">
          <iframe
            className="profile-iframe"
            src={actor.Image_2}
            title={`${actor.Actor}'s profile`}
          ></iframe>
        </div>

        <div className="info-card">
          <InfoCard slides={allPages} />
        </div>
      </div>
    );

    setPersonalProfile(newPersonalProfile);
  };

  const handleClick = (eventData) => {
    if (!eventData || !eventData.points || eventData.points.length === 0) return;

    const actorIndex = eventData.points[0].pointIndex;
    const actor = actorData[actorIndex];
    setDefaultActorProfile(actor);
  };

  return (
    <div>
      <CSVReader onDataParsed={handleDataParsed} />
      <div className="viz">
        <Plot
          data={[
            {
              ...scatterData,
              mode: 'markers+text',
              marker: {
                color: actorData.map(actor => actor.Age),
                colorscale: 'Viridis',
                showscale: true,
                colorbar: {
                  title: {
                    text: "Age",
                    font: { size: 14, color: 'white' },
                  },
                  tickfont: { color: 'white' },
                },
              },
              hoverinfo: 'text',
              hovertext: actorData.map(
                actor =>
                  `<b>${actor.Actor}</b><br>Age: ${actor.Age}<br>Rating: ${actor.Avg_Ratings}<br>Ranking: ${actor.Ranker_com_Best_Male_Actors_Ranking}`
              ),
              text: actorData.map(() => '❤'),
              textposition: 'middle center',
              textfont: {
                size: 24,
                color: actorData.map(actor => {
                  const minAge = Math.min(...actorData.map(a => a.Age));
                  const maxAge = Math.max(...actorData.map(a => a.Age));
                  const normalized = (actor.Age - minAge) / (maxAge - minAge);

                  const viridisColors = [
                    [0, 'rgb(68, 1, 84)'],
                    [0.25, 'rgb(59, 82, 139)'],
                    [0.5, 'rgb(33, 145, 140)'],
                    [0.75, 'rgb(94, 201, 98)'],
                    [1, 'rgb(253, 231, 37)'],
                  ];

                  let lower = viridisColors[0];
                  let upper = viridisColors[viridisColors.length - 1];
                  for (let i = 0; i < viridisColors.length - 1; i++) {
                    if (normalized >= viridisColors[i][0] && normalized <= viridisColors[i + 1][0]) {
                      lower = viridisColors[i];
                      upper = viridisColors[i + 1];
                      break;
                    }
                  }

                  const t = (normalized - lower[0]) / (upper[0] - lower[0]);
                  const lowerRGB = lower[1].match(/\d+/g).map(Number);
                  const upperRGB = upper[1].match(/\d+/g).map(Number);

                  const r = Math.round(lowerRGB[0] + t * (upperRGB[0] - lowerRGB[0]));
                  const g = Math.round(lowerRGB[1] + t * (upperRGB[1] - lowerRGB[1]));
                  const b = Math.round(lowerRGB[2] + t * (upperRGB[2] - lowerRGB[2]));

                  return `rgb(${r}, ${g}, ${b})`;
                }),
              },
            },
          ]}
          layout={{
            title: {
              text: "The 'Daddy' Effect",
              font: { family: 'Satisfy', size: 30, color: '#ffffff' },
              x: 0.5,
            },
            xaxis: {
              title: { text: 'IMDb Average Ratings (Their Top 4 Movie)', font: { family: 'Lato', size: 16, color: '#ffffff' } },
              gridcolor: '#ffcccc',
              zerolinecolor: '#ffffff',
            },
            yaxis: {
              title: { text: 'Best Male Actors Rankings', font: { family: 'Lato', size: 16, color: '#ffffff' } },
              gridcolor: '#ffcccc',
              zerolinecolor: '#ffffff',
              autorange: 'reversed',
            },
            paper_bgcolor: '#fb577c',
            plot_bgcolor: 'white',
          }}
          onClick={handleClick}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div>{personalProfile}</div>
    </div>
  );
};

export default VisualizationDaddy;
