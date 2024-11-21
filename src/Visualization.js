import React from 'react';
import Plot from 'react-plotly.js';
import CSVReader from './CSVReader';

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvData: [],
      topData: [],
    };
  }
  handleDataParsed = (data) => {
    this.setState({
      csvData: data,
      topData: data.slice(0,10),
    });
  };
  render() {
    const {topData} = this.state
    return (
      <div>
        <CSVReader onDataParsed={this.handleDataParsed} />
        {topData.length > 0 && (
          <Plot
            data = {[
              {
                x: topData.map((item) => item.averageRating),
                y: topData.map((item) => item.title),
                type: 'bar',
                orientation: 'h',
                marker: {
                  color: 'rgba(255,162,162,0.6)',
                  line: {
                    color: 'rgba(242,20,20,1.0)',
                    width: 1
                  },
                },},
            ]}

            layout = {{
              title: 'IMDb Top 10 TV Series Ranking',
              font:{
                family: 'Arial',
                size: 14
              },
              yaxis: {
                categoryorder: 'total ascending',
              },
              xaxis:{
                dtick: 1,
              },
              width: 800,
              margin:{
                l: 200
              },
              paper_bgcolor: 'rgb(255,242,242)',
              plot_bgcolor: 'rgb(255,242,242)',
            }}
          />
        )}
      </div>
    );
  }
};

export default Visualization;
