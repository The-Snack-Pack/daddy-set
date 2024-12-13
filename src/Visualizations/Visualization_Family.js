import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';
import { useState, useEffect } from 'react';
import './Visualization_Family.css'

const Visualization_Family = () => {
  const [actorData, setActorData] = useState([{
    x: [],
    y: [],
    mode: 'markers',
  }]);

  const handleDataParsed = (data) => {
    console.log('Data parsed:', data);
    setActorData(data);
  };

  const [bubble, setBubble] = useState([]);

  useEffect(() => {
    if (actorData.length > 0) {
      let data1 = {
        x: actorData.filter((actor) => actor.Status === 'Married').map((actor) => Number(actor.YouGov_Fame_Percentage)),
        y: actorData.filter((actor) => actor.Status === 'Married').map((actor) => Number(actor.children)),
        text: actorData.filter((actor) => actor.Status === 'Married').map((actor) => actor.Actor),
        mode: 'markers',
        name: 'Married',
        hoverinfo: 'text+x+y',
        marker: {
          size: 10,
          opacity: 0.8,
          color: 'rgb(255, 65, 54)',
        },
      };
      let data2 = {
        x: actorData.filter((actor) => actor.Status === 'In a relationship').map((actor) => Number(actor.YouGov_Fame_Percentage)),
        y: actorData.filter((actor) => actor.Status === 'In a relationship').map((actor) => Number(actor.children)),
        text: actorData.filter((actor) => actor.Status === 'In a relationship').map((actor) => actor.Actor),
        mode: 'markers',
        name: 'In a relationship',
        hoverinfo: 'text+x+y',
        marker: {
          size: 10,
          opacity: 0.8,
          color: '#1e90ff',
        },
      };
      let data3 = {
        x: actorData.filter((actor) => actor.Status === 'Single').map((actor) => Number(actor.YouGov_Fame_Percentage)),
        y: actorData.filter((actor) => actor.Status === 'Single').map((actor) => Number(actor.children)),
        text: actorData.filter((actor) => actor.Status === 'Single').map((actor) => actor.Actor),
        mode: 'markers',
        name: 'Single',
        hoverinfo: 'text+x+y',
        marker: {
          size: 10,
          opacity: 0.8,
          color: 'rgb(44, 160, 101)',
        },
      };
      setBubble([data1, data2, data3]);
    }
  }, [actorData]);

  return (
      <div className="visualization-container">
        <h1>Visualization: Fam Life vs. Fame</h1>
        <div>
        <CSVReader onDataParsed={handleDataParsed}/>
        </div>
        <div className="plot-container">
          <Plot
              data={bubble}
              layout={{
                xaxis: { title: 'YouGov Fame Rating', gridcolor: '#bbb' },
                yaxis: { title: 'Number of Children', gridcolor: '#bbb' },
                width: "800px",
                height: "500px",
                paper_bgcolor: '#f3e5f5', // Light lavender
                plot_bgcolor: '#ede7f6',  // Pastel violet
              }}
              style={{ width: '100%' }}
          />
        </div>
      </div>
  );
};

export default Visualization_Family;
