import { useState } from 'react'

import jobs from '../components/jobsData';

import styles from '../styles/careers.module.css'

export default function Careers() {

    const [ menuToggle, setMenuToggle ] = useState(false);
    const [ job, setJob ] = useState("TD");

    const handleClick = () => {
        setMenuToggle(!menuToggle);
    }

    const changeJob = (evt) => {
        setJob(evt.target.id);
    }

    let currentjob = jobs[job];

    return(
        <main className={styles.container}>
            {/* <!-- Sidebar --> */}
            <div className={menuToggle ? styles.menuHidden : styles.sidebarContainer} id="sidebar-wrapper">
                <div className={styles.sidebar} id="listGroup">
                    <button value="Truck Driver" id="TD" className={`${job === "TD" ? styles.disabled : null} ${menuToggle ? styles.hidden : styles.shown}`} onClick={evt => changeJob(evt)}>Truck Driver</button>
                    <button value="Construction Worker" className={`${job === "CT" ? styles.disabled : null} ${menuToggle ? styles.hidden : styles.shown}`}  id="CT" onClick={evt => changeJob(evt)}>Construction Worker</button>
                    <button value="Septic Technician" className={`${job === "ST" ? styles.disabled : null} ${menuToggle ? styles.hidden : styles.shown}`}  id= "ST" onClick={evt => changeJob(evt)}>Septic Technician</button>
                    <button value="Customer Service Representative" className={`${job === "CSR" ? styles.disabled : null} ${menuToggle ? styles.hidden : styles.shown}`}  id="CSR" onClick={evt => changeJob(evt)}>Customer Service Representative</button>
                </div>
            </div>
            
            <div id="page-content-wrapper">
                <nav className={styles.secondaryNav}>
                    <button id="menu-toggle" className={styles.togglebutton} onClick={handleClick}><img id="chevron" src="./images/leftChevron.svg" className={menuToggle ? styles.toggled : styles.menuChevron} alt="open/close positions menu" /></button>
                    <h2 id="listHeading">Positions</h2>
                </nav>
                <div className={styles.jobContainer}>
                    <div className={styles.descriptionContainer}>
                        <h3 id="jobTitle">{currentjob.title}</h3>
                        <p className ="font-weight-bold" id="jobDesc">{currentjob.description}</p>
                        <p>Requirements:</p>
                        <ul id="jobReq">
                            {currentjob.requirements.map((req, index) => <li key={`r${index}`}>{req}</li>)}
                        </ul>
                        <p>Preferred Qualifications:</p>
                        <ul id="jobPref">
                            {currentjob.preferred.map((req, index) => <li key={`p${index}`}>{req}</li>)}
                        </ul>
                    </div>
                    <h3><a href={`mailto:jobs@septicservicesgroup.com?subject=Resume for ${currentjob.title}`} style={{textDecoration: 'underline'}}> Click here to email us about the position. Be sure to attach your resume</a></h3>
                </div>
            </div>
        </main>
    )
}
