import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import './VisualizationFamily.css';

const VisualizationFamily = () => {
  const [actorData, setActorData] = useState([]);

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  const [bubble, setBubble] = useState([]);

  useEffect(() => {
    if (actorData.length > 0) {
      const createDataSet = (status, color) => ({
        x: actorData.filter((actor) => actor.Status === status).map((actor) => Number(actor.YouGov_Fame_Percentage)),
        y: actorData.filter((actor) => actor.Status === status).map((actor) => Number(actor.children)),
        text: actorData.filter((actor) => actor.Status === status).map((actor) => actor.Actor),
        mode: 'text+markers',
        name: `<span style="color:${color}">${status} ❤</span>`, // Colorful hearts in legend labels
        legendgroup: status,
        hoverinfo: 'text+x+y',
        text: actorData.filter((actor) => actor.Status === status).map(() => '❤'), // Hearts as markers
        textfont: {
          size: 20,
          color: color, // Text font color matches the dataset color
        },
        marker: {
          size: 0, // Invisible markers behind hearts
          color: color,
        },
        showlegend: true,
      });

      setBubble([
        createDataSet('Married', 'rgb(255, 65, 54)'), // Red
        createDataSet('In a relationship', '#1e90ff'), // Blue
        createDataSet('Single', 'rgb(44, 160, 101)'), // Green
      ]);
    }
  }, [actorData]);

  return (
    <div>
      <CSVReader onDataParsed={handleDataParsed} />
      <div className="viz">
        <Plot
          data={bubble}
          layout={{
            xaxis: { title: 'YouGov Fame Rating', gridcolor: '#bbb' },
            yaxis: { title: 'Number of Children', gridcolor: '#bbb' },
            legend: {
              orientation: 'h', // Horizontal legend
              y: 1.1, // Position above the chart
              x: 0.5,
              xanchor: 'center',
              yanchor: 'bottom',
              font: {
                size: 14,
              },
            },
            paper_bgcolor: '#fff6f8',
            plot_bgcolor: '#fff6f8',
          }}
          config={{
            displayModeBar: false, // Hide the Plotly toolbar for a cleaner UI
          }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default VisualizationFamily;
