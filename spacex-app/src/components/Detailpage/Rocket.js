import React from "react";
import { useQuery } from "react-query";
import {Button} from "react-bootstrap";
const Rocket = (props) => {
  const { isLoading, error, data } = useQuery("spaceX", () =>
    fetch(
      `https://api.spacexdata.com/v3/rockets/${props.match.params.rocket_id}`
    ).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="content">
      <img
        src={data.flickr_images[data.flickr_images.length - 1]}
        alt="Rocket"
      />
      <p>RocketName : {data.rocket_name}</p>
      <p>Country : {data.country}</p>
      <p>Description :{data.description}</p>
      <p>Booster: {data.boosters}</p>
      <p>Cost: {data.cost_per_launch}</p>
      Diameter:
      <ul>
        <li>Feet: {data.diameter.feet}</li>
        <li>meters: {data.diameter.meters}</li>
      </ul>
      Mass:
      <ul>
        <li>Kg: {data.mass.kg}</li>
        <li>Lb: {data.mass.lb}</li>
      </ul>
      Height:
      <ul>
        <li>Meters: {data.height.meters}</li>
        <li>Feet: {data.height.feet}</li>
      </ul>
      <ul>
        Payload weights:
        {data.payload_weights.map((item) => {
          return (
            <ul>
              <li>Name: {item.name}</li>
              <li>Kg: {item.kg}</li>
              <li>Lb: {item.lb}</li>
            </ul>
          );
        })}
      </ul>
      <Button href={'/Rocket'} variant="success">Go Back to Rocket Page</Button>
    </div>
  );
};
export default Rocket;
