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
                </div>
            </div>
        </main>
    )
}

/* let td = document.getElementById("TD");
let	cw = document.getElementById("CW");
let st = document.getElementById("ST");
let csr = document.getElementById("CSR");
let jobReq = document.getElementById("jobReq");
let jobDesc = document.getElementById("jobDesc")
let jobPref = document.getElementById("jobPref");
let jobTitle = document.getElementById("jobTitle");
let toggleButton = document.getElementById("menu-toggle");
let list = document.getElementById("listGroup");
let listHead = document.getElementById("listHeading");

//Remove All Child Elements from node
function removeAllChildren(item) {
	while(item.firstChild) {
		item.removeChild(item.firstChild);
	}
}



let ar = [td, cw, st, csr]; //Array of the positions

ar.map(el => {
	//Add Event Listener to each Job Element
	el.addEventListener("click", e => {
		//handle side nav buttons
		ar.map(i => {
			if(i.id == e.target.id) {
				i.disabled = true;
				i.style.border = "1px solid black";
				
			}else {
				i.disabled = false;
				i.style.border = "1px hidden black";
			}
		});
		//set career information on page
		jobTitle.innerHTML = e.target.value;
		jobDesc.innerHTML = descriptions[e.target.id].description;
		removeAllChildren(jobReq);
		removeAllChildren(jobPref);
		for(let i = 0; i < descriptions[e.target.id].requirements.length; i++) {
			let item = document.createElement("li");
			item.innerHTML = descriptions[e.target.id].requirements[i];
			jobReq.appendChild(item);
		}
		for(let i = 0; i < descriptions[e.target.id].preferred.length; i++) {
			let item = document.createElement("li");
			item.innerHTML = descriptions[e.target.id].preferred[i];
			jobPref.appendChild(item);
		}
		//Change Hidden radio button to correcct 
		document.getElementById(descriptions[e.target.id].radio).checked = true;
	})
})

//rotate button that hides side menu
toggleButton.addEventListener("click", () => {
	toggleButton.classList.toggle("rotated");
}); */