import robotImg from "../../../assets/robot.svg";
import cubeImg from "../../../assets/cube.svg";

const HeroSection = () => {
  return (
    <section
      className="h-screen"
      style={{
        background: "rgb(0, 0, 0)",
        backgroundImage:
          "linear-gradient(160deg, rgba(0,0,0,1) 40%, rgba(83,46,163,1) 75%, rgba(255,205,255,1) 100%)",
      }}
    >
      {/* Heading */}
      <div className="absolute left-44 top-56">
        <h1
          className=" md-text-100 font-lexend font-semibold leading-normal text-white w-8/12"
          style={{ fontSize: "5.5rem" }}
        >
          The Stellar Developer Co-pilot.
        </h1>

        {/* Button */}
        <div className="flex gap-8 mt-8">
          <button className="bg-customBlue font-lexend py-4 px-7 rounded-full text-2xl">
            Try Now!
          </button>
          <button className="bg-customDarkBlue font-lexend py-4 px-7 rounded-full text-white border-2 border-customBlue border-solid text-2xl">
            Get Contacted
          </button>
        </div>
      </div>

      <img
        src={robotImg}
        alt="robot"
        className=" max-w-md absolute right-44 top-64"
      />

      <img
        src={cubeImg}
        alt="cube"
        className="absolute top-96"
        style={{ width: "35rem" }}
      />
    </section>
  );
};

export default HeroSection;
