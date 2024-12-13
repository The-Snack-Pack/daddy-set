import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import './Visualization_Age.css';

const Visualization_Age = () => {
  const [actorData, setActorData] = useState([]);

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  const age_distribution = {
    "30-39": { "count": 0, "popularity": 0 },
    "40-49": { "count": 0, "popularity": 0 },
    "50-59": { "count": 0, "popularity": 0 },
    "60-69": { "count": 0, "popularity": 0 },
    "70-79": { "count": 0, "popularity": 0 }
  };

  actorData.forEach((item) => {
    if (30 <= item.Age && item.Age < 40) {
      age_distribution["30-39"]["count"] += 1;
      age_distribution["30-39"]["popularity"] += Number(item.YouGov_Popularity_Percentage);
    } else if (40 <= item.Age && item.Age < 50) {
      age_distribution["40-49"]["count"] += 1;
      age_distribution["40-49"]["popularity"] += Number(item.YouGov_Popularity_Percentage);
    } else if (50 <= item.Age && item.Age < 60) {
      age_distribution["50-59"]["count"] += 1;
      age_distribution["50-59"]["popularity"] += Number(item.YouGov_Popularity_Percentage);
    } else if (60 <= item.Age && item.Age < 70) {
      age_distribution["60-69"]["count"] += 1;
      age_distribution["60-69"]["popularity"] += Number(item.YouGov_Popularity_Percentage);
    } else if (70 <= item.Age && item.Age < 80) {
      age_distribution["70-79"]["count"] += 1;
      age_distribution["70-79"]["popularity"] += Number(item.YouGov_Popularity_Percentage);
    }
  });

  const [barChart, setBarChart] = useState({
    x: [],
    y: [],
    type: 'bar',
  });

  useEffect(() => {
    if (actorData.length > 0) {
      setBarChart({
        x: Object.keys(age_distribution),
        y: Object.values(age_distribution).map((values) => {
          return (values.popularity / values.count).toFixed(0);
        }),
        type: 'bar',
      });
    }
  }, [actorData]);

  return (
      <div className="visualization-container">
        <h1>It’s the Vibe, Not the Years</h1>
        <div>
          <CSVReader onDataParsed={handleDataParsed} />
        </div>
        <div className="plot-container">
          <Plot
              data={[barChart]}
              layout={{
                title: '',
                xaxis: { title: 'Age groups' },
                yaxis: { title: 'YouGov ratings for popularity (Average)' },
                width: "800px",
                height: "500px",
                paper_bgcolor: '#fde2e4', // Light peach for the outer background
                plot_bgcolor: '#ffc9c9',  // Soft coral for the chart area
              }}
              style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
  );
};

export default Visualization_Age;
