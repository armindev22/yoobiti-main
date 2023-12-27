import { useState } from "react";
// import Collapsible from 'react-collapsible';
import CollapsiableFaq from "../components/common/CollapsiableFaq";
// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/Arrow-Right-blue.svg";
import FaqLanding from "../assets/landing/section-banner-6.svg";
import SectionBanner4 from "../assets/landing/section-banner-4.svg";
import SectionBanner5 from "../assets/landing/section-banner-5.svg";
import SectionBanner3 from "../assets/landing/section-banner-3.svg";
import SectionBanner2 from "../assets/landing/section-banner-2.svg";
import SectionBanner1 from "../assets/landing/section-banner-1.svg";
import HeaderBanner from "../assets/landing/header-banner.svg";
// import SectionFiveImage from "../assets/landing/section-banner-5.svg"

const Landing = () => {
  const [data] = useState([
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      title: "Do you have any questions?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
  ]);

  return (
    <main>
      <div className="grid grid-cols-2 md:px-24 px-6 mt-24">
        <div className="lg:col-span-1 col-span-2">
          <div className="bg-[#F0F3FD] lg:max-w-[310px] w-full text-center  py-2 rounded-bl-none rounded-[20px]">
            <p className="gradient-text">No programming and high cost!</p>
          </div>
          <div className="mt-4">
            <p className="font-bold text-h1 md:text-h2  min-[320px]:max-md:text-h4 md:text-left min-[320px]:max-md:text-center ">
              Create A{" "}
              <span className="font-medium gradient-website-text">
                Website{" "}
              </span>
              <br />
              In{" "}
              <span className="font-medium gradient-website-text">
                10 Minutes
              </span>
              !
            </p>
            <p className="text-text-20 font-medium text-h8 mt-[10px] min-[320px]:max-md:text-center">
              Whether you are a large company or a small company,
              <br />
              create a store website or a corporate website easily and
              <br />
              without restrictions.
            </p>
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-x-9">
            <button className=" md:max-w-[227px] w-full  rounded-[10px] button-backgroundColor flex items-center justify-center h-16 gap-x-1 text-white">
              <ArrowRightIcon className="text-white" />
              {/* <img src="assets/icons/Arrow-Right.svg" alt="arrows" /> */}
              Get Started
            </button>
            <p className="text-text-20 font-medium text-h7 hidden md:block">
              or
            </p>
            <button className="mt-[15px] md:mt-0 bg-[#EEF2F8] h-16 md:max-w-[144px] w-full rounded-[10px] text-primary-20 font-medium text-h9">
              Login
            </button>
          </div>
          <div className="mt-4">
            <p className="text-text-20 text-h8 font-medium">
              No programming and high cost!
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <img src={HeaderBanner} alt="banner-landing" />
        </div>
      </div>
      <div className="grid grid-cols-7 px-24 min-[320px]:max-md:px-10 mt-24">
        <div className="lg:col-span-4 col-span-7  order-last lg:order-first">
          <img src={SectionBanner1} alt="banner" />
        </div>
        <div className="lg:col-span-3 col-span-7 lg:order-last">
          <div className="">
            <p className="text-h4 font-light capitalize">
              Whether it's a{" "}
              <span className="gradient-text font-semibold text-h4">
                landing page
              </span>{" "}
              or
              <br />a{" "}
              <span className="gradient-text font-semibold text-h4">
                complex website
              </span>
              , create it
              <br />
              <span className="gradient-text font-semibold text-h4">
                easily
              </span>{" "}
              and{" "}
              <span className="gradient-text font-semibold text-h4">
                in no time{" "}
              </span>
              with
              <br /> yoobiti!
            </p>
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus.
            </p>
            <button className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] text-primary-5">
              <ArrowRightIcon />
              {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[70px] px-24 lg:px-0 min-[320px]:max-md:px-10">
        <p className="text-h4 font-light capitalize text-primary-20 text-center hidden lg:block">
          Do you want a{" "}
          <span className="gradient-text font-semibold">store</span> website or
          a <span className="gradient-text-blue font-semibold">Company</span>
          <br /> website?
        </p>
        <p className="text-h4 font-light capitalize text-primary-20 text-center lg:hidden">
          Do you want a{" "}
          <span className="gradient-text font-semibold">store</span> website or
          <br /> a <span className="gradient-text font-semibold">
            Company
          </span>{" "}
          website?
        </p>
      </div>
      <div className="grid grid-cols-2 px-24 mt-24 min-[320px]:max-md:px-10">
        <div className="lg:col-span-1 col-span-2">
          <div className="">
            <p className="text-h4 font-medium capitalize gradient-text">
              Create a website for your company.
            </p>
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus.
            </p>
            <button className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] text-primary-5">
              <ArrowRightIcon />
              {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
              create website
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 lg:mt-0 mt-[50px]">
          <img src={SectionBanner2} alt="banner" />
        </div>
      </div>
      <div className="grid grid-cols-7 px-24 mt-24 min-[320px]:max-md:px-10">
        <div className="lg:col-span-4 col-span-7 order-last lg:order-first mt-[50px] lg:mt-0">
          <img src={SectionBanner3} alt="banner" />
        </div>
        <div className="lg:col-span-3 col-span-7 lg:order-last  flex flex-col justify-center">
          <div className="">
            <p className="text-h4 font-medium capitalize gradient-text">
              Create a website for your store.
            </p>
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus.
            </p>
            <button className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] text-primary-5">
              <ArrowRightIcon />
              {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
              create website
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 px-24 mt-24 min-[320px]:max-md:px-10">
        <div className="lg:col-span-3 col-span-7 flex flex-col justify-center">
          <div className="">
            <p className="text-h4 font-light capitalize text-primary-20">
              You have a complete{" "}
              <span className="gradient-text font-semibold">
                management panel
              </span>{" "}
              for your website!
            </p>
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus.
            </p>
            <button className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] text-primary-5">
              {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
              <ArrowRightIcon />
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-7">
          <img src={SectionBanner4} alt="banner" />
        </div>
      </div>
      <div className="grid grid-cols-7 px-24 mt-24 min-[320px]:max-md:px-10">
        <div className="lg:col-span-2 col-span-7">
          <p className="text-center text-h4 font-medium capitalize text-primary-20 lg:hidden">
            how to i <span className="gradient-text">create</span> a website ?
          </p>
          <img
            src={SectionBanner5}
            alt="banner"
            className="mt-[50px] lg:mt-0 w-full"
          />
          <button className="lg:mt-5 flex items-center gap-x-3  h-16  px-4 py-[10px] text-primary-5 -mt-[30px]">
            <ArrowRightIcon />
            Get Started
          </button>
        </div>
        <div className="lg:col-span-5 col-span-7 flex flex-col justify-center mt-[50px] lg:mt-0">
          <div className="grid grid-cols-2 gap-6">
            <div className="lg:col-span-1 col-span-2">
              <div className="border-image-card">
                <div className="p-[25px] ">
                  <p className="text-h7 font-medium capitalize text-primary-20">
                    <span className="gradient-text text-h7 font-medium">
                      1-
                    </span>
                    sign up
                  </p>
                  <p className="text-text-20 font-normal text-h10 capitalize mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="border-image-card">
                <div className="p-[25px] ">
                  <p className="text-h7 font-medium capitalize text-primary-20">
                    <span className="gradient-text text-h7 font-medium">
                      2-
                    </span>
                    Choose a plan to get started
                  </p>
                  <p className="text-text-20 font-normal text-h10 capitalize mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="border-image-card">
                <div className="p-[25px] ">
                  <p className="text-h7 font-medium capitalize text-primary-20">
                    <span className="gradient-text text-h7 font-medium">
                      3-
                    </span>
                    Choose your favorite template
                  </p>
                  <p className="text-text-20 font-normal text-h10 capitalize mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="border-image-card">
                <div className="p-[25px] ">
                  <p className="text-h7 font-medium capitalize text-primary-20">
                    <span className="gradient-text text-h7 font-medium">
                      4-
                    </span>
                    edit your template
                  </p>
                  <p className="text-text-20 font-normal text-h10 capitalize mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="border-image-card">
                <div className="p-[25px] ">
                  <p className="text-h7 font-medium capitalize text-primary-20">
                    <span className="gradient-text text-h7 font-medium">
                      5-
                    </span>
                    Publish your website
                  </p>
                  <p className="text-text-20 font-normal text-h10 capitalize mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-12 flex justify-center items-center w-full">
        <p className="text-primary-20 text-h4 font-medium">FAQs</p>
      </div>
      <div className="grid grid-cols-2 mt-24 md:px-24 px-6">
        <div className="lg:col-span-1 col-span-2">
          <img src={FaqLanding} alt="banner" />
        </div>
        <div className="lg:col-span-1 col-span-2 lg:block flex flex-col items-center mt-[50px] lg:mt-0">
          {data.map((item, index) => {
            return (
              <CollapsiableFaq
                index={index}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Landing;
