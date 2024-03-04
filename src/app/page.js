"use client";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import CarouselContainer from "../../CarouselElement";
import "./scrollbar.css";
import CarouselElement from "../../CarouselElement";
import az900Pic from "../../assets/az900.png";
import dp900Pic from "../../assets/dp900.png";

const imageData = [
  {
    label: "Azure Data Engineer",
    alt: "image1",
    url: "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg",
  },
  {
    label: "Web Developer",
    alt: "image2",
    url: "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png",
  },
  {
    label: "Competitive Programmer",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg",
  },
];

export default function Home() {
  const aboutMeHeading = "<About Me />";
  const educationHeading = "<Education />";
  const skillsHeading = "<Skills />";
  const projectsHeading = "<Projects />";
  const aboutMeContent =
    "I'm an enthusiastic learner, dedicated coder, and proficient full stack MERN developer. My expertise lies in crafting code logics to solve complex problems. With a track record of solving over 1500+ problems on coding platforms like GeeksForGeeks, Codechef and HackerRank, I continually refine my problem-solving skills. Currently I'm employed as an Azure Data Engineer at Tata Consultancy Services, Kolkata";

  const azureDataEngSkillsArray = [
    "Azure Data Factory",
    "Azure Databricks",
    "SQL",
    "Python",
    "ETL",
  ];
  const webDevSkillsArray = [
    "ReactJS",
    "NextJS",
    "NodeJS",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "React Redux",
    "Postman",
  ];
  const compiProgSkillsArray = ["C++", "Data Structure", "Algorithms"];

  const animationArray = [
    ".",
    ".j",
    ".js",
    ".j",
    ".",
    ".c",
    ".cp",
    ".cpp",
    ".cp",
    ".c",
    ".",
    ".p",
    ".py",
    ".p",
  ];
  const carouselArray = [
    "< Azure Data Engineer />",
    "< Web Developer />",
    "< Competitive Programmer />",
  ];
  const [animationArrayIndex, setAnimationArrayIndex] = useState(0);
  const [carouselArrayIndex, setCarouselArrayIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const sections = ["home", "about", "education", "skills", "projects"];
  const sectionRefs = sections.map(() => useRef(null));
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  setTimeout(() => {
    setAnimationArrayIndex((animationArrayIndex + 1) % animationArray.length);
  }, 500);

  setTimeout(() => {
    setCarouselArrayIndex((carouselArrayIndex + 1) % 4);
  }, 3000);

  const handleSectionVisibility = (index, inView) => {
    if (inView) {
      setActiveSection(index);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust this threshold as per your requirement
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const index = sectionRefs.findIndex((ref) => ref.current === target);
        handleSectionVisibility(index, entry.isIntersecting);
      });
    }, options);

    sectionRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-screen scrollable-container overflow-y-auto lg:h-screen bg-gradient-to-b from-[#0B0B0B] to-[#323232] font-mono">
        <div className="lg:hidden flex flex-col fixed bg-black w-full">
          <div className="py-4 px-4 lg:px-0 flex lg:flex-col justify-between items-center w-full">
            <button
              className="w-6 h-6 rounded-full border flex justify-center items-center"
              onClick={() => {
                handleScroll(homeRef);
              }}
            >
              <IoIosArrowUp />
            </button>
            <div className="flex lg:flex-col px-1 w-full flex-wrap space-x-1 space-y-1 justify-center items-end">
              <button
                className={
                  activeSection === 0
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(homeRef);
                }}
              >
                Home
              </button>
              <button
                className={
                  activeSection === 1
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(aboutRef);
                }}
              >
                About
              </button>
              <button
                className={
                  activeSection === 2
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(educationRef);
                }}
              >
                Education
              </button>
              <button
                className={
                  activeSection === 3
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(skillsRef);
                }}
              >
                Skills
              </button>
              <button
                className={
                  activeSection === 4
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(projectsRef);
                }}
              >
                Projects
              </button>
            </div>
            <button
              className="w-6 h-6 rounded-full border flex justify-center items-center"
              onClick={() => {
                handleScroll(footerRef);
              }}
            >
              <IoIosArrowDown />
            </button>
          </div>
          <div className="flex justify-between">
            <span
              className={
                activeSection >= 0
                  ? "w-1/5 border-b-[2px] border-[#00FF15]"
                  : "w-1/5 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 1
                  ? "w-1/5 border-b-[2px] border-[#00FF15]"
                  : "w-1/5 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 2
                  ? "w-1/5 border-b-[2px] border-[#00FF15]"
                  : "w-1/5 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 3
                  ? "w-1/5 border-b-[2px] border-[#00FF15]"
                  : "w-1/5 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 4
                  ? "w-1/5 border-b-[2px] border-[#00FF15]"
                  : "w-1/5 border-b-[2px] border-black"
              }
            ></span>
          </div>
        </div>
        <div
          ref={homeRef}
          className="w-full py-8 lg:py-0 h-screen lg:h-auto lg:w-1/3 flex flex-col"
        >
          <div className="flex justify-center h-1/3">
            <div className="flex w-screen lg:w-[22em] overflow-x-hidden items-end py-4">
              <div
                className={
                  carouselArrayIndex == 0
                    ? `flex w-[300%] -translate-x-[0%] transition ease-in-out`
                    : carouselArrayIndex == 1 || carouselArrayIndex == 3
                    ? `flex w-[300%] -translate-x-[33%] transition ease-in-out`
                    : `flex w-[300%] -translate-x-[67%] transition ease-in-out`
                }
              >
                {carouselArray.map((ele, ind) => {
                  return (
                    <span
                      id={ind}
                      className="text-lg lg:text-xl text-center w-screen lg:w-[20em]"
                    >
                      {ele}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            key="home"
            ref={sectionRefs[0]}
            className="h-1/2 flex flex-col justify-center items-center"
          >
            <div className="imgContainer h-48 w-48 lg:h-64 lg:w-64 rounded-xl"></div>
            <p className="flex flex-col lg:flex-row justify-center lg:items-end items-center w-full mt-4 ">
              <span className="text-3xl font-semibold">Rajat Agarwal</span>
              <span className="text-3xl text-[#00FF15] italic">
                {animationArray[animationArrayIndex]}
              </span>
            </p>
          </div>
          <div className="h-1/4 flex justify-center">
            <div className="w-full flex justify-around py-4 border-t">
              <a
                href="mailto:agarwalrajat1503@gmail.com"
                target="_blank"
                alt="Gmail"
                className="gmailContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="Gmail"
              ></a>
              <a
                href="https://www.linkedin.com/in/rajat-agarwal-04b6b4194/"
                target="_blank"
                className="linkedinContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="LinkedIn"
              ></a>
              <a
                href="https://github.com/rajat-33"
                target="_blank"
                alt="Github"
                className="githubContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="Github"
              ></a>
              <a
                href="https://auth.geeksforgeeks.org/user/rajat1503/practice"
                target="_blank"
                alt="GeeksForGeeks"
                className="gfgContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="GeeksForGeeks"
              ></a>
              <a
                href="https://www.hackerrank.com/rajat_1503?hr_r=1"
                target="_blank"
                alt="HackerRank"
                className="hackerrankContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="HackerRank"
              ></a>
              <a
                href="https://www.codechef.com/users/rajat_1503"
                target="_blank"
                alt="CodeChef"
                className="codechefContainer w-8 h-8 rounded-sm flex justify-center items-center"
                title="CodeChef"
              ></a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex px-4">
          <div className="h-full w-full lg:w-5/6 overflow-y-auto lg:border-x lg:border-[#00FF15]">
            <div id="header" ref={headerRef}></div>
            <div
              ref={aboutRef}
              className="flex justify-center items-center min-h-screen py-8"
            >
              <div
                key="about"
                ref={sectionRefs[1]}
                className="flex flex-col px-4 lg:px-0 lg:w-2/3"
              >
                <div className="text-4xl lg:text-5xl mb-12 text-center">
                  {aboutMeHeading}
                </div>
                <div className="text-[#00FF15] text-md lg:text-xl">
                  {aboutMeContent}
                </div>
              </div>
            </div>
            <div
              ref={educationRef}
              className="flex justify-center items-center min-h-screen border-t-2 py-8"
            >
              <div
                key="education"
                ref={sectionRefs[2]}
                className="flex flex-col w-full items-center"
              >
                <div className="text-4xl lg:text-5xl mb-12 text-center">
                  {educationHeading}
                </div>
                <div className="flex flex-col text-md lg:text-xl w-full px-4">
                  <div className="">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Heritage Institute of Technology, Kolkata
                    </div>
                    <div className="text-sm pl-2 my-2 border-l-[0.1px] border-[#00FF15]">
                      <div>
                        Maulana Abul Kalam Azad University of Technology
                        (MAKAUT)
                      </div>
                      <div>
                        Bachelor of Technology- Electronics & Communication
                        Engineering
                      </div>
                      <div>DGPA: 8.32</div>
                      <div>GRADE: A</div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="text-xl text-[#00FF15]  font-semibold mt-2">
                      Shree Jain Vidyalaya, Kolkata
                    </div>
                    <div className="text-sm pr-2 my-2 border-r-[0.1px] border-[#00FF15]">
                      <div>
                        West Bengal Council of Higher Secondary Education
                        (WBCHSE)
                      </div>
                      <div>
                        Higher Secondary - Physics, Chemistry, Maths & Computer
                        Science
                      </div>
                      <div>PERCENTAGE: 86.2%</div>
                      <div>GRADE: A+</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-xl text-[#00FF15] font-semibold mt-2">
                      Shree Jain Vidyalaya, Kolkata
                    </div>
                    <div className="text-sm pl-2 my-2 border-l-[0.1px] border-[#00FF15]">
                      <div>
                        West Bengal Board of Secondary Education (WBBSE)
                      </div>
                      <div>Secondary Examination</div>
                      <div>PERCENTAGE: 88.2%</div>
                      <div>GRADE: A+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={skillsRef} className="flex min-h-screen border-t-2 py-8">
              <div
                key="skills"
                ref={sectionRefs[3]}
                className="flex flex-col w-full items-center"
              >
                <div className="text-4xl lg:text-5xl mb-12 text-center">
                  {skillsHeading}
                </div>
                <div className="flex flex-col  lg:w-3/4">
                  <div className="my-4 py-2 hover:border-y group">
                    <p className="text-xl text-[#00FF15] text-center">
                      Azure Data Engineer
                    </p>
                    <div className="my-2 flex flex-wrap w-full">
                      {azureDataEngSkillsArray.map((ele, ind) => (
                        <div
                          className="min-w-1/2 text-xs lg:text-sm border
                       border-[#00FF15] m-1 pl-2 pr-4 rounded-md text-[#00FF15] cursor-default flex items-center justify-between"
                          key={ind}
                        >
                          <div
                            className="w-1 h-1 border mr-1 border border-transparent
                       group-hover:border-[#9FFF32] group-hover:bg-[#9FFF32] rounded"
                          ></div>
                          {ele}
                        </div>
                      ))}
                    </div>
                    <div className="lg:w-1/3 my-2 flex flex-wrap w-full justify-around ">
                      <a
                        className="az900imgContainer h-24 w-20 border rounded"
                        href="https://learn.microsoft.com/api/credentials/share/en-gb/RajatAgarwal-8439/B43C054B545F2C6F?sharingId=24DF3EF74ED51F41"
                        target="_blank"
                        title="az900 credential"
                      ></a>
                      <a
                        className="dp900imgContainer h-24 w-20 border rounded"
                        href="https://learn.microsoft.com/api/credentials/share/en-gb/RajatAgarwal-8439/807B6709A021BBD6?sharingId=24DF3EF74ED51F41"
                        target="_blank"
                        title="dp900 credential"
                      ></a>
                    </div>
                    <div className="my-2 lg:my-4">
                      <p>
                        &#9733; Azure Data Engineer - Tata Consultancy Services,
                        Kolkata
                      </p>
                      <p className="text-end text-xs text-[#FFFB84]">
                        (Aug 2023 - Present)
                      </p>
                      <p className="text-xs lg:text-sm">
                        Perform Extract, Transform and Load (ETL) to create
                        pipelines and workflows using Azure Data Factory (ADF).
                        Used Azure Databricks and SQL for Data Analysis. Used
                        Logic Apps to implement automated alert emails.
                      </p>
                    </div>
                  </div>
                  <div className="my-4 py-2 hover:border-y group">
                    <p className="text-xl text-[#00FF15] text-center">
                      Web Developer
                    </p>
                    <div className="my-2 flex flex-wrap w-full ">
                      {webDevSkillsArray.map((ele, ind) => (
                        <div
                          className="min-w-1/2 text-xs lg:text-sm border
                       border-[#00FF15] m-1 pl-2 pr-4 rounded-md text-[#00FF15] cursor-default flex items-center justify-between "
                          key={ind}
                        >
                          <div
                            className="w-1 h-1 border mr-1 border border-transparent
                       group-hover:border-[#9FFF32] group-hover:bg-[#9FFF32] rounded"
                          ></div>
                          {ele}
                        </div>
                      ))}
                    </div>
                    <div className="my-2 lg:my-4">
                      <p>&#9733; Web Developer Freelancer</p>
                      <p className="text-end text-xs text-[#FFFB84]">
                        (Dec 2022 - June 2023)
                      </p>
                      <p className="text-xs lg:text-sm">
                        Contributed and collaborated in building a web-app from
                        scratch. Implemented modal, pagination, loader, state
                        management, most recent visited page scrolling & used
                        optimization techniques like lazy loading, Redux,
                        Socket.IO.
                      </p>
                    </div>
                    <div className="my-2 lg:my-4">
                      <p>&#9733; Web Developer Intern - Vedasis Analytics</p>
                      <p className="text-end text-xs text-[#FFFB84]">
                        (Oct 2022 - Nov 2022)
                      </p>
                      <p className="text-xs lg:text-sm">
                        Worked on Frontend - NextJS. Used Hooks and Redux to
                        create web components. Learnt Poject Collaboration with
                        Git.
                      </p>
                    </div>
                  </div>
                  <div className="my-4 py-2 hover:border-y group">
                    <p className="text-xl text-[#00FF15] text-center">
                      Competitive Programmer
                    </p>
                    <div className="my-2 flex flex-wrap w-full">
                      {compiProgSkillsArray.map((ele, ind) => (
                        <div
                          className="min-w-1/2 text-xs lg:text-sm border
                       border-[#00FF15] m-1 pl-2 pr-4 rounded-md text-[#00FF15] cursor-default flex items-center justify-between"
                          key={ind}
                        >
                          <div
                            className="w-1 h-1 border mr-1 border border-transparent
                       group-hover:border-[#9FFF32] group-hover:bg-[#9FFF32] rounded"
                          ></div>
                          {ele}
                        </div>
                      ))}
                    </div>
                    <div className="my-2 lg:my-4">
                      <p>&#9733; GeeksForGeeks practice</p>
                      <p className="text-end text-xs text-[#FFFB84]">
                        (Nov 2020 - Present)
                      </p>
                      <p className="text-xs lg:text-sm">
                        Solved 1075+ problems on various DSA problems. Overall
                        rank below 600 and institute rank - 3
                      </p>
                    </div>
                    <p className="text-sm">
                      &#9734; TCS CodeVita 2022 - Global rank 56
                    </p>
                    <p className="text-sm">
                      &#9734; CodeChef - Highest rating 1810
                    </p>
                    <p className="text-sm">
                      &#9734; HackerRank - Gold badges in problem solving & C++
                    </p>
                    <p className="text-sm">
                      &#9734; Infosys HackWithInfy - Qualified for PPI
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={projectsRef}
              className="flex justify-center items-center min-h-screen border-t-2 py-8"
            >
              <div
                key="projects"
                ref={sectionRefs[4]}
                className="flex flex-col w-full items-center"
              >
                <div className="text-4xl lg:text-5xl mb-12 text-center">
                  {projectsHeading}
                </div>
                <div className="flex flex-col text-md lg:text-xl w-full px-4">
                  <div className="">
                    <div className="flex items-center text-xl text-[#00FF15] font-semibold">
                      Emotion Detection Using Neural Learning{" "}
                      <a
                        href="https://github.com/rajat-33/Speech-Emotion-Recogition-FinalYearProject"
                        target="_blank"
                        className="ml-4 hover:text-[#0011FF]"
                        title="Repository link"
                      >
                        <BsLink45Deg />
                      </a>
                    </div>
                    <div className="text-sm">
                      RNN | Keras | Sklearn | Pandas | Numpy | Librosa
                    </div>
                    <div className="text-sm pl-2 my-2 border-l-[0.1px] border-[#00FF15]">
                      <div>
                        A group final year project. It can run to detect
                        emotions for analysing audio files and detect the
                        maximum probablity of emotion it resembles. The neural
                        model is trained using RNN - long-short term memory
                        (LSTM) technique.
                      </div>
                      <div>Train Accuracy: 86.7% Test Accuracy: 66.7% </div>
                    </div>
                  </div>
                  <div className="text-end mt-8">
                    <div className="text-xl flex items-center justify-end text-[#00FF15] font-semibold">
                      <a
                        href="https://github.com/rajat-33/NoteIt"
                        target="_blank"
                        className="mr-4 hover:text-[#0011FF]"
                        title="Repository link"
                      >
                        <BsLink45Deg />
                      </a>
                      NoteIt - Note Keeping Application
                    </div>
                    <div className="text-sm">
                      React | NodeJS | MongoDB | Express | Bootstrap
                    </div>
                    <div className="text-sm pr-2 my-2 border-r-[0.1px] border-[#00FF15]">
                      NoteIt is a MERN full-stack web application software.
                      Users can create, update, delete and read notes on the go.
                      Used MongoDB database to perform CRUD operations. Express
                      handles calling and sending of responses along with
                      validation. Used useContext, useEffect, useState,
                      useNavigate hooks in React. JWT Authentication of users is
                      done for secure access. Passwords are stored using hashing
                      and encrypted.
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-xl flex items-center text-[#00FF15] font-semibold">
                      Task Manager - Backend
                      <a
                        href="https://github.com/rajat-33/Task-Manager---Backend"
                        target="_blank"
                        className="ml-4 hover:text-[#0011FF]"
                        title="Repository link"
                      >
                        <BsLink45Deg />
                      </a>
                    </div>
                    <div className="text-sm">NodeJS | Express | MongoDB </div>
                    <div className="text-sm pl-2 my-2 border-l-[0.1px] border-[#00FF15]">
                      A task manager backend application. Implemented basic api
                      endpoints such as GET, POST, PATCH and DELETE. A user can
                      read, add, update and delete notes created. Used express
                      for managing routes and MongoDB Atlas as database.
                    </div>
                  </div>
                  <div className="text-end mt-8">
                    <div className="text-xl flex justify-end items-center text-[#00FF15] font-semibold">
                      <a
                        href="https://github.com/rajat-33/ResDec"
                        target="_blank"
                        className="mr-4 hover:text-[#0011FF]"
                        title="Repository link"
                      >
                        <BsLink45Deg />
                      </a>
                      ResDec - Resistor Decoder Application
                    </div>
                    <div className="text-sm">React | CSS</div>
                    <div className="text-sm pr-2 my-2 border-r-[0.1px] border-[#00FF15]">
                      Single page React application to decode the value of a
                      resistor. Conversion from resistor color code and value.
                      Fully responsive website.
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="text-xl flex items-center text-[#00FF15] font-semibold">
                      TypeLit - Typing Practice Application
                      <a
                        href="https://github.com/rajat-33/TypeLit"
                        target="_blank"
                        className="ml-4 hover:text-[#0011FF]"
                        title="Repository link"
                      >
                        <BsLink45Deg />
                      </a>
                    </div>
                    <div className="text-sm">JavaScript | HTML | CSS</div>
                    <div className="text-sm pl-2 my-2 border-l-[0.1px] border-[#00FF15]">
                      On Screen Keyboard indicating the typing letters.
                      Simultaneous error detection while typing. Accuracy
                      detection of typed words.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="footer" ref={footerRef}></div>
          </div>
          <div className="hidden lg:h-full lg:w-1/6 py-4 lg:flex flex-col justify-between items-center">
            <button
              className="w-6 h-6 rounded-full border flex justify-center items-center hover:bg-[#003204]"
              onClick={() => {
                handleScroll(headerRef);
              }}
            >
              <IoIosArrowUp />
            </button>
            <div className="flex flex-col border-l px-1">
              <button
                id="aboutBtn"
                className={
                  activeSection > 1
                    ? "flex px-2 py-2 border-l-[3px] border-[#00FF15] hover:text-[#C7FFBF]"
                    : activeSection === 1
                    ? "flex px-2 py-2 text-[#00FF15] border-l-[3px] border-[#00FF15]"
                    : "flex px-2 py-2 border-l-[3px] hover:text-[#C7FFBF]"
                }
                onClick={() => {
                  handleScroll(aboutRef);
                }}
              >
                About
              </button>
              <button
                id="educationBtn"
                className={
                  activeSection > 2
                    ? "flex px-2 py-2 border-l-[3px] border-[#00FF15] hover:text-[#C7FFBF]"
                    : activeSection === 2
                    ? "flex px-2 py-2 text-[#00FF15] border-l-[3px] border-[#00FF15]"
                    : "flex px-2 py-2 border-l-[3px] hover:text-[#C7FFBF]"
                }
                onClick={() => {
                  handleScroll(educationRef);
                }}
              >
                Education
              </button>
              <button
                id="skillsBtn"
                className={
                  activeSection > 3
                    ? "flex px-2 py-2 border-l-[3px] border-[#00FF15] hover:text-[#C7FFBF]"
                    : activeSection === 3
                    ? "flex px-2 py-2 text-[#00FF15] border-l-[3px] border-[#00FF15]"
                    : "flex px-2 py-2 border-l-[3px] hover:text-[#C7FFBF]"
                }
                onClick={() => {
                  handleScroll(skillsRef);
                }}
              >
                Skills
              </button>
              <button
                id="projectsBtn"
                className={
                  activeSection > 4
                    ? "flex px-2 py-2 border-l-[3px] border-[#00FF15] hover:text-[#C7FFBF]"
                    : activeSection === 4
                    ? "flex px-2 py-2 text-[#00FF15] border-l-[3px] border-[#00FF15]"
                    : "flex px-2 py-2 border-l-[3px] hover:text-[#C7FFBF]"
                }
                onClick={() => {
                  handleScroll(projectsRef);
                }}
              >
                Projects
              </button>
            </div>
            <button
              className="w-6 h-6 rounded-full border flex justify-center items-center hover:bg-[#003204]"
              onClick={() => {
                handleScroll(footerRef);
              }}
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
