import arrow from "../../../assets/arrows.svg";
import BenefitBox from "./BenefitBox";
import chartIcon from "../../../assets/chartIcon.svg";
import bulbIcon from "../../../assets/bulb.svg";
import bagIcon from "../../../assets/bag.svg";
import diskIcon from "../../../assets/disk.svg";

const BenefitSection = () => {
  return (
    <section>
      <div className="flex">
        <div className="pt-48 pl-40">
          <h1 className="text-white text-5xl font-lexend">
            Our <span className="text-customBlue">Benefits</span>
          </h1>
          <p className="text-gray-400 font-lexend w-3/4 pt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <img src={arrow} alt="arrow" className="absolute right-10 mt-40" />
      </div>

      <div className="flex flex-wrap w-auto justify-center mt-24 gap-x-20 gap-y-24">
        <BenefitBox heading={"Easy Understanding"} icon={chartIcon} />
        <BenefitBox heading={"One of its kind"} icon={bulbIcon} />
        <BenefitBox heading={"What's new"} icon={bagIcon} />
        <BenefitBox heading={"Saves Time"} icon={diskIcon} />
      </div>
    </section>
  );
};

export default BenefitSection;
