/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import CollapsiableFaq from "../components/common/CollapsiableFaq";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SVGs
// import Landig-1 from '/assets/about/landing-1.svg'
import Landig1 from "../assets/about/landing-1.svg";
import Landig2 from "../assets/about/landing-2.svg";
import { ReactComponent as ArrowRightBlue } from "../assets/icons/Arrow-Right-blue.svg";
import { ReactComponent as ArrowLeft } from "../assets/icons/Arrow-Left.svg";
import { ReactComponent as Icon1 } from "../assets/about/icons-1.svg";
import { ReactComponent as Icon2 } from "../assets/about/icons-2.svg";
import { ReactComponent as Icon3 } from "../assets/about/icons-3.svg";
import { ReactComponent as CmImage } from "../assets/about/cm-image.svg";
import { ReactComponent as User1 } from "../assets/about/user-1.svg";
import { ReactComponent as AlertIcon } from "../assets/about/alart.svg";

import About1 from "../assets/about/about-1.svg";
import About2 from "../assets/about/about-2.svg";
import About3 from "../assets/about/about-3.svg";
import Boy from "../assets/about/boy.svg";
import Girl from "../assets/about/girl.svg";
import { ReactComponent as MessageIcon } from "../assets/about/message-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/about/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/about/instagram-icon.svg";
import { ReactComponent as SocialInstagramIcon } from "../assets/social/instagram.svg";
import { ReactComponent as SocialLinkedinIcon } from "../assets/social/linkedin.svg";

// impor

