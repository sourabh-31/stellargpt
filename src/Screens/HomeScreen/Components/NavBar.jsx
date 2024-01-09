import logo from "../../../assets/logo.svg";

const NavBar = () => {
  return (
    <section className="absolute bg-navBarBg flex w-10/12 justify-between left-0 right-0 mx-auto p-5 rounded-full mt-7">
      <div className="flex items-center gap-2 ml-3">
        <img src={logo} alt="logo" />
        <div className="text-white font-lexend text-2xl">
          Stellar<span className="text-customBlue">GPT</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="text-white font-lexend text-lg hover:bg-hoverBg px-5 py-3 rounded-full">
          Home
        </button>
        <button className="text-white font-lexend text-lg hover:bg-hoverBg  px-5 py-3 rounded-full">
          Plans
        </button>
        <button className="text-white font-lexend text-lg hover:bg-hoverBg  px-5 py-3 rounded-full">
          About
        </button>
        <button className="text-white font-lexend text-lg hover:bg-hoverBg  px-5 py-3 rounded-full">
          Security
        </button>
      </div>

      <div className="flex gap-8 mr-4 items-center">
        <button className="text-white font-lexend text-lg hover:bg-hoverBg  px-7 py-4 rounded-full">
          Sign Up
        </button>
        <button className="text-white font-lexend text-lg bg-customBlue px-7 py-4 rounded-full">
          Login
        </button>
      </div>
    </section>
  );
};

export default NavBar;
