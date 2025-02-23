import React from "react";
import "./Services.css";
import image from "../../assets/images/movie.webp";

const Services = () => {
  return (
    <div className="container">
      <div className="images">
        <img src={image} className="movieImage" />
      </div>
      <div className="texts">
        <p>Holidays & Birthdays</p>
        <span>
          You don't know where to have your private party or corporate night
          will you pass? "CineMastercard" to you at the highest level will help
          in organizing events. of "CineMastercard". A wide range of services
          allows you to organize all kinds of holidays will create. This is an
          unforgettable name that will not be forgotten for a long time day or
          presentation, forum and conference in one of our halls can be held.
        </span>

        <p>Closed demonstration</p>
        <span>
          "Closed Screening" service in the "CineMastercard" chain of cinemas
          operates. From this service, both ordinary viewers and corporate
          customers have the opportunity to use.
        </span>
        <p>Platinum Movie Suites</p>
        <span>
          "Platinum" applied by "CineMastercard" cinema chain "Movie Suites"
          concept offers high comfort to the audience makes it possible to watch
          movies in armchairs.
        </span>
        <p>Newtnames</p>
        <span>
          "Invitation" applied in "CineMastercard" cinema chain with the help of
          the "sales system", the audience chooses the invitation at the box
          office based on the movie, you can exchange it for a ticket and enter
          the hall without paying.
        </span>
      </div>
    </div>
  );
};

export default Services;
