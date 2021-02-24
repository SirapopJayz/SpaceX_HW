import React from "react";
import { useQuery } from "react-query";
import "./Rocket.css";
import Video2 from "../../components/videos/video-2.mp4"
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
    <div className="container">
      <video loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video>
                <source src={Video2} type="video/mp4" />
              </video>
      <div className="bg">
        
        <div className="img-conainer">
          <img
            src={data.flickr_images[data.flickr_images.length - 1]}
            alt="Rocket"
          />
        </div>
        <div className="context-container">
          <div className="context">
            <h2>{data.rocket_name}</h2>
            <h5><strong>Country :</strong> {data.country}</h5>
            <h5><strong>Description :</strong>{data.description}</h5>
            <h5><strong>Booster :</strong> {data.boosters}</h5  >
            <h5><strong>Cost :</strong> {data.cost_per_launch}</h5>
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
          </div>
        </div>
        <Button href={'SpaceX_HW/Rocket'} variant="success">Go Back to Rocket Page</Button>
      </div>
    </div>
  );
};
export default Rocket;