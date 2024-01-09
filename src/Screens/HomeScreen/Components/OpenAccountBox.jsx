import design from "../../../assets/accountDesign.svg";

const OpenAccountBox = () => {
  return (
    <section
      className="p-16 mt-32 bg-benefitBox w-accountBox flex items-center rounded-3xl left-0 right-0 mx-auto"
      style={{
        backgroundImage: `url(${design})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div>
        <h1 className="text-white text-3xl font-lexend">
          Start Your Development{" "}
          <span className="text-customBlue">Journey Today</span>
        </h1>
        <p className="text-gray-400 font-lexend mt-5 w-3/4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <button className="font-lexend text-lg bg-customBlue rounded-full whitespace-nowrap px-6 py-3">
        Open Account
      </button>
    </section>
  );
};

export default OpenAccountBox;
