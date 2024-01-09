import robotImg from "../../../assets/robot.svg";
import cubeImg from "../../../assets/cube.svg";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black bg-heroGradient">
      {/* Heading */}
      <div className="absolute left-44 top-60">
        <h1 className=" md-text-100 font-lexend font-semibold leading-normal text-white w-8/12 text-heroText">
          The Stellar Developer Co-pilot.
        </h1>

        {/* Button */}
        <div className="flex gap-8 mt-8">
          <button className="bg-customBlue font-lexend py-4 px-7 rounded-full text-xl z-10">
            Try Now!
          </button>
          <button className="bg-customDarkBlue font-lexend py-4 px-7 rounded-full text-white border-2 border-customBlue border-solid text-xl z-10">
            Get Contacted
          </button>
        </div>
      </div>

      <img
        src={robotImg}
        alt="robot"
        className=" max-w-md absolute right-40 top-64"
      />

      <img src={cubeImg} alt="cube" className="absolute top-96 w-heroCube" />
    </section>
  );
};

export default HeroSection;
