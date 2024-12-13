import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import './VisualizationAge.css';

const VisualizationAge = () => {
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

  const [trendline, setTrendline] = useState({
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines',
    line: { color: '#fb577c', dash: 'dashdot' },
    name: 'Trendline',
  });


  useEffect(() => {
    if (actorData.length > 0) {
      // Create x (age groups) and y (average popularity) values
      const xValues = Object.keys(age_distribution);
      const yValues = Object.values(age_distribution).map((values) =>
        values.count > 0 ? (values.popularity / values.count).toFixed(0) : 0
      );

      // Calculate linear regression (simplified for demonstration)
      const xNumeric = [35, 45, 55, 65, 75]; // Approximate midpoints for age groups
      const yNumeric = yValues.map(Number);
      const xMean = xNumeric.reduce((a, b) => a + b, 0) / xNumeric.length;
      const yMean = yNumeric.reduce((a, b) => a + b, 0) / yNumeric.length;
      const slope =
        xNumeric.reduce((acc, x, i) => acc + (x - xMean) * (yNumeric[i] - yMean), 0) /
        xNumeric.reduce((acc, x) => acc + (x - xMean) ** 2, 0);
      const intercept = yMean - slope * xMean;
      const trendlineY = xNumeric.map((x) => slope * x + intercept);

      // Update the bar chart state
      setBarChart({
        x: xValues,
        y: yValues,
        type: 'bar',
        name: 'Age Group Popularity',
        text: yValues.map((value) => `${value}%`),
        marker: {
          color: '#7fbee1',
          opacity: 0.6,
        },
      });

      // Update the trendline state
      setTrendline({
        x: xValues,
        y: trendlineY,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#fb577c', dash: 'dashdot' },
        name: 'Trendline',
      });
    }
  }, [actorData]);


  return (
    <div>
      <CSVReader onDataParsed={handleDataParsed} />
      <div className="viz">
        <Plot
          data={[barChart, trendline]}
          layout={{
            xaxis: { title: 'Age Groups' },
            yaxis: { title: 'YouGov Popularity (Average)' },
            showlegend: false,
            images: [
              {
                source: '../images/background.png', // Replace with your image path
                x: 0,
                y: 1,
                xref: 'paper',
                yref: 'paper',
                sizex: 1,
                sizey: 1,
                opacity: 0.8,
                layer: 'below',
              },
            ],
            paper_bgcolor: '#fff6f8', // Light peach
            plot_bgcolor: '#fff6f8',  // Light coral
          }}
          style={{ width: '100%', height: '100%' }}
        />

      </div>
    </div>
  );
};

export default VisualizationAge;
