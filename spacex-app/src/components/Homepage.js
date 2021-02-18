import React from "react";
import "./Homepage.css";
import { useQuery } from "react-query";
const Homepage = () => {
  const { isLoading, error, data } = useQuery('spaceX', () =>
     fetch('https://api.spacexdata.com/v3/info').then(res =>
       res.json()
     )
   )
   if (isLoading) return 'Loading...'
   if (error) return 'An error has occurred: ' + error.message
   console.log(data);
  return (
      <div className="content">
        <h3>Founder : {data.founder}</h3>
        <h3>Elon's Twitter : <a href={data.links.elon_twitter}><i className="fab fa-twitter"></i></a></h3>
        <h4>Address : {data.headquarters.address}</h4>
        <h4>City : {data.headquarters.city}</h4>
        <h4>State : {data.headquarters.state}</h4><br></br>
        <p>Summary: {data.summary}</p><br></br>
        <p>Official WebPage: <a href={data.links.website}>SpaceX<i className="fas fa-rocket"></i></a></p>
      </div>
  );
};
export default Homepage;
