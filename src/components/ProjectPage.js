import React from "react";
import styles from "./ProjectPage.module.css"
import { useParams } from "react-router-dom";

function ProjectPage() {
    const { path } = useParams()
    const pdf = "/" + path;
    const links = {
        Genetic_Algorithm_Report: "https://github.com/Harman3328/Genetic_Algorithms.git",
        Term_Project_Report: "https://github.com/Harman3328/ChessGame.git",
        COSC_3P91_Assignment_4: "https://github.com/Harman3328/Poker.git",
        COSC_4P82_Assignment_1_B: "https://github.com/Harman3328/Genetic-Programming--Cancer-Diagnostic.git",
        COSC_4P82_Assignment_2: "https://github.com/Harman3328/Evo-Art-and-Procedural-Textures.git"
    }
    const key = path.split('.')[0];
    return (
        <div className={styles.page}>
            <div className={styles.project}>
                <embed src={pdf} type="application/pdf" width="100%" height="100%" />
            </div>
            <div className={styles.link}>
                <p><a className={styles.code} href={links[key]}>Code</a></p>
            </div>
        </div>
    );
}

export default ProjectPage;