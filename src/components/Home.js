import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    function handleClick(path) {
        navigate(`/project/${path}`);
    }

    function handleClick2(path) {
        window.location.href = path
    }

    function openPdf() {
        window.open("/Resume3.pdf")
    }

    return (
        <div className={styles.page}>
            <div data-aos="fade-down" className={styles.home}>
                <h1 className={styles.name}>Harmandeep Mangat</h1>
                <p className={styles.jobTitle}>Full Stack Developer</p>
            </div>
            <div className={styles.pageTwo}>
                <div data-aos="fade-up" className={styles.section}>
                    <h1 className={styles.title}>Experience</h1>
                </div>
                <div className={styles.cardGroup}>
                    <div data-aos="flip-left" className={styles.card}>
                        <h2 className={styles.company}>Canada Summer Games</h2>
                        <p className={styles.location}>St. Catharines, Ontario</p>
                        <p className={styles.date}>Jan 2022{"-"}May 2022</p>
                        <p className={styles.position}>Software Engineer, Scrum Master, Product Owner</p>
                        <ul className={styles.myList}>
                            <li>
                                Designed, developed, and maintained user{"-"}centered software applications, working on
                                both front{"-"}end and back{"-"}end components using technologies such as
                                React, Node.js, Java Spring Boot, and SQL.
                            </li>
                            <li>
                                Managed the software development lifecycle, including project planning, agile sprints,
                                and quality assurance testing, to ensure on{"-"}time and
                                on{"-"}budget delivery of projects.
                            </li>
                            <li>
                                Utilized industry{"-"}accepted testing methods, including security, acceptance, and
                                performance testing, to troubleshoot flaws and improve application performance.

                            </li>
                            <li>
                                Supervised programmers and provided oversight for code debugging, development
                                lifecycle management, and best practices implementation.
                            </li>
                            <li>
                                Collaborated with stakeholders and integrated design feedback to produce high quality,
                                clean code and ensure that software applications met
                                user requirements.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="flip-up" className={styles.card}>
                        <h2 className={styles.company}>Animalerie Règne Animal</h2>
                        <p className={styles.location}>Remote</p>
                        <p className={styles.date}>Apr 2019{"-"}Sep 2021</p>
                        <p className={styles.position}>Full stack Developer, Product Owner</p>
                        <ul className={styles.myList}>
                            <li>
                                Designed, developed, and maintained a robust e{"-"}commerce website using Node.js, React,
                                HTML/CSS (Bootstrap), and SQL.L
                            </li>
                            <li>
                                Regularly updated the website to adapt to changing user preferences and client demands,
                                ensuring the site remained current and user friendly.
                            </li>
                            <li>
                                Verified the functioning of pages and applications by testing features after uploads,
                                identifying and resolving issues as needed.

                            </li>
                            <li>
                                Collaborated with stakeholders and integrated design feedback to produce high quality,
                                clean code and ensure that the website met user
                                requirements
                            </li>
                            <li>
                                Developed and deployed successful e{"-"}commerce strategies into the client{"'"}s website,
                                resulting in increased sales and customer satisfaction.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="flip-left" className={styles.card}>
                        <h2 className={styles.company}>Thelashbarco</h2>
                        <p className={styles.location}>Remote</p>
                        <p className={styles.date}>Feb 2018{"-"}Jul 2019</p>
                        <p className={styles.position}>Full stack Developer, Product Owner</p>
                        <ul className={styles.myList}>
                            <li>
                                Designed and created an accessible web frontend user interface for a new database
                                using HTML, CSS, Node.js, and React.
                            </li>
                            <li>
                                Managed backend server logic protocols and database connections to ensure seamless
                                functionality of the website.
                            </li>
                            <li>
                                Completed new development work and updates using multiple programming languages,
                                including Node.js, React, and SQL.
                            </li>
                            <li>
                                Detected problems provided by client{"'"}s feedback and implemented solutions,
                                improving the website{"'"}s functionality and user experience.
                            </li>
                            <li>
                                Executed programming projects adhering to coding standards, design styles, and project
                                management methodologies.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.pageTwo}>
                <div data-aos="fade-up" className={styles.section}>
                    <h1 className={styles.title}>Skills</h1>
                </div>
                <div className={styles.cardGroup}>
                    <div data-aos="flip-left" className={styles.card}>
                        <h2 className={styles.company}>Miscellaneous</h2>
                        <ul className={styles.myList}>
                            <li>Linux</li>
                            <li>Shell (Bash/Zsh)</li>
                            <li>LATEX(Overleaf/R Markdown)</li>
                            <li>Microsoft Office</li>
                            <li>Git</li>
                            <li>Genetic Programming</li>
                            <li>Neural Networks</li>
                            <li>Project oversight</li>
                            <li> Code debugging</li>
                            <li> Development lifecycle management</li>
                            <li> Best practices implementation</li>
                            <li> Timeline coordination</li>
                        </ul>
                    </div>
                    <div data-aos="flip-up" className={styles.card}>
                        <h2 className={styles.company}>Programming</h2>
                        <ul className={styles.myList}>
                            <li>Python (Pandas, PyTorch, NumPy, Scikit{"-"}learn. etc.)</li>
                            <li>PHP</li>
                            <li>C/C++</li>
                            <li> HTML/CSS (Bootstrap)</li>
                            <li>JavaScript (React, Node.js)</li>
                            <li>SQL</li>
                            <li>Java(Java Spring Boot)</li>
                            <li>Haskell</li>
                        </ul>
                    </div>
                    <div data-aos="flip-left" className={styles.card}>
                        <h2 className={styles.company}>Soft Skills</h2>
                        <ul className={styles.myList}>
                            <li>Program coding</li>
                            <li>Plan Agile sprints</li>
                            <li>Evaluate user requirements</li>
                            <li>Supervise programmers</li>
                            <li> Gather requirements</li>
                            <li>Debug software</li>
                            <li>Verbal communication</li>
                            <li> Produce clean code</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.pageTwo}>
                <div data-aos="fade-up" className={styles.section}>
                    <h1 className={styles.title}>Education</h1>
                </div>
                <div className={styles.cardGroup}>
                    <div data-aos="flip-up" className={styles.card}>
                        <h2 className={styles.company}>Brock University</h2>
                        <p className={styles.location}>St. Catharines, Ontario</p>
                        <p className={styles.date}>Apr 2022</p>
                        <p className={styles.position}>Bachelor of Science, Computer Science</p>
                        <p>Courses</p>
                        <ul className={styles.myList}>
                            <li>Data Structures</li>
                            <li>Computer Architecture</li>
                            <li>Computer Systems</li>
                            <li>Algorithms</li>
                            <li>Database Systems</li>
                            <li>Artificial Intelligence</li>
                            <li>Software Engineering</li>
                            <li>Functional Programming</li>
                            <li>Formal Methods in Software Engineering</li>
                            <li>Machine Learning</li>
                            <li>Genetic Programming</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.pageTwo}>
                <div data-aos="fade-up" className={styles.section}>
                    <h1 className={styles.title}>Projects</h1>
                </div>
                <div className={styles.cardGroup}>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick("Genetic_Algorithm_Report.pdf")}
                        style={{
                            backgroundImage: "url('/genetic_algorithm.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Genetic Algorithm</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick("Term_Project_Report.pdf")}
                        style={{
                            backgroundImage: "url('/chess.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Chess Engine</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick("COSC_3P91_Assignment_4.pdf")}
                        style={{
                            backgroundImage: "url('/poker.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Poker</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick("COSC_4P82_Assignment_1_B.pdf")}
                        style={{
                            backgroundImage: "url('/genetic_programming.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Genetic Programming: Cancer Diagnostic</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick("COSC_4P82_Assignment_2.pdf")}
                        style={{
                            backgroundImage: "url('/evo-art.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Genetic Programming: Evo Art</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick2("https://github.com/Harman3328/Wishlist_website.git")}
                        style={{
                            backgroundImage: "url('/PHP_logo.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>WishList Website: PHP</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick2("https://github.com/Harman3328/Login_System.git")}
                        style={{
                            backgroundImage: "url('/OIP.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>Login System: Spring boot & React</h2>
                        </div>
                    </div>
                    <div data-aos="flip-up" className={`${styles.card} ${styles.clickCard}`}
                        onClick={() => handleClick2("https://github.com/Harman3328/E-commerce_website.git")}
                        style={{
                            backgroundImage: "url('/node_js.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "200px",
                            width: "300px",
                            borderRadius: "10px",
                            boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h2 className={styles.company}>e-ecommerce Website: Node JS & React</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pageTwo}>
                <div data-aos="fade-up" className={styles.section}>
                    <h1 className={styles.title}>Contact</h1>
                </div>
                <div className={styles.contactCard}>
                    <h1>Harmandeep Mangat</h1>
                    <p className={styles.contactTitle}>Full Stack Developer</p>
                    <p>Brock University</p>
                    <div className={styles.cardSocialLinks}>
                        <a href="https://www.linkedin.com/in/harman-mangat-09b0b5239/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Harman3328" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:harman3328@hotmail.com">
                            <FaEnvelope />
                        </a>
                        <a href="tel:6479723186">
                            <FaPhone />
                        </a>
                    </div>
                    <p><button className={styles.contactButton} onClick={openPdf}>Resume</button></p>
                </div>
            </div>
        </div>
    );
}

export default Home;