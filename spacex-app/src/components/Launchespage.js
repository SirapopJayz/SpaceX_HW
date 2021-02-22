import React from "react";
import { useQuery } from "react-query";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
const LaunchesPage = () => {
  const { isLoading, error, data } = useQuery("spaceX", () =>
    fetch("https://api.spacexdata.com/v3/launches").then((res) => res.json())
  );
  const datalist = [];
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  for (let i = 0; i < data.length; i++) {
    datalist.push({
      mission_name: data[i].mission_name,
      launch_year: data[i].launch_year,
      rocket_name: data[i].rocket.rocket_name,
      launch_success: data[i].launch_success,
      flight_number: data[i].flight_number,
    });
  }
  console.log(data);
  const history = useHistory();
  return (
    <Table striped bordered hover variant="dark" responsive="md">
      <thead>
        <tr>
          <th>Launch Year</th>
          <th>Mission Name</th>
          <th>Rocket Name</th>
          <th>Launch Success</th>
          <th>Flight Number</th>
        </tr>
      </thead>
      <tbody>
        {datalist.map((item, i) => {
          return (
            <tr key={i} onClick={()=>{history.push(`/Launches/${item.flight_number}`)}}>
              <td>{item.launch_year}</td>
              <td>{item.mission_name}</td>
              <td>{item.rocket_name}</td>
              <td><Button variant={item.launch_success ? "success":"danger"}>{item.launch_success ? "Success":"Fail"}</Button></td>
              <td>{item.flight_number}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default LaunchesPage;
