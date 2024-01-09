const HelpBox = ({ dynamicStyle }) => {
  return (
    <section
      className="p-14 z-10 w-helpBox rounded-helpBox bg-helpBox h-helpBox"
      style={dynamicStyle}
    >
      <p className="text-white font-light font-lexend mt-5 ml-5 w-2/3 text-2xl">
        <span className="font-semibold">We Create </span>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitatio.
      </p>
      <p className="text-white font-light font-lexend text-2xl ml-5 mt-10">
        Click here to know more →
      </p>
    </section>
  );
};

export default HelpBox;
