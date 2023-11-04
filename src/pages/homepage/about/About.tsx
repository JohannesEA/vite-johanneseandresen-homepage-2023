import { useState } from "react";
import "./About.scss";
import Modal from "../../../components/modal/Modal";
import { AboutMeModalContent } from "./AboutMeModalContent";
import { EducationModalContent } from "./EducationModalContent";

interface AboutDetails {
  label: string;
  value: string;
}

const aboutDetails: AboutDetails[] = [
  { label: "Alder", value: "26" },
  { label: "Utdannelse", value: "Dataingeniør" },
  { label: "Erfaring", value: "2 år som fullstack utvikler" },
  { label: "Språk", value: "Norsk, Engelsk" },
  {
    label: "Programmeringsspråk",
    value: "Kotlin, Java, Javascript, Typescript, Python",
  },
  { label: "Rammeverk", value: "React, Ktor, Firebase, React-native" },
];

const About = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDetails, setSelectedDetails] = useState<AboutDetails | null>(
    null
  );

  const getAboutModalContet = (label: string) => {
    if (label === "Alder") {
      return <AboutMeModalContent />;
    }
    return <EducationModalContent />;
  };

  return (
    <section className="about">
      <h2 className="about__title">Om</h2>

      <img
        src={"src/assets/logo.png"}
        alt="Johannes Erdahl Andresen"
        className="about__image"
      />
      <div className="about__container">
        {aboutDetails.map((detail) => (
          <div
            onClick={() => {
              setSelectedDetails(detail);
              setShowModal(true);
            }}
            key={detail.label}
            className="about__card"
          >
            <span className="about__card-label">{detail.label}</span>
            <span className="about__card-value">{detail.value}</span>
          </div>
        ))}
      </div>

      <Modal
        title={selectedDetails?.label}
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
        children={getAboutModalContet(selectedDetails?.label || "")}
      />
    </section>
  );
};

export default About;
