import { useState } from "react";
import "./About.scss";
import Modal from "../../../components/modal/Modal";
import { AboutMeModalContent } from "./AboutMeModalContent";
import { EducationModalContent } from "./EducationModalContent";
import { ExperienceModalContent } from "./ExperienceModalContent";
import LanguageModalContent from "./LanguageModalContent";
import ProgrammingLanguageModalContent from "./ProgrammingLanguageModalContent";
import FrameworkModalContent from "./FrameworkModalContent";
import { AboutDetails, AboutLabels } from "../../../types";
import { ABOUT_DETAILS } from "../../../development/data";
import InfoCard from "../../../components/card/InfoCard";

const About = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDetails, setSelectedDetails] = useState<AboutDetails | null>(
    null
  );

  const getAboutModalContent = (label: AboutLabels) => {
    switch (label) {
      case AboutLabels.Age:
        return <AboutMeModalContent />;
      case AboutLabels.Experience:
        return <ExperienceModalContent />;
      case AboutLabels.Education:
        return <EducationModalContent />;
      case AboutLabels.Languages:
        return <LanguageModalContent />;
      case AboutLabels.ProgrammingLanguages:
        return <ProgrammingLanguageModalContent />;
      case AboutLabels.Frameworks:
        return <FrameworkModalContent />;
      default:
        return <FrameworkModalContent />;
    }
  };

  return (
    <section className="about">
      <img
        src="/assets/johannes.jpeg"
        alt="Johannes Erdahl Andresen"
        className="about__image"
      />

      <h2 className="about__title">Johannes Erdahl Andresen</h2>
      <div className="about__container">
        {ABOUT_DETAILS.map((detail) => (
          <InfoCard
            key={detail.label}
            label={detail.label}
            value={detail.value}
            onClick={() => {
              setSelectedDetails(detail);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      <Modal
        title={selectedDetails?.label}
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
        children={getAboutModalContent(
          selectedDetails?.label || AboutLabels.Age
        )}
      />
    </section>
  );
};

export default About;
