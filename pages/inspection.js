import Head from "next/head";
import { Component } from "react";
import axios from "axios";

import * as ga from '../lib/ga'

import styles from "../styles/inspection.module.css";

export default class Inspection extends Component {
	constructor(props) {
        super(props);
        this.state = {
			requestedDate: "",
            contactName: "", 
			contactEmail:"", 
			contactPhone:"", 
			requestorFirst:"", 
			requestorLast:"", 
			propertyAddress:"", 
			city: "", 
			zipCode: "", 
			propertybeds: "", 
			tankLids: "", 
			lastPumped: "", 
			multipleSeptic: "No", 
			septicDrain: "Yes", 
			previousProblems: "",
			certifiedTrue: false,
			popover: false,
			pageX: 0,
			pageY: 0,
			submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
		this.showPop = this.showPop.bind(this);
    }

    handleChange(evt) {
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        })
    }

	showPop(evt) {
		this.setState({
			...this.state,
			pageX: evt.clientX + 10,
			pageY: evt.clientY,
			popover: evt.type == "pointerenter" ? true : false
		})
	}

    handleSubmit(evt) {
        evt.preventDefault()
        let { requestedDate, contactName, contactEmail, contactPhone, requestorFirst, requestorLast, propertyAddress, city, zipCode, propertybeds, tankLids,lastPumped, multipleSeptic, septicDrain, previousProblems } = this.state
        let params = {requestedDate:requestedDate, contactName: contactName, contactEmail:contactEmail, contactPhone:contactPhone, requestorFirst:requestorFirst, requestorLast:requestorLast, propertyAddress:propertyAddress, city: city, zipCode:zipCode, propertybeds:propertybeds, tankLids:tankLids, lastPumped:lastPumped, multipleSeptic:multipleSeptic, septicDrain:septicDrain, previousProblems:previousProblems}
        this.setState({
            ...this.state, 
            error: false
        })
        axios.post('/api/inspectionApi', {params})
        .then(response => {
            if(response.data === 'OK') {
                this.setState({
                    ...this.state,
                    submitted: true,
                })
            }
        }).catch(error => {
            this.setState({
                ...this.state, 
                error: true
            })
        })
		ga.event({
            action: "generate_lead",
            params : {
              lead_source: "Inspection Request Form"
            }
        })
    }
	render(){
		let { requestedDate, contactName, contactEmail, contactPhone, requestorFirst, requestorLast, propertyAddress, city, zipCode, propertybeds, tankLids,lastPumped, multipleSeptic, septicDrain, previousProblems, popover,certifiedTrue, pageX, pageY, submitted } = this.state
		if(!submitted) {
			return (
			<>
				<Head>
					<meta
						name="keywords"
						content="Real Estate, Inspection, Septic inspection, Sacramento, Lodi, Stockton, San Joaquin"
					/>
					<meta
						name="description"
						content="Real Estate Septic System Inspection form"
					/>
					<title>G&amp;C Septic Inspection</title>

					{/* <!-- Social Media posting --> */}
					<meta
						property="og:title"
						content="Septic System Inspection Form"
					/>
					<meta
						property="og:description"
						content="If you are buying or selling a home, a septic inspection will tell you how the home's septic system is performing"
					/>
					<meta
						property="og:url"
						content="https://gandcseptic.com/inspection"
					/>
					<meta
						property="og:image"
						content="https://gandcseptic.com/images/pumping2.webp"
					/>
				</Head>
				<main className="container">
					<h1 className="text-center jumbotron">Septic Evaluation Request Form</h1>
					<div className={styles.inspectionDescription}>
						<h3>Septic inspection includes:</h3>
						<ul>
							<div className={styles.listContainer}>
								<div className={styles.listColumn}>
									<li>Dig out tank lids if necessary</li>
									<li>Evaluate Tank</li>
									<li>Test leaching system</li>
								</div>
								<div className={styles.listColumn}>
									<li>Pump Tank</li>
									<li>Evaluate Tank Components</li>
									<li>Take site measurements and photos</li>
								</div>
							</div>
						</ul>
						<h4 className="w95 bottom-spaced">
							Upon completion of the inspection, the report will be
							compiled. The report will include evaluation notes,
							photographs, diagrams of tanks on the site, permits that
							the county has on file as well as recommendations for
							repairs as needed.
						</h4>

						<h4 className="w95 bottom-spaced">
							To request an inspection, please fill out form below
							completely.
						</h4>
						<h4 className="w95 bottom-spaced">
							Alternatively, you can download a PDF form{" "}
							<a 
								style={{textDecoration: "underline"}}
								target="_blank" 
								rel="noreferrer"
								href="/inspection.pdf"
							>
								HERE
							</a>{" "}
							and email it to:{" "}
							<a
								style={{textDecoration: "underline"}}
								href="mailto:inspections@gandcseptic.com"
								target="_blank"
								rel="noreferrer"
							>
								inspections@gandcseptic.com
							</a>
						</h4>
					</div>
					<form className={styles.inspectionForm} action="none">
						<h3>Property Information</h3>
						<div>
							<label htmlFor="requestedDate">
								Requested Date of Service:
							</label>
							<input
								type="date"
								name="requestedDate"
								id="requestedDate"
								className="form-control"
								value={requestedDate}
								onChange={e => this.handleChange(e)}
							/>
						</div>
						<div className={styles.formRow}>
							<div className={styles.col}>
								<label htmlFor="Address">Property Address:</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="text"
									name="propertyAddress"
									id="Address"
									value={propertyAddress}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
							<div className={styles.col}>
								<label htmlFor="city">City:</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="text"
									name="city"
									id="city"
									value={city}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className={styles.col}>
								<label htmlFor="zipCode">Zip Code:</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="number"
									name="zipCode"
									id="zipCode"
									value={zipCode}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
						</div>
						<div className={styles.formRow}>
							<div className={styles.col}>
								<label htmlFor="propertybeds"># of Bedrooms:</label>
								<input
									className="form-control col"
									type="number"
									name="propertybeds"
									id="propertybeds"
									min="1"
									value={propertybeds}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
							<div className={styles.col} >
								<label htmlFor="tankLids">Tank Lids
								<button
									type="button"
									tabIndex="0"
									data-trigger="focus"
									data-placement="bottom"
									className={styles.popoverButton}
									data-toggle="popover"
									id="lidToggle"
									data-html="true"
									onPointerEnter={evt => this.showPop(evt)}
									onPointerLeave={evt => this.showPop(evt)}
								>
									<img
										className={styles.popoverButton}
										id="tankInfo"
										src="/images/infoCircle.svg"
										alt="Learn More"
									/>
								</button></label>
								{popover && (
									<div className={styles.popover} style={{top: `${pageY}px`, left:`${pageX}px`}}>
										<p>
											Lids are usually 18-24 inches below
											ground level
										</p>
										<div className={styles.popoverRow}>
											<div className={styles.popoverDiv}>
												<img
													alt="Lids with Risers"
													src="/images/Riser1.webp"
												/>
												<p>Risers Installed</p>
											</div>
											<div className={styles.popoverDiv}>
												<img
													src="/images/clean-out.webp"
													alt="Tank Vent"
												/>
												<p>Tank Vent, NOT a lid</p>
											</div>
										</div>
									</div>
								)}
								<select
									className="form-control "
									type="dropdown"
									name="tankLids"
									id="tankLids"
									value={tankLids}
									onChange={e => this.handleChange(e)}
									required
								>
									<option value="">Select</option>
									<option value="Lids Exposed">
										Lids are Exposed
									</option>
									<option value="Have Risers">
										Lids Have Risers installed
									</option>
									<option value="Need to be dug">
										Lids need to be dug out
									</option>
								</select>
							</div>
							<div className={styles.col}>
								<label htmlFor="lastPumped">
									Date of last pumping:
								</label>
								<input
									className="form-control"
									type="date"
									name="lastPumped"
									id="lastPumped"
									value={lastPumped}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
						</div>
						<div className={styles.formRow}>
							<div className={styles.col}>
								<label htmlFor="multipleSeptic">
									Is there more than one septic system on
									property:
								</label>
								<div className={styles.formRow}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											value="Yes"
											name="multipleSeptic"
											id="multipleSepticYes"
											checked={multipleSeptic === "Yes"}
											onChange={e => this.handleChange(e)}
										/>
										<label
											className="form-check-label col-form-label"
											htmlFor="multipleSepticYes"
										>
											Yes
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											value="No"
											name="multipleSeptic"
											id="multipleSepticNo"
											checked={multipleSeptic === "No"}
											onChange={e => this.handleChange(e)}
										/>
										<label
											className="form-check-label col-form-label"
											htmlFor="multipleSepticNo"
										>
											No
										</label>
									</div>
								</div>
							</div>
							<div className={styles.col}>
								<label htmlFor="septicDrain">
									Does all plumbing drain into septic?
								</label>
								<div className={styles.formRow}>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											value="Yes"
											name="septicDrain"
											id="plumbingYes"
											checked={septicDrain === "Yes"}
											onChange={e => this.handleChange(e)}
										/>
										<label
											className="form-check-label col-form-label"
											htmlFor="plumbingYes"
										>
											Yes
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											value="No"
											name="septicDrain"
											id="plumbingNo"
											checked={septicDrain === "No"}
											onChange={e => this.handleChange(e)}
										/>
										<label
											className="form-check-label col-form-label"
											htmlFor="plumbingNo"
										>
											No
										</label>
									</div>
								</div>
							</div>
						</div>
						<label htmlFor="previousProblems">
							Any previous issues with system:
						</label>
						<textarea
							name="previousProblems"
							id="previousProblems"
							className={styles.formComments}
							value={previousProblems}
							onChange={e => this.handleChange(e)}
						></textarea>
						
						<h5>Contact Person:</h5>
						<div className={styles.formRow}>
							<div className={styles.col}>
								<label htmlFor="contactName">
									Name:
								</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="text"
									name="contactName"
									id="contactName"
									value={contactName}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className={styles.col}>
								<label htmlFor="contactEmail">Email</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="email"
									name="contactEmail"
									id="contactEmail"
									value={contactEmail}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className={styles.col}>
								<label htmlFor="contactPhone">Phone Number</label>
								<input
									className={`${styles.input25} ${styles.input}`}
									type="tel"
									name="contactPhone"
									id="contactPhone"
									value={contactPhone}
									onChange={e => this.handleChange(e)}
								/>
							</div>
						</div>
						
						
						<div className={styles.formRow}>
							<div className={styles.formRow}>
								<label htmlFor="certifiedTrue" className="text-danger">
									I certify that the above is true and correct to
									the best of my knowledge 
								</label>
								{" "}
								<input
									className="form-check-input"
									type="checkbox"
									name="certifiedTrue"
									id="certifiedTrue"
									value={certifiedTrue}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
						</div>
						<div className={styles.formRow}>
							<div className={styles.col}>
								<label htmlFor="requestorFirst">First name:</label>
								<input
									type="name"
									className={styles.input25}
									name="requestorFirst"
									id="requestorFirst"
									value={requestorFirst}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
							<div className={styles.col}>
								<label htmlFor="requestorLast">Last Name:</label>
								<input
									type="name"
									className={styles.input25}
									name="requestorLast"
									id="requestorLast"
									value={requestorLast}
									onChange={e => this.handleChange(e)}
									required
								/>
							</div>
						</div>
						<p className={styles.textDanger}>
							**Please note that payment must be
							presented at time of service**
						</p>
						<p className={styles.textDanger}>
							**Please also note that we <b>DO NOT</b> bill through
							escrow**
						</p>
						<button className={styles.submit} disabled={!certifiedTrue} onClick={evt => this.handleSubmit(evt)} type="submit">Submit Form</button>
					</form>
				</main>
			</>
			)
		}else {
			return(
				<>
					<Head>
						<meta
							name="keywords"
							content="Real Estate, Inspection, Septic inspection, Sacramento, Lodi, Stockton, San Joaquin"
						/>
						<meta
							name="description"
							content="Real Estate Septic System Inspection form"
						/>
						<title>G&amp;C Septic Inspection</title>

						{/* <!-- Social Media posting --> */}
						<meta
							property="og:title"
							content="Septic System Inspection Form"
						/>
						<meta
							property="og:description"
							content="If you are buying or selling a home, a septic inspection will tell you how the home's septic system is performing"
						/>
						<meta
							property="og:url"
							content="https://gandcseptic.com/inspection"
						/>
						<meta
							property="og:image"
							content="https://gandcseptic.com/images/pumping2.webp"
						/>
					</Head>
					<main className="container">
						<h1 className="text-center jumbotron">Septic Evaluation Request Form</h1>
						<h2 className="text-center jumbotron">Thank you we will get back to you soon!</h2>
					</main>
				</>
			)
		}
		;	
	}
	
}
