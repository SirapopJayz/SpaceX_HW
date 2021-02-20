import React from "react";
import { useQuery } from "react-query";
import "./Rocketpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
// import Rocketitem from './Item/Rocketitem'
const RocketPage = () => {
  const { isLoading, error, data } = useQuery("spaceX", () =>
    fetch("https://api.spacexdata.com/v3/rockets").then((res) => res.json())
  );
  const datalist = [];
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  for (let i = 0; i < data.length; i++) {
    datalist.push({
      rocket_name: data[i].rocket_name,
      description: data[i].description,
      active: data[i].active,
      images_url: data[i].flickr_images,
    });
  }
  // console.log(data);
  return (
    <div className="content">
      <ul>
        {datalist.map((item, i) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.images_url[0]} />
              <Card.Body>
                <Card.Title>{item.rocket_name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};
export default RocketPage;
