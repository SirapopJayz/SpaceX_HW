import React from "react";
import { useQuery } from "react-query";
import "./Rocketpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';
// import Video2 from "../components/videos/video-2.mp4"
const RocketPage = () => {
  const { isLoading, error, data } = useQuery("spaceX", () =>
    fetch("https://api.spacexdata.com/v3/rockets").then((res) => res.json())
  );
  const datalist = [];
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  for (let i = 0; i < data.length; i++) {
    datalist.push({
      rocket_id: data[i].rocket_id,
      rocket_name: data[i].rocket_name,
      description: data[i].description,
      active: data[i].active,
      images_url: data[i].flickr_images,
      wikipedia: data[i].wikipedia,
    });
  }
  console.log(data);
  return (
    <div className="content">
        {datalist.map((item, i) => {
          return (
            <div className="container">
              {/* <video loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video>
                <source src={Video2} type="video/mp4" />
              </video> */}
              <Card>
                <Card.Img variant="top" src={item?.images_url?.[0]} />
                <Card.Body>
                  <Card.Title>{item.rocket_name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href={`/Rocket/${item.rocket_id}`}>Read more Detail</Card.Link>
                  <Card.Link href={item.wikipedia}>Wiki Pedia</Card.Link>
                </Card.Body>
              </Card>
            </div>
            
          );
        })}
      {/* </ul> */}
    </div>
  );
};
export default RocketPage;