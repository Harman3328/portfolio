import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import JobOnePopup from "./JobOnePopup";
import ProjectPopup from "./ProjectPopup";
import CanadaSummerGames from "../assets/canada-summer-games-2022.jpg";
import AnimalerieRègneAnimal from "../assets/Animalerie-Règne-Animal.png"
import Thelashbarco from "../assets/Thelashbarco.png"
import htmlCSS from "../assets/html-css.png"
import js from "../assets/js.png"
import re from "../assets/react.png"
import linux from "../assets/linux.png"
import shell from "../assets/shell.png"
import latex from "../assets/LaTeX.png"
import microsoftOffice from "../assets/Microsoft-Office.png"
import git from "../assets/git.png"
import python from "../assets/Python.png"
import php from "../assets/PHP_logo.png"
import c from "../assets/C++.png"
import nodejs from "../assets/node_js.png"
import sql from "../assets/SQL2.png"
import java from "../assets/java-logo.png"
import haskell from "../assets/Haskell-Programming-Language.jpg"
import projectOversight from "../assets/project-oversight.png"
import codeDebugging from "../assets/debug.jpg"
import develeopmentLifeStyle from "../assets/Development-lifecycle-management.png"
import bestPractices from "../assets/best-practices.jpg"
import timeLineCoord from "../assets/website_development_project_coordination_timeline.jpg"
import programCoding from "../assets/Coding-vs-programming.jpg"
import planAgileSprint from "../assets/The_5_Scrum_ceremonies.png"
import userRequirements from "../assets/General-process-for-users-requirements-analysis.png"
import superviseProgrammer from "../assets/Supervise-programmers.webp"
import gatherRequirement from "../assets/Gathering-requirements.webp"
import debugSoftware from "../assets/Debug-software.png"
import verbalComm from "../assets/verbal-communication.png"
import cleanCode from "../assets/clean-code.jpg"
import brockUniversityLogo from "../assets/Brock-University-Logo.webp"
import evoArtPdf from "../assets/COSC_4P82_Assignment_2.pdf"
import GPCancerPdf from "../assets/COSC_4P82_Assignment_1_B.pdf"
import GeneticAlgorithmPdf from "../assets/Genetic_Algorithm_Report.pdf"
import chessGamePdf from "../assets/Term_Project_Report.pdf"
import pokerPdf from "../assets/COSC_3P91_Assignment_4.pdf"
import resumePdf from "../assets/Resume3.pdf"

