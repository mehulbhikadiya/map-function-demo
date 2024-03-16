import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App container mt-5">
      <h4 className="text-uppercase fw-bold">All Twubric Data</h4>
      <hr />
      <div>
        <h5 className="text-start fw-bold text-uppercase">Sort By</h5>
        <table>
          <tr>
            <th>Id </th>
            <th>Twubric Score </th>
            <th>Friends</th>
            <th>Influence</th>
            <th>Chirpiness</th>
          </tr>
          {data.map((dataObj, index) => {
            return (
              <tr>
                <td>{dataObj.uid}</td>
                <td>{dataObj.twubric.total}</td>
                <td>{dataObj.twubric.friends}</td>
                <td>{dataObj.twubric.influence}</td>
                <td>{dataObj.twubric.chirpiness}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className=" mt-5">
        <h5 className="text-start fw-bold text-uppercase">
          Joined Twitter (Date & Name)
        </h5>
        <table>
          <tr>
            <th>Start Date </th>
            <th>End Date</th>
          </tr>
          {data.map((dataObj, index) => {
            return (
              <tr>
                <td>{dataObj.join_date}</td>
                <td>{dataObj.username}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className=" row mt-5">
        <div className="col">
          <table style={{ width: "100%" }}>
            <tr>
              <th colspan="3">Sample User One <span style={{textAlign:"end"}}>3.5</span></th>
            </tr>
            <tr>
              <td>1 Friends</td>
              <td>2 influence</td>
              <td>0.5 chirpiness</td>
            </tr>
            <tr>
              <td>Jan 23,2013</td>
              <td colspan="2">Remove</td>
            </tr>
          </table>
        </div>

        <div className="col">
          <table style={{ width: "100%" }}>
            <tr>
              <th colspan="3">Sample User Two</th>
            </tr>
            <tr>
              <td>1 Friends</td>
              <td>2 influence</td>
              <td>0.5 chirpiness</td>
            </tr>
            <tr>
              <td>Jan 23,2013</td>
              <td colspan="2">Remove</td>
            </tr>
          </table>
        </div>

        <div className="col">
          <table style={{ width: "100%" }}>
            <tr>
              <th colspan="3">Sample User Three</th>
            </tr>
            <tr>
              <td>1 Friends</td>
              <td>2 influence</td>
              <td>0.5 chirpiness</td>
            </tr>
            <tr>
              <td>Jan 23,2013</td>
              <td colspan="2">Remove</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
