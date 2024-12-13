import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import { BiSolidCameraMovie } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import "./Visualization_Scatter.css"


const Visualization_Scatter = () => {

  const [actorData, setActorData] = useState([]);
  const [personalProfile, setPersonalProfile] = useState(null)

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  const [scatterData, setScatterData] = useState({
    x: [],
    y: [],
    mode: 'markers',
    text: [],
    hoverinfo: 'text',
  });

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
    }
  }, [actorData]);

  const handleClick = (eventData) => {
    console.log('Clicked eventData:', eventData);
    if (!eventData || !eventData.points || eventData.points.length === 0) return;

    const actorIndex = eventData.points[0].pointIndex;
    const actor = actorData[actorIndex];

    const page1 = (
        <div className="profileInfo">
          <h1><strong>{actor.Actor}</strong></h1>
          <p>Birthday: {actor.DOB}</p>
          <p>Age: {actor.Age}</p>
          <p>Height: {actor.Height}</p>
          <p>Status: {actor.Status}</p>
          <p>Number of Children: {actor.children}</p>
        </div>
    )

    const page2 = (
        <div className="profileInfo2">
          <h2>Top 4 Movies / Shows</h2>
          <h5>IMDb.com</h5>
          <p>
            {actor.Top_4_Movies.split('\n').map((movie, index) => {
              const [title, year, rating] = movie.split(',').map(item => item.trim());
              return (<li key={index}><BiSolidCameraMovie/> {title}&emsp;|&emsp;<SlCalender/> {year}&emsp;|&emsp;<FaStar/> {rating}<br/><br/></li>);
            })}
          </p>
        </div>
    )

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
    )

    const allPages = [page1, page2, page3]

    const newPersonalProfile = (
        <div className="profile">
          <div
              className="getty embed image"
              style={{
                backgroundColor: "#fff",
                display: "inline-block",
                fontFamily: "Roboto, sans-serif",
                color: "#a7a7a7",
                fontSize: "11px",
                width: "100%",
                maxWidth: "330px",
              }}
          >
            <div
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                }}
            >
              <a
                  href = {actor.Image_1}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#a7a7a7",
                    textDecoration: "none",
                    fontWeight: "normal",
                    border: "none",
                    display: "inline-block",
                  }}
              >
                Embed from Getty Images
              </a>
            </div>
            <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  height: 0,
                  padding: "66.66667% 0 0 0",
                  width: "100%",
                }}
            >
              <iframe
                  src= {actor.Image_2}
                  scrolling="no"
                  frameBorder="0"
                  width="594"
                  height="396"
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "330px",
                    height: "300px",
                    margin: 0,
                  }}
              ></iframe>
            </div>
          </div>
          <div className="info-card">
          <InfoCard slides={allPages}/>
          </div>
        </div>
    )

    setPersonalProfile(newPersonalProfile);

  };

  return (
      <div>
        <CSVReader onDataParsed={handleDataParsed}/>
        <div>
          <Plot
              data={[scatterData]}
              layout={{
                title: "The 'Daddy' Effect ",
                xaxis: { title: 'IMDb Average Ratings (Their Top 4 Movie)' },
                yaxis: { title: 'Best Male Actors Rankings', autorange: 'reversed', zeroline: false },
                paper_bgcolor: '#f8d7da', // Light pink background for the entire plot
                plot_bgcolor: '#ffe6e6',  // Light pink background for the chart area
              }}
              onClick={handleClick}
              style={{ width: '1000px', height: '500px' }}
          />

        </div>
        <div>{personalProfile}</div>
      </div>
  );
};

export default Visualization_Scatter;