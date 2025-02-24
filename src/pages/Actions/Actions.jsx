import React from "react";
import "./Actions.css";
import image from "../../assets/images/camera.jpg";
import actionImage from "../../assets/images/actions.jpg";

const Actions = () => {
  return (
    <div className="actions">
      <div className="images">
        <img src={image} className="cameraImage" />
      </div>
      <div className="actionsText">
        <p>Actions</p>
        <img src={actionImage} className="action" />
        <span>
          Watch movies every day of the week at prices starting from 5 AZN*
          <br />
          On Tuesday of every week, what is mentioned below applies to:
          <br /> Tariffs throughout the day: 2D - 5 AZN 3D - 6 AZN <br />
          All-day tariff for Platinum and Diamond (VIP) tickets - 20 AZN <br />
          Note: The promotion is not valid on holidays and other non-working
          days.
          <br /> Not valid for SKYBOX hall and 4DX format. ***Super Day and
          during other promotions, using bonus, discount and cashback cards it
          is impossible to do. To use only 1 promotion when buying a ticket can
        </span>
      </div>
    </div>
  );
};

export default Actions;
