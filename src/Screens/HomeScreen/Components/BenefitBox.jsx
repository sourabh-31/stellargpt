const BenefitBox = ({ heading, icon }) => {
  return (
    <section
      className="p-14 z-10"
      style={{
        width: "40%",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
        background: "rgb(10,10,9)",
        backgroundImage:
          "linear-gradient(90deg, rgba(10,10,9,1) 40%, rgba(28,28,28,1) 100%)",
      }}
    >
      <div className="flex items-center gap-5">
        <img src={icon} alt="chartIcon" />
        <h1 className="text-white text-2xl font-lexend">{heading}</h1>
      </div>
      <p className="text-gray-400 font-lexend mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
};

export default BenefitBox;
