import React from "react";
import { useQuery } from "react-query";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const Launches = (props) => {
  const { isLoading, error, data } = useQuery("spaceX", () =>
    fetch(
      `https://api.spacexdata.com/v3/launches/${props.match.params.flight_number}`
    ).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="content">
      <p>
        {data.launch_success
          ? "This Launch Success"
          : "This Launch Failure because : " +
            data?.launch_failure_details?.reason}
      </p>
      <p>Flight Number : {data.flight_number}</p>
      <p>Mission Name : {data.mission_name}</p>
      <p>Rocket Name : {data?.rocket?.rocket_name}</p>
      <p>Rocket Type : {data?.rocket?.rocket_type}</p>
      <p>Launch Year : {data.launch_year}</p>
      <p>Launch Site Name : {data?.launch_site?.site_name}</p>
      <Link to={`/Rocket/${data?.rocket?.rocket_id}`}>Read More About Rocket Detail</Link>
      <Link to={'/Launches'} >Go Back to Launches Page</Link>
    </div>
  );
};
export default Launches;
