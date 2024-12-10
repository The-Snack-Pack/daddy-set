import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import './Visualization.css'
import InfoCard from './InfoCard';
import { BiSolidCameraMovie } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";


const Visualization = () => {

  const [actorData, setActorData] = useState([]);

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  const [chartType, setChartType] = useState('pie');

  const statusCount = { Married: 0, 'In a relationship': 0, Single: 0 };
  actorData.forEach((item) => {
    if (item.Status === 'Married') statusCount.Married += 1;
    else if (item.Status === 'In a relationship') statusCount['In a relationship'] += 1;
    else if (item.Status === 'Single') statusCount.Single += 1;
  });

  const [pieChart, setPieChart] = useState( {
    labels: [],
    values: [],
    type: 'pie',
    marker: {
      colors: ['#FF9999', '#66B2FF', '#99FF99'],
    },
  });

  const age_distribuion = {
    "30-39": 0,
    "40-49": 0,
    "50-59": 0,
    "60-69": 0,
    "70-79": 0
  };

  actorData.forEach((item) => {
    if (30 <= item.Age && item.Age < 40) {
      age_distribuion["30-39"] += 1;
    } else if (40 <= item.Age && item.Age < 50) {
      age_distribuion["40-49"] += 1;
    } else if (50 <= item.Age && item.Age < 60) {
      age_distribuion["50-59"] += 1;
    } else if (60 <= item.Age && item.Age < 70) {
      age_distribuion["60-69"] += 1;
    } else if (70 <= item.Age && item.Age < 80) {
      age_distribuion["70-79"] += 1;
    }
  });

  const [barChart, setBarChart] = useState({
    x: [],
    y: [],
    type: 'bar',
  });

  const height_distribuion = {
    "5'7'' to 5'9''": 0,
    "5'10'' to 5'12''": 0,
    "6' to 6'2''": 0,
    "6'3'' to 6'5''": 0
  }

  actorData.forEach((item) => {
      if ("5'7\"" <= item.Height && item.Height <= "5'9\""){
        height_distribuion["5'7'' to 5'9''"] += 1
      }
      else if ("5'10\"" <= item.Height && item.Height <= "5'12\""){
        height_distribuion["5'10'' to 5'12''"] += 1
      }
      else if ("6'" <= item.Height && item.Height <= "6'2\""){
        height_distribuion["6' to 6'2''"] += 1
      }
      else if ("6'3\"" <= item.Height && item.Height <=  "6'5\""){
        height_distribuion["6'3'' to 6'5''"] += 1
      }
  });

  const [barChart2, setBarChart2] = useState({
    x: [],
    y: [],
    type: 'bar',
  });

  const [scatterData, setScatterData] = useState({
    x: [],
    y: [],
    mode: 'markers',
    text: [],
    hoverinfo: 'text',
  });

  const [personalProfile, setPersonalProfile] = useState(null)


  useEffect(() => {
    if (actorData.length > 0) {
        setScatterData({
          x: actorData.map((actor) => actor.YouGov_Popularity_Percentage),
          y: actorData.map((actor) => actor.YouGov_Fame_Percentage),
          text: actorData.map((actor) => actor.Actor),
          mode: 'markers',
          hoverinfo: 'text',
        });
        setBarChart({
          x: Object.keys(age_distribuion),
          y: Object.values(age_distribuion),
          type: 'bar',
        });
        setPieChart({
          labels: Object.keys(statusCount),
          values: Object.values(statusCount),
          type: 'pie',
          marker: {
            colors: ['#FF9999', '#66B2FF', '#99FF99'],
          },
        });
        setBarChart2({
          x: Object.keys(height_distribuion),
          y: Object.values(height_distribuion),
          type: 'bar',
        });
    }
  }, [actorData]);


  const handleClick = (eventData) => {
    console.log('Clicked eventData:', eventData);
    if (!eventData || !eventData.points || eventData.points.length === 0) return;

    const actorIndex = eventData.points[0].pointIndex;
    const actor = actorData[actorIndex];

    let Pull = [0,0,0]
    let Width = [0,0,0]

    if (actor.Status === 'Married') {
      Pull = [0.1, 0, 0]
      Width = [1,0,0]
    }
    else if (actor.Status === 'In a relationship') {
      Pull = [0, 0.1, 0]
      Width = [0,1,0]
    }
    else if (actor.Status === 'Single') {
      Pull = [0, 0, 0.1]
      Width = [0,0,1]
    }

    const newPieChart = {
      labels: Object.keys(statusCount),
      values: Object.values(statusCount),
      type: 'pie',
      pull: Pull,
      marker: {
        colors: ['#FF9999', '#66B2FF', '#99FF99'],
        line: {
          color: 'black',
          width: Width,
        },
      },
    };

    setPieChart(newPieChart);

    let highlightedBarIndex = 0
    if (30 <= actor.Age && actor.Age < 40) {
      highlightedBarIndex = 0;
    } else if (40 <= actor.Age && actor.Age < 50) {
      highlightedBarIndex = 1;
    } else if (50 <= actor.Age && actor.Age < 60) {
      highlightedBarIndex = 2;
    } else if (60 <= actor.Age && actor.Age < 70) {
      highlightedBarIndex = 3;
    } else if (70 <= actor.Age && actor.Age < 80) {
      highlightedBarIndex = 4;
    }

    const newBarChart = {
      x: Object.keys(age_distribuion),
      y: Object.values(age_distribuion),
      type: 'bar',
      marker: {
        color: Object.keys(age_distribuion).map((key, index) =>
            index === highlightedBarIndex ? '#1E90FF' : '#B0E0E6' // Highlight selected bar
        ),
      }
    };

    setBarChart(newBarChart);

    let highlightedBarIndex2 = 0
    if ("5'7\"" <= actor.Height && actor.Height <= "5'9\""){
      highlightedBarIndex2 = 0;
    }
    else if ("5'10\"" <= actor.Height && actor.Height <= "5'12\""){
      highlightedBarIndex2 = 1;
    }
    else if ("6'" <= actor.Height && actor.Height <= "6'2\""){
      highlightedBarIndex2 = 2;
    }
    else if ("6'3\"" <= actor.Height && actor.Height <=  "6'5\""){
      highlightedBarIndex2 = 3;
    }

    const newBarChart2 = {
      x: Object.keys(height_distribuion),
      y: Object.values(height_distribuion),
      type: 'bar',
      marker: {
        color: Object.keys(height_distribuion).map((key, index) =>
            index === highlightedBarIndex2 ? '#1E90FF' : '#B0E0E6' // Highlight selected bar
        ),
      }
    };

    setBarChart2(newBarChart2);

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
        <div>
          <h2>Top 4 Movies / Shows</h2>
          <h5>IMDb.com</h5>
          <p>
            {actor.Top_4_Movies.split('\n').map((movie, index) => {
              const [title, year, rating] = movie.split(',').map(item => item.trim());
              return (<li key={index}><BiSolidCameraMovie /> {title}&emsp;|&emsp;<SlCalender /> {year}&emsp;|&emsp;<FaStar /> {rating}<br/><br/></li>);
            })}
          </p>
        </div>
    )

    const page3 = (
        <div>
          <h2>Ratings & Rankings</h2>
          <p><li>Avg. Ratings (x/10): {actor.Avg_Ratings}</li></p>
          <p><li>YouGov Popularity Percentage: {actor.YouGov_Popularity_Percentage}</li></p>
          <p><li>YouGov Dislike Percentage: {actor.YouGov_Dislike_Percentage}</li></p>
          <p><li>YouGov Neutral Percentage: {actor.YouGov_Neutral_Percentage}</li></p>
          <p><li>Ranker.com Best Male Actors Ranking (x/269): {actor.Ranker_com_Best_Male_Actors_Ranking}</li></p>
        </div>
    )

    const allPages = [page1, page2, page3]

    const newPersonalProfile = (
        <div class="profile">
          <img src="/images/headshot-placeholder.png" class="profileImg"/>
          <InfoCard slides={allPages} />
        </div>
    )

    setPersonalProfile(newPersonalProfile);

  };


  const toggleChartType = (type) => {
    setChartType(type)
  };

  return (
      <div>
        <CSVReader onDataParsed={handleDataParsed}/>
        <div>
          <Plot data={[scatterData]}
                layout={{ title: 'Actors' }}
                onClick={handleClick}
                style={{ width: '1000px', height: '500px' }}
          />
        </div>
        <div>{personalProfile}</div>
        {pieChart && (
            <div
                style={{
                  position: 'relative',
                  width: '100%',
                    height: '400px',
                  }}
              >
              <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10,
                  }}
              >
                <button
                    onClick={() => toggleChartType('pie')}
                    disabled={chartType === 'pie'}
                    style={{
                      top: '10px',
                      left: '10px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      backgroundColor: 'white',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '5px',
                      zIndex: 100,
                    }}
                >
                  Status
                </button>
                <button
                    onClick={() => toggleChartType('bar')}
                    disabled={chartType === 'bar'}
                    style={{
                      top: '10px',
                      left: '10px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      backgroundColor: 'white',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '5px',
                      zIndex: 100,
                    }}
                >
                  Age
                </button>
                <button
                    onClick={() => toggleChartType('bar2')}
                    disabled={chartType === 'bar2'}
                    style={{
                      top: '10px',
                      left: '10px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      backgroundColor: 'white',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '5px',
                      zIndex: 100,
                    }}
                >
                  Height
                </button>
              </div>
              {chartType === 'pie' && pieChart && (
                  <Plot
                      data={[pieChart]}
                      layout={{ title: 'Relationship Status Distribution' }}
                      style={{ width: '100%', height: '100%' }}
                  />
              )}
              {chartType === 'bar' && barChart && (
                  <Plot
                      data={[barChart]}
                      layout={{ title: 'Age Distribution' }}
                      style={{ width: '100%', height: '100%' }}
                  />
              )}
              {chartType === 'bar2' && barChart2 && (
                  <Plot
                      data={[barChart2]}
                      layout={{ title: 'Height Distribution' }}
                      style={{ width: '100%', height: '100%' }}
                  />
              )}
            </div>
        )}
              </div>
            );
          };

          export default Visualization;
