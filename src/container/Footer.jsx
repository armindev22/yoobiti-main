// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/Arrow-Right-blue.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import LogoYobiti from "../assets/logo/logo-yoobiti.svg";
// import LocationIcon from '../assets/icons/location.svg';
import CallingIcon from "../assets/icons/calling.svg";
import WhatsAppIcon from "../assets/icons/whatsapp.svg";
import WhatsAppIcon2 from "../assets/social/whatsapp.svg";
import TelegramIcon from "../assets/social/telegram.svg";
import InstagramIcon from "../assets/social/instagram.svg";
import TwitterIcon from "../assets/social/twitter.svg";
import FacebookIcon from "../assets/social/Facebook.svg";
import LinkedinIcon from "../assets/social/linkedin.svg";

const Footer = () => {
  return (
    <div
      className="bg-white w-full p-12 mt-20"
      style={{
        boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col md:col-span-1 col-span-2">
          <div className="flex items-center gap-x-3 ">
            <img src={LogoYobiti} alt="Logo" />
            <p className="text-primary-5 text-[32px] font-bold">Yoobiti</p>
          </div>
          <div className="lg:border-none border-under-footer mt-[20px] lg:mt-0"></div>
          <div className="mt-[30px] lg:border-none border-b border-stroke-30 pb-4 lg:pb-0">
            <p className="text-text-20 text-[17px] font-normal capitalize max-w-[610px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper.
            </p>
          </div>
        </div>
        <div className="mt-[60px] flex justify-between md:col-span-1 col-span-2">
          <div className="flex flex-col gap-y-4">
            <p className="text-text-30 text-h7 font-medium capitalize">
              Yoobiti
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              home page
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              about us
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">plans</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-text-30 text-h7 font-medium capitalize">
              Yoobiti
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              home page
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              about us
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">plans</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-text-30 text-h7 font-medium capitalize">
              Yoobiti
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              home page
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">
              about us
            </p>
            <p className="text-text-20 text-h7 font-light lowercase">plans</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-4  mt-[50px]">
        <div
          style={{
            // borderRadius: '56px',
            background:
              "var(--primary-primary-varient, linear-gradient(93deg, #246CDA -10.22%, #609FFF 110.12%))",
          }}
          className="lg:rounded-[56px] rounded-[20px] lg:col-span-8 col-span-12 py-[10px] px-[25px] flex lg:flex-row flex-col lg:justify-between items-center"
        >
          <div className="flex items-center gap-x-4 ">
            <LocationIcon className="text-white" />
            {/* <img src={LocationIcon} alt="location" /> */}
            <p className="text-white font-medium text-h7">
              California, San Diego, 3065 Rosecrans Pl #104
            </p>
          </div>
          <hr className="border-primary-10  w-7 rotate-90 lg:block hidden" />
          <hr className="border-primary-10 w-full my-[20px] lg:hidden" />
          <div className="flex items-center gap-x-3 ">
            <img src={CallingIcon} alt="calling" />
            <p className="text-white text-h10 font-medium">(619) 549-4964</p>
            <span className="text-white text-h10 font-medium">-</span>
            <p className="text-white text-h10 font-medium">(619) 549-4965</p>
          </div>
        </div>
        <div className="lg:rounded-[56px] rounded-[20px] lg:col-span-4 col-span-12 mt-[30px] lg:mt-0 py-[10px] px-[25px] flex justify-between items-center bg-[#198953]">
          <div className="flex items-center gap-x-4">
            <img src={WhatsAppIcon} alt="whatsapp" />
            <p className="text-white font-medium text-h10">
              Do you need guidance{" "}
              <span className="font-semibold">Connect with us on WhatsApp</span>
            </p>
            <ArrowRightIcon className="text-white" />
            {/* <img src="/assets/icons/arrow-right-white.svg" alt="arrow-right-white" /> */}
          </div>
        </div>
      </div>
      <hr className="my-10 border" />
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={WhatsAppIcon2} alt="whatsapp" />
          </div>
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={TelegramIcon} alt="telegram" />
          </div>
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={InstagramIcon} alt="instagram" />
          </div>
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={TwitterIcon} alt="twitter" />
          </div>
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={LinkedinIcon} alt="linkedin" />
          </div>
          <div className="rounded-full border-2 border-stroke-30 p-2">
            <img src={FacebookIcon} alt="Facebook" />
          </div>
        </div>
        <div className="mt-[20px] lg:mt-0">
          <p className="text-h7 font-normal capitalize">
            © 2023{" "}
            <span className="gradient-text text-h7 font-semibold">Yoobiti</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
