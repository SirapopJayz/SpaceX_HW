import React from "react";
import "../index.css"
import "./Homepage.css";
import Video1 from "../components/videos/video-1.mp4"
import { useQuery } from "react-query";

const Homepage = () => {
  const { isLoading, error, data } = useQuery('spaceX', () =>
     fetch('https://api.spacexdata.com/v3/info').then(res =>
       res.json()
     )
   )
   if (isLoading) return 'Loading...'
   if (error) return 'An error has occurred: ' + error.message
  //  console.log(data);

  return (
      <div className='home-container'>
        <video loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className='row home-row'>
          <div className='col'>
            <div className='home-text'>
              <div className='topic'>
                {data.name}
              </div>
              <div className='subtitle'>
                {data.summary}
              </div>
            </div>
            <div className='founder-info'>
              <div className='topic-founder'>
                Founder
              </div>
              <div className='subtitle-founder'>
                {data.founder}<br></br><br></br>
                <a href={data?.links?.elon_twitter}><i className="fab fa-twitter"></i></a>
                <a href={data?.links?.website}><i className="fas fa-rocket"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="content">
          <h3>Founder : {data.founder}</h3>
          <h3>Elon's Twitter : <a href={data.links.elon_twitter}><i className="fab fa-twitter"></i></a></h3>
          <h4>Address : {data.headquarters.address}</h4>
          <h4>City : {data.headquarters.city}</h4>
          <h4>State : {data.headquarters.state}</h4><br></br>
          <p>Official WebPage: <a href={data.links.website}>SpaceX<i className="fas fa-rocket"></i></a></p>
        </div> */}
      </div>
  );
};
export default Homepage;
