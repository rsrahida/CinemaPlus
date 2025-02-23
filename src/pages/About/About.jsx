import React from "react";
import "./About.css";
import image from "../../assets/images/cinema.avif";

const About = () => {
  return (
    <div className="image-container">
      <img src={image} alt="About" className="image" />
      <div className="overlay"></div> {/* Yaşıl bulanıqlı örtük */}
      <div className="text">
        <h1>“Cinema Mastercard”</h1>
        <p>
          CineMastercard network includes 9 cinemas, 50+ screens, and 5000+
          seats. It is equipped with a digital projection system capable of
          displaying high-definition 3D content and high-quality cinema screens.
          It also features enhanced brightness and precise “Enhanced 4K Barco”
          imaging. All of these and other factors allow for the best quality
          film screenings. The "Platinum Movie Suites" concept applied by the
          CineMastercard cinema network provides viewers with the opportunity to
          watch movies in luxurious, high-comfort Italian and Spanish leather
          chairs that fully recline, while also ordering food and drinks during
          the movie. Additionally, the cinema has 6 glass mini Skybox halls
          located on the upper floors of the halls, with seating for 6 to 12
          people. Viewers can enjoy watching films in comfortable seats equipped
          with individual lighting and gadget charging devices. Access to each
          Skybox hall is possible by lift. There are two VIP DIAMOND halls,
          equipped with large, comfortable, automatic reclining seats with
          footrests and tables specially installed for VIP guests. All seats are
          spaced apart, creating a comfortable environment. In the last rows,
          there are comfortable sofas that resemble home settings. Additionally,
          CineMastercard has introduced Dolby Atmos technology in Azerbaijan for
          the first time. Thanks to the ability to place and move sound effects
          anywhere in the cinema, Dolby Digital Atmos allows filmmakers to
          elevate the sound experience in cinema to a new level. As a result,
          viewers do not just watch what happens on screen, but they are placed
          at the center of the action. Also, the 4DX format is applied
          exclusively in the CineMastercard cinema in the country. The
          innovative 4DX cinema technology enhances the visual effects of
          fast-paced blockbusters and horror films with additional special
          effects such as movement, rotation, seat vibrations, water droplets,
          wind, lightning, snow, soap bubbles, and scents. As a result, 4DX is
          considered one of the most captivating formats in the film industry,
          immersing viewers in the events happening on the big screen.
        </p>
      </div>
    </div>
  );
};

export default About;
