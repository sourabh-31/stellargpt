import HelpBox from "./HelpBox";
import screen from "../../../assets/screen.svg";
import pieChart from "../../../assets/pieChart.svg";

const HelpSection = () => {
  return (
    <section>
      <div className="flex">
        <div className="pt-36 pl-40">
          <h1 className="text-white text-5xl font-lexend">
            How we <span className="text-customBlue">Help!</span>
          </h1>
          <p className="text-gray-400 font-lexend w-3/4 pt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap w-auto justify-center mt-24 gap-x-44">
        <HelpBox
          dynamicStyle={{
            backgroundImage: `url(${screen})`,
            backgroundPosition: "left 5rem top 30rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "90%",
          }}
        />
        <HelpBox
          dynamicStyle={{
            backgroundImage: `url(${pieChart})`,
            backgroundPosition: "center calc(100% - 100px)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
          }}
        />
      </div>
    </section>
  );
};

export default HelpSection;
