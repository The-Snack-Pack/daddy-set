import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSVReader = ({ onDataParsed }) => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    if (csvData.length === 0) {
      fetch('/daddies_new.csv')
          .then((response) => response.text())
          .then((text) => {
            Papa.parse(text, {
              complete: (result) => {
                console.log('CSV Parsing Complete:', result);
                setCsvData(result.data);
                onDataParsed(result.data);
              },
              header: true,
              skipEmptyLines: true,
            });
          })
          .catch((error) => console.error('Error reading CSV file:', error));
    }
  }, [csvData, onDataParsed]);

  return null;
};

export default CSVReader;
