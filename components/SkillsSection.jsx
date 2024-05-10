"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Title from "./Title";
import ProjectSection from "./ProjectSection";

import { FaNode, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlask, SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const quoteText = useRef(null);
  const heroRef = useRef(null);
  const skillsCardRef = useRef(null);

  useEffect(() => {
    const tlText = gsap.timeline();
    const tlCard = gsap.timeline();

    skillsCardRef.current.childNodes.forEach((node, index) => {
      tlCard.from(
        node,
        {
          x: -1000,
          ease: "slow.in",
          duration: 0.2,
        },
        ">"
      );
    });

    quoteText.current.childNodes.forEach((node, index) => {
      tlCard.from(
        node,
        {
          duration: 0.3,
          opacity: 0,
        },
        ">"
      );
    });

    tlText.pause();
    tlCard.pause();

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "-200 top",
      end: "bottom center",
      scrub: 5,
      onEnter: () => {
        tlText.play();
        tlCard.play();
      },
      //onLeave:()=>tlText.reverse(),
      onEnterBack: () => {
        tlText.play();
      },
      onLeaveBack: () => {
        tlText.reverse(), tlCard.reverse();
      },
    });

    return () => {
      tlText.kill();
    };
  }, []);

  return (
    <div className="w-full h-full bg-slate-950  " id="skills">
      <div ref={heroRef}>
        <Title title={"SKILLS"} />
        <div className="  flex justify-center  items-center h-full ">
          <div className="w-3/5  max-xl:w-11/12 max-md:w-full flex flex-wrap justify-center ">
            <div
              ref={skillsCardRef}
              className=" infinite-bouncing-animation  w-1/2 p-2 max-md:w-full flex flex-col  justify-center items-center "
            >
              <div
                className="  relative z-30 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950  transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://w7.pngwing.com/pngs/34/978/png-transparent-java-object-oriented-jvm-java-logo-applications-web-services-3d-icon-thumbnail.png"
                      alt="core java"
                      title="Core Java"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                      alt=""
                      title="JavaScript"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg"
                      alt=""
                      title="Node.js"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-16 max-md:-right-32  max-md:top-9 rotate-90  ">
                    Tech Stack
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png"
                      alt="Selenium"
                      title="Selenium"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png"
                      alt="Cypress"
                      title="Cypress"
                    />
                    <img
                      className="w-14 h-14 bg-white"
                      src="https://seleniumwithjavapython.files.wordpress.com/2022/07/playwright-logo.webp"
                      alt="Playwright"
                      title="Playwright"
                    />
                    <img
                      className="w-14 h-14 bg-white"
                      src="/puppeteer.png"
                      alt="Puppeteer"
                      title="Puppeteer"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    UI Automation
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png"
                      alt="Postman"
                      title="Postman"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://miro.medium.com/v2/resize:fit:750/1*9p86tphgBGlkJRaX3koyuQ.jpeg"
                      alt="Rest Assured"
                      title="Rest Assured"
                    />
                    <img
                      className="w-14 h-14 bg-white"
                      src="https://seleniumwithjavapython.files.wordpress.com/2022/07/playwright-logo.webp"
                      alt="Playwright"
                      title="Playwright"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png"
                      alt="Cypress"
                      title="Cypress"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    API Testing <br />
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2019/11/Appium-1-e1588059189668.png?w=698&ssl=1"
                      alt="Appium"
                      title="Appium"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    Mobile <br />
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://miro.medium.com/v2/resize:fit:750/format:webp/0*epnKnkKuLx2RAajt"
                      alt="PostgreSQL"
                      title="PostgreSQL"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    DataBase <br />
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxosWiIyh4ojW4vpcyPeuF1-QZrExabQ_LwQ-aQi_xTQ&s"
                      alt="OWASP"
                      title="OWASP"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    Security <br />
                  </p>
                </div>
              </div>

              <div
                className=" relative z-10 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14"
                      src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/02/k6.png?fit=584%2C267&ssl=1"
                      alt="K6"
                      title="K6"
                    />
                    <img
                      className="w-14 h-14"
                      src="https://jmeter.apache.org/images/jmeter_square.svg"
                      alt="JMeter"
                      title="JMeter"
                    />
                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    Performace <br />
                  </p>
                </div>
              </div>

              <div
                className=" relative z-0 -top-23 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
                style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
              >
                <div className="">
                  <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                    <img
                      className="w-14 h-14 bg-white"
                      src="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
                      alt=""
                      title="AWS"
                    />

                    <img
                      className="w-14 h-14 bg-white"
                      src="https://static-00.iconduck.com/assets.00/docker-icon-512x438-ga1hb37h.png"
                      alt="Docker"
                      title="Docker"
                    />
                    <img
                      className="w-14 h-14 bg-white"
                      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/ansible_logo_icon_169596.png"
                      alt="Ansible"
                      title="Ansible"
                    />

<img
                      className="w-14 h-14 bg-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kubernetes_logo.svg/2560px-Kubernetes_logo.svg.png"
                      alt="Kubernetes"
                      title="Kubernetes "
                    />

                  </div>
                  <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                    {"  "}Cloud
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={quoteText}
              className="  w-1/2 p-5 max-md:w-full text-center  font-light  my-10   "
            >
              <p className=" overflow-hidden pb-5 descriptive-text">
                With over 9 years of experience in software testing and
                automation, I have developed a strong foundation in delivering
                high-quality software solutions.
              </p>

              <h1 className="overflow-hidden py-3 descriptive-text bold">
                UI Testing
              </h1>
              <ul className="overflow-hidden py-1 descriptive-text">
                <li>Selenium - Java</li>
                <li>Playwright - JavaScript</li>
                <li>Cypress - JavaScript</li>
                <li>Puppeteer</li>
              </ul>

              <h1 className="overflow-hidden py-3 descriptive-text bold">
                Performance Testing
              </h1>
              <ul className="overflow-hidden py-1 descriptive-text">
                <li>k6</li>
                <li>JMeter</li>
              </ul>

              <h1 className="overflow-hidden py-3 descriptive-text bold">
                API
              </h1>
              <ul className="overflow-hidden py-1 descriptive-text">
                <li>RestAssured</li>
                <li>Postman</li>
              </ul>

              <h2 className="overflow-hidden py-3 descriptive-text bold">
                Cloud
              </h2>
              <ul className="overflow-hidden py-1 descriptive-text">
                <li>AWS Fundamentals</li>
                <li>Jenkins</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Ansible</li>
              </ul>

              <h2 className="overflow-hidden py-3 descriptive-text bold">
                Other
              </h2>
              <ul className="overflow-hidden py-1 descriptive-text">
                <li>Basic Linux</li>
                <li>Security Testing</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        <ProjectSection />

        <svg
          _ngcontent-serverApp-c8=""
          className="bg-slate-950 relative top-2 "
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="250px"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            _ngcontent-serverApp-c8=""
            fill="#1f232b"
            fill-opacity="1"
            d="M0,32L30,48C60,64,120,96,180,133.3C240,171,300,213,360,240C420,267,480,277,540,245.3C600,213,660,139,720,122.7C780,107,840,149,900,170.7C960,192,1020,192,1080,197.3C1140,203,1200,213,1260,192C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default SkillsSection;
