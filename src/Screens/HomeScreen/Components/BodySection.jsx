import BenefitSection from "./BenefitSection";
import HelpSection from "./HelpSection";
import OpenAccountBox from "./OpenAccountBox";

const BodySection = () => {
  return (
    <section className="bg-bodyBg pb-32">
      <BenefitSection />
      <HelpSection />
      <OpenAccountBox />
    </section>
  );
};

export default BodySection;
