import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img
          src={"/assets/logo.png"}
          alt="Johannes Erdahl Andresen"
          className="hero__image"
        />
        <h1 className="hero__name">Johannes Erdahl Andresen</h1>
      </div>
    </div>
  );
};

export default Hero;
