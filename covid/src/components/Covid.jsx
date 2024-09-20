import React, { useState } from "react";
import axios from "axios";
import "./Covid.css";

function Covid() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    const url = `https://disease.sh/v3/covid-19/countries/${country}`;

    try {
      const response = await axios.get(url);
      setData(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching the data", error);
      setError(
        "Error fetching data. Please check the country name and try again."
      );
      setData(null);
    }
  };

  return (
    <div className="App">
      <h1>COVID-19 Data Tracker</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>
            Country:
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input-field"
              placeholder="Enter country name"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handleFetchData}
          className="fetch-button"
        >
          Fetch Data
        </button>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {data && (
        <div className="data-container">
          <h2>Data for {data.country}:</h2>
          <ul>
            <li>
              <strong>Cases:</strong> {data.cases}
            </li>
            <li>
              <strong>Deaths:</strong> {data.deaths}
            </li>
            <li>
              <strong>Recovered:</strong> {data.recovered}
            </li>
            <li>
              <strong>Active:</strong> {data.active}
            </li>
            <li>
              <strong>Critical:</strong> {data.critical}
            </li>
            <li>
              <strong>Tests:</strong> {data.tests}
            </li>
            <li>
              <strong>Deaths per Million:</strong> {data.deathsPerOneMillion}
            </li>
            <li>
                <strong> Flag: </strong> <img src={data.countryInfo.flag} alt="flag" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Covid;
