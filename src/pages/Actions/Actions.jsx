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
          Həftənin hər günü 5 AZN-dən* başlayan qiymətlərlə film izləyə
          bilərsiniz.
          <br />
          Hər həftənin Çərşənbə axşamı günü isə aşağıda qeyd olunanlar
          keçərlidir:
          <br /> Günboyu tariflər: 2D - 5 AZN 3D - 6 AZN <br />
          Platinum və Diamond (VİP) biletləri üzrə günboyu tarif - 20 AZN <br />
          Qeyd: Bayram və digər qeyri-iş günləri aksiya keçərli deyil.
          <br /> SKYBOX zalı və 4DX formatı üçün keçərli deyil. ***Super Gün və
          digər aksiyalar zamanı, bonus, endirim və keşbek kartlarından istifadə
          etmək mümkün deyil. Bilet alarkən yalnız 1 aksiyadan istifadə etmək
          olar.
        </span>
      </div>
    </div>
  );
};

export default Actions;