const AboutUs = () => {
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

  const [teamData] = useState([
    {
      name: "Darlene Robertson",
      role: "CEO",
      img: Boy,
    },
    {
      name: "Savannah Nguyen",
      role: "CTO",
      img: Girl,
    },
    {
      name: "Floyd Miles",
      role: "product manager",
      img: Boy,
    },
    {
      name: "Jerome Bell",
      role: "UI/UX Designer",
      img: Girl,
    },
    {
      name: "Marvin McKinney",
      role: "full stack developer",
      img: Boy,
    },
    {
      name: "Kathryn Murphy",
      role: "Graphic Designer",
      img: Girl,
    },
    {
      name: "Jacob Jones",
      role: "Support",
      img: Boy,
    },
  ]);

  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };
  const goToNext2 = () => {
    sliderRef2.current.slickNext();
  };

  const goToPrevious2 = () => {
    sliderRef2.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: function (i) {
      return (
        <div
          className={`dot ${
            i === sliderRef.current?.innerSlider.state.currentSlide
              ? "activeDotStyle"
              : "dotStyle"
          }`}
        ></div>
      );
    },
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: function (i) {
      return (
        <div
          className={`dot ${
            i === sliderRef2.current?.innerSlider.state.currentSlide
              ? "activeDotStyle"
              : "dotStyle"
          }`}
        ></div>
      );
    },
    // centerMode: true,
    // centerPadding: '5%',
  };
  return (
    <main>
      <div className="w-full flex lg:flex-row flex-col items-start md:px-24 px-6 mt-24">
        <div className="max-w-[550px]">
          <div className="bg-[#F0F3FD] lg:max-w-[310px] w-full text-center  py-2 rounded-bl-none rounded-[20px]">
            <p className="gradient-text">Learn more about us and our history</p>
          </div>
          <div className="mt-4">
            <p className="font-bold  whitespace-nowrap capitalize text-h1 md:text-h2  min-[320px]:max-md:text-h4">
              <span className="font-medium gradient-website-text"> Build</span>{" "}
              and{" "}
              <span className="font-medium gradient-website-text">
                publish{" "}
              </span>
              your <br />
              website or landing on
              <br /> yoobiti with{" "}
              <span className="gradient-website-text">
                drag and
                <br /> drop!
              </span>
            </p>
            <p className="text-text-20 font-medium text-h8 mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore
              <br /> magna aliqua.
            </p>
          </div>
        </div>
        <div className="md:ml-6">
          <img src={Landig1} alt="landing-1" />
        </div>
      </div>
      <div className="mt-20 lg:mb-12 flex justify-center items-center w-full min-[320px]:max-md:px-10">
        <p className="text-primary-20 text-h4 font-medium">Who Are We?</p>
      </div>
      <div className="grid grid-cols-8 gap-x-8 px-24 lg:mt-24 min-[320px]:max-md:px-10">
        <div className="lg:col-span-4 col-span-8 order-last lg:order-first">
          <img src={Landig2} alt="banner" />
        </div>
        <div className="lg:col-span-4 col-span-8 lg:order-first">
          <div className="">
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px] lg:max-w-[520px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.
              Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 px-24 mt-28 min-[320px]:max-md:px-10">
        <div className="lg:col-span-1 col-span-2">
          <div className="">
            <p className="text-h2 font-semibold capitalize text-primary-20 hidden lg:block  min-[320px]:max-md:text-h4">
              Learn more
              <br />
              about our{" "}
              <span className="gradient-text-blue">
                work
                <br />
                environment
              </span>
              !
            </p>
            <p className="text-h2 font-semibold capitalize text-primary-20 lg:hidden">
              Learn more about
              <br /> our{" "}
              <span className="gradient-text-blue">
                work
                <br />
                environment
              </span>
              !
            </p>
            <p className="text-text-20 text-h8 font-normal lowercase mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore.
            </p>
            <div className="flex items-center gap-x-3">
              <button
                onClick={goToPrevious}
                className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] "
              >
                <ArrowLeft />
                {/* <img src="assets/icons/Arrow-Left.svg" alt="arrows" /> */}
              </button>
              <button
                onClick={goToNext}
                className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] "
              >
                <ArrowRightBlue />
                {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 lg:mt-0 mt-[50px]">
          <Slider ref={sliderRef} {...settings}>
            <div className="">
              <div className="flex gap-4">
                <div className="">
                  <img src={About1} alt="banner" className="rounded-3xl" />
                </div>
                <div className="">
                  <img src={About2} alt="banner" />
                  <img src={About3} alt="banner" className="mt-3" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4">
                <div className="">
                  <img src={About1} alt="banner" className="rounded-3xl" />
                </div>
                <div className="">
                  <img src={About2} alt="banner" />
                  <img src={About3} alt="banner" className="mt-3" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-[100px]">
        <p className="text-primary-20 font-semibold text-h4 capitalize">
          our team
        </p>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 px-24 mt-16 min-[320px]:max-md:px-10">
        {teamData.map((item, index) => {
          return (
            <div
              style={{
                boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
              }}
              key={index}
              className="lg:col-span-1 md:col-span-1 col-span-2 rounded-[20px] bg-white "
            >
              <div className="flex flex-col items-center py-3">
                <img src={item.img} alt="team-user" />
                <p className="mt-[20px] text-primary-20 font-medium text-h7 capitalize text-center">
                  {item.name}
                </p>
                <p className="text-text-20 text-h8 font-medium capitalize mt-[10px]">
                  {item.role}
                </p>
                <div className="border-t border-stroke-10 mt-[10px]">
                  <div className="flex items-center justify-between pt-2">
                    <MessageIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                    {/* <img src='/assets/about/message-icon.svg' alt='message-icon' /> */}
                    {/* <img src='/assets/about/instagram-icon.svg' alt='instagram-icon' /> */}
                    {/* <img src='/assets/about/linkedin-icon.svg' alt='linkedin-icon' /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center text-center mt-[100px]">
        <p className="text-primary-20 font-semibold text-h4 capitalize">
          A look at the statistics
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-4 px-24 gap-4 mt-24 place-items-center min-[320px]:max-md:px-10">
        <div
          style={{
            boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
          }}
          className="lg:col-span-1 gap-y-4 col-span-2 grid place-items-center grid-auto-flow-row rounded-[20px] bg-white w-full py-9"
        >
          <Icon3 />
          {/* <img src='/assets/about/icons-3.svg' alt='icons' /> */}
          <div className="text-tertiary-60 font-bold text-h4 relative">
            +23{" "}
            <div className="absolute inset-x-0 top-1 w-full h-3/4 bg-tertiary-50 -z-10"></div>
          </div>
          <p className="text-text-20 font-medium text-h6 capitalize">
            languages
          </p>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
          }}
          className="lg:col-span-1 gap-y-4 col-span-2 grid place-items-center grid-auto-flow-row rounded-[20px] bg-white w-full py-9"
        >
          {/* <img src='/assets/about/icons-1.svg' alt='icons' /> */}
          <Icon2 />
          <div className="text-tertiary-70 font-bold text-h4 relative">
            +40,504{" "}
            <div className="absolute inset-x-0 top-1 w-full h-3/4 bg-tertiary-80 -z-10"></div>{" "}
          </div>
          <p className="text-text-20 font-medium text-h6 capitalize">
            Active user
          </p>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
          }}
          className="lg:col-span-1 gap-y-4 col-span-4 grid place-items-center grid-auto-flow-row rounded-[20px] bg-white w-full py-9"
        >
          <Icon1 />
          {/* <img src='/assets/about/icons-2.svg' alt='icons' /> */}
          <div className="text-primary-5 font-bold text-h4 relative">
            +1,564{" "}
            <div className="absolute inset-x-0 top-1 w-full h-3/4 bg-primary-10 -z-10"></div>
          </div>
          <p className="text-text-20 font-medium text-h6 capitalize">
            Project created
          </p>
        </div>
      </div>

      <div className="grid grid-cols-7 px-24 mt-28 min-[320px]:max-md:px-10">
        <div className="lg:col-span-3 col-span-7">
          <div className="">
            <p className="text-h2 font-semibold capitalize text-primary-20 min-[320px]:max-md:text-h4">
              what our <br />
              <span className="gradient-text-blue">customers</span>say
            </p>
            <div className="flex items-center gap-x-3 mt-11">
              {/* <img src='/assets/about/cm-image.svg' alt="cm-image" /> */}
              <CmImage />
              <p className="text-text-20 text-h7 font-medium lowercase">
                +1,200 comment
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                onClick={goToPrevious2}
                className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] "
              >
                {/* <img src="assets/icons/Arrow-Left.svg" alt="arrows" /> */}
                <ArrowLeft />
              </button>
              <button
                onClick={goToNext2}
                className="mt-5 flex items-center gap-x-3 bg-primary-10 h-16 rounded-10 px-4 py-[10px] "
              >
                {/* <img src="assets/icons/Arrow-Right-blue.svg" alt="arrows" /> */}
                <ArrowRightBlue />
              </button>
            </div>
          </div>
        </div>
        <div
          className="lg:col-span-4 col-span-7 lg:mt-0 mt-[50px] overflow-x-hidden bg-white pb-8"
          style={{
            width: "150%",
            transform: " translateX(50px)",
          }}
        >
          <Slider ref={sliderRef2} {...settings2}>
            <div className="">
              <div className="grid grid-cols-2 gap-x-3">
                <div
                  className="col-span-1 flex flex-col  p-7 max-w-[550px]"
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <User1 />
                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div
                  className={`col-span-1 flex flex-col  p-7 max-w-[550px] opacity-30`}
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    <User1 />

                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-x-3">
                <div
                  className="col-span-1 flex flex-col  p-7 max-w-[550px]"
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <User1 />

                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div
                  className={`col-span-1 flex flex-col  p-7 max-w-[550px] opacity-30`}
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <User1 />

                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-x-3">
                <div
                  className="col-span-1 flex flex-col  p-7 max-w-[550px]"
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <User1 />

                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div
                  className={`col-span-1 flex flex-col  p-7 max-w-[550px] opacity-30`}
                  style={{
                    borderRadius: "20px",
                    background: "#FFF",
                    boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-x-3">
                    {/* <img src="/assets/about/user-1.svg" alt="user" /> */}
                    <User1 />

                    <div className="flex flex-col ">
                      <p className="text-primary-20 font-semibold text-h7 capitalize">
                        Darlene Robertson
                      </p>
                      <p className="text-text-20 font-normal text-h8 capitalize">
                        product manager at amazon
                      </p>
                    </div>
                  </div>
                  <hr className="border-b border-stroke-30 my-6" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque eiusmod tempor incididunt ut labore et dolore
                    magna aliqua eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="mt-24 px-24 min-[320px]:max-md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center border border-stroke-30 rounded-[20px] px-6 py-4">
          <div className="flex items-center gap-x-6">
            {/* <img src="/assets/about/alart.svg" alt="alart" /> */}
            <AlertIcon className="min-[320px]:max-md:w-48" />
            <div className="flex flex-col">
              <p className="gradient-text-blue text-h4 font-semibold lowercase min-[320px]:max-md:text-h6">
                Learn more Yoobiti
              </p>
              <p className="text-text-20 text-h8 min-[320px]:max-md:text-h9 font-normal ">
                To learn more about Uoobiti space, you can follow Uoobiti
                LinkedIn and Instagram.
              </p>
            </div>
          </div>
          <hr className="border-stroke-30 w-full my-[20px] lg:hidden" />
          <div className="flex items-center gap-x-3">
            <div className="rounded-full border-2 border-stroke-30 p-2">
              {/* <img src="/assets/social/instagram.svg" alt="instagram" /> */}
              <SocialInstagramIcon />
            </div>
            <div className="rounded-full border-2 border-stroke-30 p-2">
              {/* <img src="/assets/social/linkedin.svg" alt="linkedin" /> */}
              <SocialLinkedinIcon />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-20 mb-12 flex justify-center items-center w-full">
                <p className="text-primary-20 text-h4 font-medium">
                    FAQs
                </p>
            </div>
            <div className="grid grid-cols-2 mt-24 md:px-24 px-6">
                <div className="lg:col-span-1 col-span-2">
                    <img src="/assets/landing/section-banner-6.svg" alt="banner" />
                </div>
                <div className="lg:col-span-1 col-span-2 lg:block flex flex-col items-center mt-[50px] lg:mt-0">
                    {data.map((item, index) => {
                        return (
                            <CollapsiableFaq index={index} title={item.title} desc={item.desc} />
                        )
                    })}

                </div>
            </div> */}
    </main>
  );
};

export default AboutUs;
