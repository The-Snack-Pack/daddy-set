import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSVReader = ({ onDataParsed }) => {
  const [csvData, setCsvData] = useState([]);
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch('/data.csv').then(answer => answer.text())
      .then((text) => {
        Papa.parse(text, {
          complete: (result) => {
            console.log(result);
            setCsvData(result.data);
            setTopData(result.data.slice(0, 10));
            onDataParsed(result.data);
          },
          header: true,
          skipEmptyLines: true,
        });
      })
      .catch((error) => console.error('Error reading CSV file:', error));
  }, [onDataParsed]);

  return null;
};

export default CSVReader;