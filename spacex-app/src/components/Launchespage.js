import React ,{useState, useEffect}from "react";
import { useQuery } from "react-query";
import Table from "react-bootstrap/Table";
import {Button, Badge} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import axios from "axios"
const LaunchesPage = () => {
  const [launchs, setLaunchs] = useState([]);
  const [filterLaunchs, setFilterLaunchs] = useState([]);
  const [filterBySuccess, setFilterBySuccess] = useState("all");
  const [filterByName, setFilterByName] = useState("all");
  const [filterByYear, setFilterByYear] = useState("all");
  useEffect(async () => {
    const launchs = await axios.get("https://api.spacexdata.com/v3/launches");
    setLaunchs(launchs.data);
    setFilterLaunchs(launchs.data);
    console.log(launchs);
  }, []);
  const filterSuccess = (option) => {
    if (option !== "all") {
      if (filterByName !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            String(data.launch_success) === option &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter(
          (data) => String(data.launch_success) === option
        );
        setFilterLaunchs(filter);
      }
    } else {
      if (filterByName !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  const filterName = (option) => {
    if (option !== "all") {
      if (filterBySuccess !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            data.rocket.rocket_id === option &&
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter(
          (data) => data.rocket.rocket_id === option
        );
        setFilterLaunchs(filter);
      }
    } else {
      if (filterBySuccess !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  const filterYear = (option) => {
    if (option !== "all") {
      if (filterBySuccess !== "all" || filterByName !== "all") {
        const filter = launchs.filter(
          (data) =>
            data.launch_year === option &&
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter((data) => data.launch_year === option);
        setFilterLaunchs(filter);
      }
    } else {
      if (filterBySuccess !== "all" || filterByName !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  return (
    <Container fluid>
      <Card className="p-3 rounded mt-5 mx-3" border="dark">
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
              <Form.Label>
                <h4>Launch year</h4>
              </Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => {
                  setFilterByYear(e.target.value);
                  filterYear(e.target.value);
                }}
              >
                <option value="all">Choose...</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
              <Form.Label>
                <h4>Rocket name</h4>
              </Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => {
                  setFilterByName(e.target.value);
                  filterName(e.target.value);
                }}
              >
                <option value="all">Choose...</option>
                <option value="falcon1">Falcon 1</option>
                <option value="falcon9">Falcon 9</option>
                <option value="falconheavy">Falcon Heavy</option>
                <option value="starship">Starship</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
              <Form.Label>
                <h4>Launch success</h4>
              </Form.Label>
              <Form.Control
                as="select"
                defaultValue={"all"}
                onChange={(e) => {
                  setFilterBySuccess(e.target.value);
                  filterSuccess(e.target.value);
                }}
              >
                <option value="all">Choose...</option>
                <option value={false}>False</option>
                <option value={true}>True</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Card>
      <br></br>
      <Table striped bordered hover variant="dark" responsive="md">
        <thead>
          <tr>
            <th style={{width: '20%'}}>Launch Year</th>
            <th style={{width: '20%'}}>Mission Icon</th>
            <th style={{width: '20%'}}>Mission Name</th>
            <th style={{width: '20%'}}>Rocket Name</th>
            <th style={{width: '10%'}}>Launch Success</th>
            <th style={{width: '10%'}}>Read More Detail</th>
          </tr>
        </thead>
        <tbody>
          {filterLaunchs.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.launch_year}</td>
                <td><img src={item?.links.mission_patch_small} style={{width:'100%',height:'100%'}}></img></td>
                <td>{item.mission_name}</td>
                <td>{item.rocket.rocket_name}</td>
                <td>
                  <Badge variant={item.launch_success ? "success" : "danger"} className="d-flex justify-content-center">
                    {item.launch_success ? "Success" : "Fail"}
                  </Badge>
                </td>
                <td>
                  <Button variant="info" href={`/Launches/${item.flight_number}`} style={{textAlign: "center", alignItems: "center"}} size="md">
                    Click
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default LaunchesPage;
