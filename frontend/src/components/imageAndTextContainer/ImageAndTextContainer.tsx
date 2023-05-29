import React from "react";
import "./imageAndTextContainer.css";
import { isMobile } from "../../utils/utils";

interface ImageAndTextContainerProps {
  title: string;
  description: string;
  slogan?: string;
  img: string;
  switch: boolean;
}

const ImageAndTextContainer: React.FC<ImageAndTextContainerProps> = ({
  title,
  description,
  slogan,
  img,
  switch: imgSwitch,
}) => {
  if (isMobile()) {
    return (
      <div className="image-text-container">
        <div className="image-text-container__image">
          <img src={img} alt={title} />
        </div>
        <div className="image-text-container__text">
          <h1>{title}</h1>
          <br />
          {slogan && <h2>{slogan}</h2>}
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="image-text-container">
      {imgSwitch ? (
        <>
          <div className="image-text-container__image">
            <img src={img} alt={title} />
          </div>
          <div className="image-text-container__text">
            <h1>{title}</h1>
            <br />
            {slogan && <h2>{slogan}</h2>}
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="image-text-container__text">
            <h1>{title}</h1>
            <br />
            {slogan && <h2>{slogan}</h2>}
            <p>{description}</p>
          </div>
          <div className="image-text-container__image">
            <img src={img} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageAndTextContainer;