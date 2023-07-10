"use client";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import "./scrollbar.css";

export default function Home() {
  const aboutMeHeading = "<About Me />";
  const educationHeading = "<Education />";
  const skillsHeading = "<Skills />";
  const projectsHeading = "<Projects />";
  const experienceHeading = "<Experience />";
  const aboutMeContent =
    "I'm an enthusiastic learner, dedicated coder, and proficient full stack MERN developer. My expertise lies in crafting code logics to solve complex problems. I have to contributed to and helped built some  high quality React.js projects, showcasing a commitment to excellence. During my internship, I made substantial contributions to the front-end development of a web application, amplifying its user experience. Beyond my mastery in MERN, I possess valuable experience in NEXT.js, TypeScript, Machine Learning, and actively engage in competitive programming. With a track record of solving over 1500+ problems on coding platforms like GeeksForGeeks, Codechef, and HackerRank, I continually refine my problem-solving skills.";

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
  const [animationArrayIndex, setAnimationArrayIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "experience",
  ];
  const sectionRefs = sections.map(() => useRef(null));
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
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
              <button
                className={
                  activeSection === 5
                    ? "border-y-[0.5px] rounded flex text-[#00FF15] hover:bg-[#073A00]"
                    : "border-y-[0.5px] rounded flex hover:bg-[#073A00]"
                }
                onClick={() => {
                  handleScroll(experienceRef);
                }}
              >
                Experience
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
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 1
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 2
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 3
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 4
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
            <span
              className={
                activeSection >= 5
                  ? "w-1/6 border-b-[2px] border-[#00FF15]"
                  : "w-1/6 border-b-[2px] border-black"
              }
            ></span>
          </div>
        </div>
        <div
          ref={homeRef}
          className="w-full py-8 lg:py-0 h-screen lg:h-auto lg:w-1/3 flex flex-col"
        >
          <div className="h-1/4 flex justify-center items-end"></div>

          <div
            key="home"
            ref={sectionRefs[0]}
            className="h-1/2 flex flex-col justify-center items-center border-b"
          >
            <div className="imgContainer h-48 w-48 lg:h-64 lg:w-64 border-2 border-[#00FF15] rounded-3xl"></div>
            <p className="flex flex-col lg:flex-row justify-center lg:items-end items-center w-full mt-4 ">
              <span className="text-3xl font-semibold">Rajat Agarwal</span>
              <span className="text-3xl text-[#00FF15] italic">
                {animationArray[animationArrayIndex]}
              </span>
            </p>
          </div>
          <div className="h-1/4 flex justify-center">
            <div className="w-full lg:w-2/3 flex justify-around py-4">
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
                    <div className="text-md">
                      Maulana Abul Kalam Azad University of Technology (MAKAUT)
                    </div>
                    <div className="text-md">
                      Bachelor of Technology- Electronics & Communication
                      Engineering
                    </div>
                    <div className="text-md">DGPA: 8.32</div>
                    <div className="text-md">GRADE: A</div>
                  </div>
                  <div className="text-end">
                    <div className="text-xl text-[#00FF15]  font-semibold mt-2">
                      Shree Jain Vidyalaya, Kolkata
                    </div>
                    <div className="text-md">
                      West Bengal Council of Higher Secondary Education (WBCHSE)
                    </div>
                    <div className="text-md">
                      Higher Secondary - Physics, Chemistry, Maths & Computer
                      Science
                    </div>
                    <div className="text-md">PERCENTAGE: 86.2%</div>
                    <div className="text-md">GRADE: A+</div>
                  </div>
                  <div className="">
                    <div className="text-xl text-[#00FF15] font-semibold mt-2">
                      Shree Jain Vidyalaya, Kolkata
                    </div>
                    <div className="text-md">
                      West Bengal Board of Secondary Education (WBBSE)
                    </div>
                    <div className="text-md">Secondary Examination</div>
                    <div className="text-md">PERCENTAGE: 88.2%</div>
                    <div className="text-md">GRADE: A+</div>
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
                <div className="flex flex-col text-md lg:text-xl w-2/3">
                  <div className="my-2 border-b">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      ReactJS
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      NextJS
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      NodeJS
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      MongoDB
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Express
                    </div>
                  </div>
                  <div className="my-2 border-b">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      JavaScript
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      TypeScript
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      C
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      C++
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Python
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Java
                    </div>
                  </div>
                  <div className="my-2 border-b">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Postman
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Tailwind
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Bootstrap
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      React Redux
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Data Structures
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Algorithms
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      OOPs
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      DBMS
                    </div>
                    <div className="text-xl text-[#00FF15] font-semibold">
                      OS
                    </div>
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
                    <div className="text-md">
                      RNN | Keras | Sklearn | Pandas | Numpy | Librosa
                    </div>
                    <div className="text-md">
                      A group final year project. It can run to detect emotions
                      for analysing audio files and detect the maximum
                      probablity of emotion it resembles. The neural model is
                      trained using RNN - long-short term memory (LSTM)
                      technique.
                    </div>
                    <div className="text-md">
                      Train Accuracy: 86.7% Test Accuracy: 66.7%{" "}
                    </div>
                  </div>
                  <div className="text-end mt-16">
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
                    <div className="text-md">
                      React | NodeJS | MongoDB | Express | Bootstrap
                    </div>
                    <div className="text-md">
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
                  <div className="mt-16">
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
                    <div className="text-md">NodeJS | Express | MongoDB </div>
                    <div className="text-md">
                      A task manager backend application. Implemented basic api
                      endpoints such as GET, POST, PATCH and DELETE. A user can
                      read, add, update and delete notes created. Used express
                      for managing routes and MongoDB Atlas as database.
                    </div>
                  </div>
                  <div className="text-end mt-16">
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
                    <div className="text-md">React | CSS</div>
                    <div className="text-md">
                      Single page React application to decode the value of a
                      resistor. Conversion from resistor color code and value.
                      Fully responsive website.
                    </div>
                  </div>
                  <div className="my-16">
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
                    <div className="text-md">JavaScript | HTML | CSS</div>
                    <div className="text-md">
                      On Screen Keyboard indicating the typing letters.
                      Simultaneous error detection while typing. Accuracy
                      detection of typed words.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={experienceRef}
              className="flex justify-center items-center min-h-screen border-t-2 py-8"
            >
              <div
                key="experience"
                ref={sectionRefs[5]}
                className="flex flex-col w-full items-center"
              >
                <div className="text-4xl lg:text-5xl mb-12 text-center">
                  {experienceHeading}
                </div>
                <div className="flex flex-col text-md lg:text-xl w-full px-4">
                  <div className="">
                    <div className="text-xl text-[#00FF15] font-semibold">
                      Web Developer Intern - Vedasis Analytics
                    </div>
                    <div className="text-md">
                      NextJS | Bootstrap | Material UI | Git
                    </div>
                    <div className="text-md">
                      Worked on Frontend - NextJS. Created web-pages from
                      scratch. Worked with integration of backend technologies -
                      Firebase. Learnt Poject Collaboration - Git.
                    </div>
                  </div>
                  <div className="mt-16">
                    <div className="text-xl text-[#00FF15] font-semibold mt-2">
                      Competitive Programming
                    </div>
                    <div className="text-md">
                      C++ | Data Structures & Algorithms (DSA)
                    </div>
                    <div className="text-md">
                      GeeksForGeeks - Solved 1000+ problems. Global rank under
                      250
                    </div>
                    <div className="text-md">
                      CodeChef - Highest rating 1810
                    </div>
                    <div className="text-md">
                      HackerRank - Gold badges in problem solving & C++
                    </div>
                    <div className="text-md">
                      TCS CodeVita 2022 - Global rank 56
                    </div>
                    <div className="text-md">
                      Infosys HackWithInfy - Qualified for PPI
                    </div>
                  </div>
                  <div className="mt-16">
                    <div className="text-xl text-[#00FF15] font-semibold mt-2">
                      Volunteering
                    </div>
                    <div className="my-2">
                      Developer Students Club (DSC HIT): Presented an online
                      youtube session "Programming Simplified" on programming
                      basics for beginners. 275+ views on video.
                    </div>
                    <div className="my-2">
                      V-Force Volunteers — COVID-19 Virtual Campaigning Online
                      Created awareness about vaccination, COVID Appropriate
                      Behaviour via social media platform
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
              <button
                id="experienceBtn"
                className={
                  activeSection > 5
                    ? "flex px-2 py-2 border-l-[3px] border-[#00FF15] hover:text-[#C7FFBF]"
                    : activeSection === 5
                    ? "flex px-2 py-2 text-[#00FF15] border-l-[3px] border-[#00FF15]"
                    : "flex px-2 py-2 border-l-[3px] hover:text-[#C7FFBF]"
                }
                onClick={() => {
                  handleScroll(experienceRef);
                }}
              >
                Experience
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