function Home() {
    const [showPopupOne, setShowPopupOne] = useState(false);
    const [showPopupTwo, setShowPopupTwo] = useState(false);
    const [showPopupThree, setShowPopupThree] = useState(false);
    const [showPopupFour, setShowPopupFour] = useState(false);
    const [showPopupFive, setShowPopupFive] = useState(false);
    const [showPopupSix, setShowPopupSix] = useState(false);
    const [showPopupSeven, setShowPopupSeven] = useState(false);
    const [showPopupEight, setShowPopupEight] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    function openPdf() {
        window.open(resumePdf)
    }

    function handlePopupOneButtonClick() {
        setShowPopupOne(true);
    }

    function handleCloseOneButtonClick() {
        setShowPopupOne(false);
    }

    function handlePopupTwoButtonClick() {
        setShowPopupTwo(true);
    }

    function handleCloseTwoButtonClick() {
        setShowPopupTwo(false);
    }

    function handlePopupThreeButtonClick() {
        setShowPopupThree(true);
    }

    function handleCloseThreeButtonClick() {
        setShowPopupThree(false);
    }

    function handlePopupFourButtonClick() {
        setShowPopupFour(true);
    }

    function handleCloseFourButtonClick() {
        setShowPopupFour(false);
    }

    function handlePopupFiveButtonClick() {
        setShowPopupFive(true);
    }

    function handleCloseFiveButtonClick() {
        setShowPopupFive(false);
    }

    function handlePopupSixButtonClick() {
        setShowPopupSix(true);
    }

    function handleCloseSixButtonClick() {
        setShowPopupSix(false);
    }

    function handlePopupSevenButtonClick() {
        setShowPopupSeven(true);
    }

    function handleCloseSevenButtonClick() {
        setShowPopupSeven(false);
    }

    function handlePopupEightButtonClick() {
        setShowPopupEight(true);
    }

    function handleCloseEightButtonClick() {
        setShowPopupEight(false);
    }

    return (
        <div className={styles.page}>
            <div data-aos="fade-down" className={styles.home} id="home">
                <h1 className={styles.name}>Harmandeep Mangat</h1>
                <p className={styles.jobTitle}>Full Stack Developer</p>
            </div>
            <section data-aos="fade-up" className={styles.workExperience}>
                <h2 id="experience">Work Experience</h2>

                <div className={styles.card} >
                    <img src={CanadaSummerGames} alt="Company Logo" />
                    <div className={styles.cardContent}>
                        <h3>Canada Summer Games</h3>
                        <p>Software Engineer, Scrum Master, Product Owner</p>
                        <p>Jan 2022 {"-"} May 2022</p>
                        <button onClick={handlePopupOneButtonClick}>Learn More</button>
                        <JobOnePopup trigger={showPopupOne} setTrigger={handleCloseOneButtonClick}>
                            <h3 className={styles.popTitle}>Canada Summer Games</h3>
                            <ul>
                                <li>
                                    Designed, developed, and maintained user centered software applications,
                                    working on both frontend and backend components using technologies such as
                                    React, Node.js, Java Spring Boot, and SQL.
                                </li>

                                <li>
                                    Managed the software development lifecycle, including project planning, agile
                                    sprints, and quality assurance testing, to ensure on{"-"}time and
                                    on{"-"}budget delivery of projects
                                </li>

                                <li>
                                    Utilized industry accepted testing methods, including security, acceptance, and
                                    performance testing, to troubleshoot flaws and improve application performance.
                                </li>

                                <li>
                                    Supervised programmers and provided oversight for code debugging, development
                                    lifecycle management, and best practices implementation
                                </li>

                                <li>
                                    Collaborated with stakeholders and integrated design feedback to produce
                                    high quality, clean code and ensure that software applications met
                                    user requirements.
                                </li>
                            </ul>
                        </JobOnePopup>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={AnimalerieRègneAnimal} alt="Client Logo" />
                    <div className={styles.cardContent}>
                        <h3>Animalerie Règne Animal</h3>
                        <p>Full stack Developer, Product Owner</p>
                        <p>Apr 2019 {"-"}  Sep 2021</p>
                        <button onClick={handlePopupTwoButtonClick}>Learn More</button>
                        <JobOnePopup trigger={showPopupTwo} setTrigger={handleCloseTwoButtonClick}>
                            <h3 className={styles.popTitle}>Animalerie Règne Animal</h3>
                            <ul>
                                <li>
                                    Designed, developed, and maintained a robust e{"‑"}commerce website using Node.js,
                                    React, HTML/CSS {"(Bootstrap)"}, and SQL.L
                                </li>

                                <li>
                                    Regularly updated the website to adapt to changing user preferences and client
                                    demands, ensuring the site remained current and user friendly.
                                </li>

                                <li>
                                    Verified the functioning of pages and applications by testing features after
                                    uploads, identifying and resolving issues as needed.
                                </li>

                                <li>
                                    Collaborated with stakeholders and integrated design feedback to produce
                                    high quality, clean code and ensure that the website met user
                                    requirements.
                                </li>

                                <li>
                                    Developed and deployed successful e{"‑"}commerce strategies into the client{"’"}s
                                    website, resulting in increased sales and customer satisfaction
                                </li>
                            </ul>
                        </JobOnePopup>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={Thelashbarco} alt="Client Logo" />
                    <div className={styles.cardContent}>
                        <h3>Thelashbarco</h3>
                        <p>Full stack Developer, Product Owner</p>
                        <p>Feb 2018 {"-"} Jul 2019</p>
                        <button onClick={handlePopupThreeButtonClick}>Learn More</button>
                        <JobOnePopup trigger={showPopupThree} setTrigger={handleCloseThreeButtonClick}>
                            <h3 className={styles.popTitle}>Thelashbarco</h3>
                            <ul>
                                <li>
                                    Designed and created an accessible web frontend user interface for a new database
                                    using HTML, CSS, Node.js, and React.
                                </li>

                                <li>
                                    Managed backend server logic protocols and database connections to ensure seamless
                                    functionality of the website
                                </li>

                                <li>
                                    Completed new development work and updates using multiple programming languages,
                                    including Node.js, React, and SQL.
                                </li>

                                <li>
                                    Detected problems provided by client{"’"}s feedback and implemented solutions,
                                    improving the website{"’"}s functionality and user experience.
                                </li>

                                <li>
                                    Executed programming projects adhering to coding standards, design styles, and
                                    project management methodologies.
                                </li>
                            </ul>
                        </JobOnePopup>
                    </div>
                </div>

                <div className={styles.callToAction}>
                    <a href="https://github.com/Harman3328?tab=repositories">See My Full Portfolio</a>
                </div>
            </section>

            <div className={styles.skillsContainer}>
                <h2 id="skills">Miscellaneous</h2>
                <ul className={styles.skillsList}>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={linux} alt="Linux" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Linux</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={shell} alt="Shell" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Shell {"(Bash/Zsh)"}</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={latex} alt="LaTex" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">LaTeX {"(Overleaf/R Markdown)"}</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={microsoftOffice} alt="Microsoft Office" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Microsoft Office</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={git} alt="Git" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Git</div>
                    </li>
                </ul>

                <h2>Programming</h2>
                <ul className={styles.skillsList}>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={htmlCSS} alt="HTML/CSS" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">HTML/CSS {"(Bootstrap)"}</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={js} alt="JavaScript" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">JavaScript</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={re} alt="React" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">React</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={python} alt="Python" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Python {"(Pandas, PyTorch, NumPy, Scikit‑learn. etc.)"}</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={php} alt="PHP" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">PHP</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={c} alt="C/C++" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up"> C/C++</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={nodejs} alt="Node.js" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up"> Node.js</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={sql} alt="SQL" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up"> SQL</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={java} alt="Java" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up"> Java {"(Java Spring Boot)"}</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={haskell} alt="Haskell" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up"> Haskell</div>
                    </li>
                </ul>
                <h2>Soft Skills</h2>
                <ul className={styles.skillsList}>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={projectOversight} alt="Project oversight" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Project oversight</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={codeDebugging} alt="Code debugging" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Code debugging</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={develeopmentLifeStyle} alt="Development lifecycle management" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Development lifecycle management</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={bestPractices} alt="Best practices implementation" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Best practices implementation</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={timeLineCoord} alt="Timeline coordination" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Timeline coordination</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={programCoding} alt="Program coding" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Program coding</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={planAgileSprint} alt="Plan Agile sprints" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Plan Agile sprints</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={userRequirements} alt="Evaluate user requirements" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Evaluate user requirements</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={superviseProgrammer} alt="Supervise programmers" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Supervise programmers</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={gatherRequirement} alt="Gather requirements" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Gather requirements</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={debugSoftware} alt="Debug software" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Debug software</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={verbalComm} alt="Verbal communication" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Verbal communication</div>
                    </li>
                    <li>
                        <div className={styles.skillIcon}>
                            <img src={cleanCode} alt="Produce clean code" data-aos="fade-up" />
                        </div>
                        <div className={styles.skillName} data-aos="fade-up">Produce clean code</div>
                    </li>
                </ul>
            </div>

            <div className={styles.educationContainer} id="education">
                <h2 data-aos="fade-up">Education</h2>
                <div className={styles.educationInner}>
                    <h3 data-aos="fade-up">ACADEMIC QUALIFICATIONS</h3>
                    <p data-aos="fade-up">2016{"-"}2022</p>
                    <p data-aos="fade-up">Bachelor of Science in Computer Science</p>
                    <p data-aos="fade-up">Brock University</p>
                    <img src={brockUniversityLogo} alt="Brock University" data-aos="fade-up"></img>
                    <p data-aos="fade-up">
                        As a Bachelor of Science in Computer Science major, I gained valuable experience in programming
                        languages such as Java, Python, C++, and Haskell, as well as in computer systems architecture,
                        design, and AI. I completed several academic projects, including developing a mobile app,
                        designing a relational database system, and developing websites. I also interned at a software
                        development company, where I worked on a team to develop and test new software features. I also
                        worked for small businesses, where I developed websites and designed databases.
                        Through my studies, I worked on personal projects, where I learned new languages and
                        technologies to further improve my skills.
                    </p>
                </div>
                <div className={styles.courses}>
                    <h3 data-aos="fade-up">RELEVANT COURSES</h3>
                    <div className={styles.coursesInner}>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Data Structures</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Implementation and use of advanced data structures including trees, graphs,
                                hash tables and advanced list structures, sorting and searching, recursion and
                                traversals. Analysis of algorithms.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Computer Architecture</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Evolution of digital computer. Computer organization including functional units,
                                instruction cycle, control, buses and memory. Instruction types and memory access,
                                instruction sequencing and call/return. Basic assembly language programming.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Computer Systems</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Operating systems and networking. Resource sharing including file, processor, I/O and
                                memory management. Concurrency including: context switching, interprocess
                                communication, and synchronization. Protection and security including encryption.
                                Distributed systems and networking including: ISO model and packet routing.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Artificial Intelligence</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Historic and philosophical foundations of AI; knowledge representation and reasoning;
                                problem spaces; blind and heuristic search; adversarial search in game playing;
                                machine learning; social and ethical considerations
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Algorithms</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Design and analysis of computer algorithms. Topics include asymptotic notations,
                                solving recurrences, order statistics, general algorithm design techniques such as
                                divide-and-conquer, greedy algorithms, dynamic programming, backtracking and
                                branch-and-bound. Graph and string algorithms. Introduction to NP-Completeness and
                                complexity theory.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Database Systems</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Fundamental database concepts: specification, design and applications; various models
                                including the relational model; normal forms, efficiency considerations, queries using
                                SQL, database administration and security. Practical experience in a group project.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Software Engineering</h4>
                            <p data-aos="fade-up">Duration: 8 months </p>
                            <p data-aos="fade-up">
                                Theory of software engineering. Topics include plan-driven development, Agile
                                development, software requirements elicitation and presentation, verification of
                                software correctness, redundancy, robustness, safety and security. Creation of robust
                                software requirements document. Introduction to tools such as Git and Azure DevOps.
                                Application of software engineering. The development of a large-scale software
                                engineering project in a competitive team setting, including creation of complete
                                documentation for a working system.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Functional Programming</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Introduction to functional programming using the languages Haskell and SML.
                                Topics include all data types, type inference, pattern-matching, recursion,
                                polymorphism, higher-order functions, lazy vs eager evaluation, modules and monads
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Formal Methods in Software Engineering</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Specification and correctness of software. Topics include algebraic specifications,
                                semantics of programming languages, Hoare/dynamic logic, specification languages,
                                program transformation
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up"> Machine Learning</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Fundamental machine learning techniques with emphasis on using these techniques to
                                design and implement small practical learning systems. Topics include learning as a
                                search, inductive bias, concept learning, computational learning, explanation-based
                                learning and reinforcement learning.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Genetic Programming</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Synthesis of computer programs using evolutionary computation. Different
                                representations, including tree, linear, grammatical. Theoretical analyses,
                                including the effects of operators, representations and fitness landscapes.
                                Practical applications in problem solving, decision making, classification,
                                computer vision and design.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Reinforcement Learning</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Multi-armed bandits, Markov decision processes, model-based and model-free methods
                                {"(such as dynamic programming, Monte Carlo methods, and temporal-difference methods)"}
                                for learning value and policy functions. Approximation solutions including deep
                                reinforcement learning.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Internet Technologies</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Concepts and techniques required for building and maintaining advanced interactive
                                Web sites. Topics include XML and SGML, database connectivity and forms handling,
                                basic animation, graphics optimization for the Web, scripting, advanced searching,
                                Web design for accessibility.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Advanced Object-Oriented Programming</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                Topics may include graphical user interfaces, animation, sound, music, networking,
                                parallelism, client-server and XML using game design as an example. Object-oriented
                                program design including UML and design patterns. Introduction to advanced Java APIs.
                            </p>
                        </div>
                        <div className={styles.course}>
                            <h4 data-aos="fade-up">Programming in C++ with Applications</h4>
                            <p data-aos="fade-up">Duration: 4 months </p>
                            <p data-aos="fade-up">
                                C++ as a second language. Basic language structure, data structures, libraries for
                                application. Introduction to object-orientation and UNIX commands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className={styles.projectContainer} id="projects">
                <h2 className={styles.projectHeading}>Projects</h2>
                <div className={styles.projectContainerInner}>
                    <div className={`${styles.project} ${!showPopupFour ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Evo Art and Procedural Textures</h3>
                            <p className={styles.projectDescription}>
                                This project explored using genetic programming to generate evolutionary arts and
                                procedural textures
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Genetic Programming</li>
                                <li>ECJ</li>
                            </ul>
                            <button type="button" className={styles.projectLink} onClick={handlePopupFourButtonClick}>
                                View Project
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupFive ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Genetic Programming Cancer Diagnostic</h3>
                            <p className={styles.projectDescription}>
                                A Genetic program that examines the data describing an X-ray image and
                                returns whether it is benign or malignant
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Genetic Programming</li>
                                <li>ECJ</li>
                            </ul>
                            <button type="button" className={styles.projectLink} onClick={handlePopupFiveButtonClick}>
                                View Project
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupSix ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Genetic Algorithms</h3>
                            <p className={styles.projectDescription}>
                                The comparision of multiple crossover algorithms to reconstruct a shredded document
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Ordered Crossover</li>
                                <li>Uniform Crossover</li>
                                <li>Modified Ordered Crossover</li>
                            </ul>
                            <button type="button" className={styles.projectLink} onClick={handlePopupSixButtonClick}>
                                View Project
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupSeven ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Chess Game</h3>
                            <p className={styles.projectDescription}>
                                A chess playing AI that uses iterative deepening with the mini-max algorithm optimized
                                by alpha beta pruning to find the next best move given a current board state.
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Iterative deepening</li>
                                <li>Mini-max algorithm</li>
                                <li>Alpha beta Pruning</li>
                            </ul>
                            <button type="button" className={styles.projectLink} onClick={handlePopupSevenButtonClick}>
                                View Project
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupEight ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Poker</h3>
                            <p className={styles.projectDescription}>
                                A single player Jack or better game that can be run normally or with networks
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Networking</li>
                                <li>Java</li>
                            </ul>
                            <button type="button" className={styles.projectLink} onClick={handlePopupEightButtonClick}>
                                View Project
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupOne ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>E-commerce website</h3>
                            <p className={styles.projectDescription}>
                                E-commerce Website Name is an online platform that allows customers to browse,
                                purchase, and receive automotive vehicles from the comfort of their own home.
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>React</li>
                                <li>Node js</li>
                                <li>SQL</li>
                            </ul>
                            <a
                                className={styles.projectLinkButton}
                                href="https://github.com/Harman3328/E-commerce_website.git"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupOne ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Login System </h3>
                            <p className={styles.projectDescription}>
                                Login system that uses react for frontend and java spring boot for backend.
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>React</li>
                                <li>Spring Boot</li>
                                <li>CSS/Bootstrap</li>
                            </ul>
                            <a
                                className={styles.projectLinkButton}
                                href="https://github.com/Harman3328/Login_System.git"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.project} ${!showPopupOne ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Wishlist Website</h3>
                            <p className={styles.projectDescription}>
                                A wish list website that allows the users to create a account and add items to their
                                wishlist that are saved to a database or if the user isn't signed in, it use the
                                local storage
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>HTML</li>
                                <li>PHP</li>
                                <li>Django</li>
                            </ul>
                            <a
                                className={styles.projectLinkButton}
                                href="https://github.com/Harman3328/Wishlist_website.git"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.project} ${!showPopupOne ? styles.projectSpecial : ""}`}>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>Neural Network</h3>
                            <p className={styles.projectDescription}>
                                Basic Neural network with backpropogation
                            </p>
                            <ul className={styles.projectFeatures}>
                                <li>Java</li>
                                <li>Neural Network</li>
                                <li>backpropogation</li>
                            </ul>
                            <a
                                className={styles.projectLinkButton}
                                href="https://github.com/Harman3328/Neural_Network.git"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <ProjectPopup trigger={showPopupFour} setTrigger={handleCloseFourButtonClick}>
                    <h3 className={styles.popTitle}>Evo Art and Procedural Textures</h3>
                    <embed src={evoArtPdf} type="application/pdf" width="100%" height="600px" />
                    <a
                        className={styles.projectButton}
                        href="https://github.com/Harman3328/Evo-Art-and-Procedural-Textures.git"
                    >
                        Code
                    </a>
                </ProjectPopup>

                <ProjectPopup trigger={showPopupFive} setTrigger={handleCloseFiveButtonClick}>
                    <h3 className={styles.popTitle}>Genetic Programming Cancer Diagnostic</h3>
                    <embed src={GPCancerPdf} type="application/pdf" width="100%" height="600px" />
                    <a
                        className={styles.projectButton}
                        href="https://github.com/Harman3328/Genetic-Programming--Cancer-Diagnostic.git"
                    >
                        Code
                    </a>
                </ProjectPopup>

                <ProjectPopup trigger={showPopupSix} setTrigger={handleCloseSixButtonClick}>
                    <h3 className={styles.popTitle}>Genetic Algorithms</h3>
                    <embed src={GeneticAlgorithmPdf} type="application/pdf" width="100%" height="600px" />
                    <a
                        className={styles.projectButton}
                        href="https://github.com/Harman3328/Genetic_Algorithms.git"
                    >
                        Code
                    </a>
                </ProjectPopup>

                <ProjectPopup trigger={showPopupSeven} setTrigger={handleCloseSevenButtonClick}>
                    <h3 className={styles.popTitle}>Chess Game</h3>
                    <embed src={chessGamePdf} type="application/pdf" width="100%" height="600px" />
                    <a
                        className={styles.projectButton}
                        href="https://github.com/Harman3328/ChessGame.git"
                    >
                        Code
                    </a>
                </ProjectPopup>

                <ProjectPopup trigger={showPopupEight} setTrigger={handleCloseEightButtonClick}>
                    <h3 className={styles.popTitle}>Poker</h3>
                    <embed src={pokerPdf} type="application/pdf" width="100%" height="600px" />
                    <a
                        className={styles.projectButton}
                        href="https://github.com/Harman3328/Poker.git"
                    >
                        Code
                    </a>
                </ProjectPopup>
            </div>

            <div data-aos="fade-up" className={styles.contactContainer} id="contact">
                <h2 className={styles.contactHeading}>Contact</h2>
                <div className={styles.contactCard}>
                    <div className={styles.contactCardContent}>
                        <h1>Harmandeep Mangat</h1>
                        <p className={styles.contactTitle}>Full Stack Developer</p>
                        <p>Brock University</p>
                        <div className={styles.cardSocialLinks}>
                            <a href="https://www.linkedin.com/in/harman-mangat-09b0b5239/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} />
                            </a>
                            <a href="https://github.com/Harman3328" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} />
                            </a>
                            <a href="mailto:harman3328@hotmail.com">
                                <FaEnvelope size={40} />
                            </a>
                            <a href="tel:6479723186">
                                <FaPhone size={40} />
                            </a>
                        </div>
                    </div>
                    <p><button className={styles.contactButton} onClick={openPdf}>Resume</button></p>
                </div>
            </div>
        </div>
    );
}

export default Home;