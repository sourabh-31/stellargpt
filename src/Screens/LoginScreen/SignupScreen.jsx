import NavBar from "../HomeScreen/Components/NavBar";
import google from "../../assets/googleContainer.svg";
import fb from "../../assets/facebookContainer.svg";
import apple from "../../assets/appleContainer.svg";

const SignupScreen = () => {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-loginBg pb-96">
        <div className=" w-2/3 left-0 right-0 mx-auto relative top-56 bg-insideBg border border-footerBorder border-solid py-24 rounded-3xl">
          <h1 className="text-5xl font-lexend text-customBlue font-medium text-center">
            Sign Up
          </h1>
          <p className="font-lexend text-lg text-center mt-7 text-white font-extralight">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
          <div className="flex flex-wrap gap-x-16 gap-y-8 mt-12 justify-center">
            <div>
              <input
                placeholder="Enter First Name"
                type="text"
                className="bg-loginBg w-loginInput px-6 py-5 rounded-full font-lexend outline-none border border-footerBorder border-solid text-white"
              />
            </div>
            <div>
              <input
                placeholder="Enter First Name"
                type="text"
                className="bg-loginBg w-loginInput px-6 py-5 rounded-full font-lexend outline-none border border-footerBorder border-solid text-white"
              />
            </div>
            <div>
              <input
                placeholder="Enter First Name"
                type="text"
                className="bg-loginBg w-loginInput px-6 py-5 rounded-full font-lexend outline-none border border-footerBorder border-solid text-white"
              />
            </div>
            <div>
              <input
                placeholder="Enter First Name"
                type="text"
                className="bg-loginBg w-loginInput px-6 py-5 rounded-full font-lexend outline-none border border-footerBorder border-solid text-white"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="font-lexend bg-customBlue w-loginBtn py-5 rounded-full text-lg">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center mt-7">
            <button className="font-lexend bg-hoverBg w-loginBtn py-5 rounded-full text-lg text-white">
              Login
            </button>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="w-loginBtn border-b border-white border-solid"></div>
            <p className="text-white font-lexend font-light text-lg bg-insideBg -mt-4 px-5">
              Or Continue with
            </p>
          </div>
          <div className="flex justify-center mt-10 gap-8">
            <img src={google} alt="google" />
            <img src={fb} alt="facebook" />
            <img src={apple} alt="apple" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupScreen;
