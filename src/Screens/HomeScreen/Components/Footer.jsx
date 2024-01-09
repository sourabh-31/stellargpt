import logo from "../../../assets/logo.svg";
import mail from "../../../assets/mail.svg";
import phone from "../../../assets/phone.svg";
import location from "../../../assets/location.svg";
import fb from "../../../assets/fb.svg";
import twitter from "../../../assets/twitter.svg";
import linkedIn from "../../../assets/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="h-footer bg-benefitBox">
      <div className="border-b border-footerBorder pt-24 pb-14 w-10/12 left-0 right-0 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" />
          <div className="text-white font-lexend text-2xl">
            Stellar<span className="text-customBlue">GPT</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <a href="#" className="text-white font-lexend text-lg">
            Home
          </a>
          <a href="#" className="text-white font-lexend text-lg">
            Careers
          </a>
          <a href="#" className="text-white font-lexend text-lg">
            About
          </a>
          <a href="#" className="text-white font-lexend text-lg">
            Security
          </a>
        </div>
      </div>

      <div className="flex gap-5 justify-center w-10/12 left-0 right-0 mx-auto border-b border-footerBorder py-12">
        <div className="flex gap-2">
          <img src={mail} alt="mail" />
          <p className="text-white font-lexend text-lg">hello@Stellar.com</p>
        </div>
        <div className="flex gap-2">
          <img src={phone} alt="mail" />
          <p className="text-white font-lexend text-lg">+91 91813 23 2309</p>
        </div>
        <div className="flex gap-2">
          <img src={location} alt="mail" />
          <p className="text-white font-lexend text-lg">
            Somewhere in the World
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center w-10/12 left-0 right-0 mx-auto border border-footerBorder p-4 rounded-full mt-12">
        <div className="flex gap-4">
          <img src={fb} alt="fb" />
          <img src={twitter} alt="tweet" />
          <img src={linkedIn} alt="lnkdIn" />
        </div>
        <div>
          <p className="text-footerText text-lg font-lexend font-light">
            YourBank All Rights Reserved
          </p>
        </div>
        <div className="flex text-footerText text-lg font-lexend font-light gap-3 mr-3">
          <p>Privacy Policy</p>
          <span> | </span>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
