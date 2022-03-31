import Head from "next/head";
import { useState } from "react";

import styles from "../../styles/inspection.module.css";

export default function Inspection() {
	const [popover, setPopover] = useState(false);

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
			<main class="container">
				<h1 class="text-center">Septic Evaluation Request Form</h1>
				<form method="post" action="submit.php">
					<h4>Septic inspection includes:</h4>
					<ol>
						<div class="row">
							<div class="col">
								<li>Dig out tank lids if necessary</li>
								<li>Evaluate Tank</li>
								<li>Test leaching system</li>
							</div>
							<div class="col">
								<li>Pump Tank</li>
								<li>Evaluate Tank Components</li>
								<li>Take site measurements and photos</li>
							</div>
						</div>
					</ol>
					<h5>
						Upon completion of the inspection, the report will be
						compiled. The report will include evaluation notes,
						photographs, diagrams of tanks on the site, permits that
						the county has on file as well as recommendations for
						repairs as needed.
					</h5>

					<h6>
						To request an inspection, please fill out form below
						completely.
					</h6>
					<h6>
						Alternatively, you can download a PDF form{" "}
						<a target="_blank" href="/inspection.pdf">
							HERE
						</a>{" "}
						and email it to:{" "}
						<a
							href="mailto:inspections@gandcseptic.com"
							target="_blank"
						>
							inspections@gandcseptic.com
						</a>
					</h6>
					<h5>Property Information</h5>
					<label for="requestedDate">
						Requested Date of Service:
					</label>
					<input
						type="date"
						name="requestedDate"
						id="requestedDate"
						class="form-control"
					/>
					<label for="Address">Property Address:</label>
					<input
						class="form-control"
						type="text"
						name="propertyAddress"
						id="Address"
						required
					/>
					<div class="form-row">
						<div class="col">
							<label for="city">City:</label>
							<input
								class="form-control col"
								type="text"
								name="city"
								id="city"
								required
							/>
						</div>
						<div class="col">
							<label for="zipCode">Zip Code:</label>
							<input
								class="form-control "
								type="number"
								name="zipCode"
								id="zipCode"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="propertybeds"># of Bedrooms:</label>
							<input
								class="form-control col"
								type="number"
								name="propertybeds"
								id="propertybeds"
								min="1"
								required
							/>
						</div>
						<div class="col">
							<label for="tankLids">Tank Lids</label>
							<button
								type="button"
								tabindex="0"
								data-trigger="focus"
								data-placement="bottom"
								className={styles.popoverButton}
								data-toggle="popover"
								id="lidToggle"
								data-html="true"
								onMouseEnter={() => setPopover(true)}
								onMouseLeave={() => setPopover(false)}
							>
								<img
									className={styles.popoverButton}
									id="tankInfo"
									src="/images/infoCircle.svg"
									alt="Learn More"
								/>
							</button>
							{popover && (
								<div className={styles.popover}>
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
								class="form-control "
								type="dropdown"
								name="tankLids"
								id="tankLids"
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
						<div class="col">
							<label for="lastPumped">
								Date of last pumping:
							</label>
							<input
								class="form-control"
								type="date"
								name="lastPumped"
								id="lastPumped"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="multipleSeptic">
								Is there more than one septic system on
								property:
							</label>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="Yes"
									name="multipleSeptic"
									id="multipleSepticYes"
								/>
								<label
									class="form-check-label col-form-label"
									for="multipleSepticYes"
								>
									Yes
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="No"
									name="multipleSeptic"
									id="multipleSepticNo"
									checked
								/>
								<label
									class="form-check-label col-form-label"
									for="multipleSepticNo"
								>
									No
								</label>
							</div>
						</div>
						<div class="col">
							<label for="septicDrain">
								Does all plumbing drain into septic?
							</label>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="Yes"
									name="septicDrain"
									id="plumbingYes"
									checked
								/>
								<label
									class="form-check-label col-form-label"
									for="plumbingYes"
								>
									Yes
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="No"
									name="septicDrain"
									id="plumbingNo"
								/>
								<label
									class="form-check-label col-form-label"
									for="plumbingNo"
								>
									No
								</label>
							</div>
						</div>
					</div>
					<label for="previousProblems">
						Any previous issues with system:
					</label>
					<textarea
						name="previousProblems"
						id="previousProblems"
						class="form-control"
					></textarea>

					<h5>Parties Involved</h5>
					<div class="form-row">
						<div class="col">
							<label for="paymentType">Party Paying:</label>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="seller"
									name="partyPaying"
									id="seller"
									checked
								/>
								<label
									class="form-check-label col-form-label"
									for="seller"
								>
									Seller
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="buyer"
									name="partyPaying"
									id="buyer"
								/>
								<label
									class="form-check-label col-form-label"
									for="buyer"
								>
									Buyer
								</label>
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="sellerName">Seller Name:</label>
							<input
								class="form-control"
								type="text"
								name="sellerName"
								id="sellerName"
								required
							/>
						</div>
						<div class="col">
							<label for="sellerEmail">Email</label>
							<input
								class="form-control"
								type="email"
								name="sellerEmail"
								id="sellerEmail"
								required
							/>
						</div>
						<div class="col">
							<label for="sellerPhone">Phone Number</label>
							<input
								class="form-control"
								type="tel"
								name="sellerPhone"
								id="sellerPhone"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="sellerAgentName">
								Seller Agent Name:
							</label>
							<input
								class="form-control"
								type="text"
								name="sellerAgentName"
								id="sellerAgentName"
								required
							/>
						</div>
						<div class="col">
							<label for="sellerAgentEmail">Email</label>
							<input
								class="form-control"
								type="email"
								name="sellerAgentEmail"
								id="sellerAgentEmail"
								required
							/>
						</div>
						<div class="col">
							<label for="sellerAgentPhone">Phone Number</label>
							<input
								class="form-control"
								type="tel"
								name="sellerAgentPhone"
								id="sellerAgentPhone"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="buyerName">Buyer Name:</label>
							<input
								class="form-control"
								type="text"
								name="buyerName"
								id="buyerName"
							/>
						</div>
						<div class="col">
							<label for="buyerEmail">Email</label>
							<input
								class="form-control"
								type="email"
								name="buyerEmail"
								id="buyerEmail"
							/>
						</div>
						<div class="col">
							<label for="buyerPhone">Phone Number</label>
							<input
								class="form-control"
								type="tel"
								name="buyerPhone"
								id="buyerPhone"
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="buyerAgentName">
								Seller Agent Name:
							</label>
							<input
								class="form-control"
								type="text"
								name="buyerAgentName"
								id="buyerAgentName"
							/>
						</div>
						<div class="col">
							<label for="buyerAgentEmail">Email</label>
							<input
								class="form-control"
								type="email"
								name="buyerAgentEmail"
								id="buyerAgentEmail"
							/>
						</div>
						<div class="col">
							<label for="buyerAgentPhone">Phone Number</label>
							<input
								class="form-control"
								type="tel"
								name="buyerAgentPhone"
								id="buyerAgentPhone"
							/>
						</div>
					</div>

					<h5>Payment Information</h5>
					<p class="text-danger">
						**Please note that if paying by check, it must be
						presented at time of service**
					</p>
					<p class="text-danger">
						**Please also note that we <b>DO NOT</b> bill through
						escrow**
					</p>
					<div class="form-row">
						<div class="col">
							<label for="paymentType">Payment Type:</label>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="Check"
									name="paymentType"
									id="Check"
									checked
								/>
								<label
									class="form-check-label col-form-label"
									for="Check"
								>
									Check
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									value="Credit"
									name="paymentType"
									id="Credit"
								/>
								<label
									class="form-check-label col-form-label"
									for="Credit"
								>
									Credit
								</label>
							</div>
						</div>
					</div>

					<div class="form-row">
						<div class="col">
							<label for="payerName">Name on Card:</label>
							<input
								type="text"
								class="form-control"
								name="payerName"
								id="payerName"
							/>
						</div>
						<div class="col">
							<label for="cardNumber">Card Number:</label>
							<input
								type="text"
								class="form-control"
								name="cardNumber"
								id="cardNumber"
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="Expiration">Expiration:</label>
							<input
								type="text"
								class="form-control"
								name="Expiration"
								id="Expiration"
							/>
						</div>
						<div class="col">
							<label for="CVV">CVV:</label>
							<input
								type="text"
								class="form-control"
								name="CVV"
								id="CVV"
							/>
						</div>
						<div class="col">
							<label for="cardNumber">Billing ZIP:</label>
							<input
								type="text"
								class="form-control"
								name="billingZip"
								id="billingZip"
							/>
						</div>
					</div>

					<div class="form-row">
						<div class="col">
							<label for="certifiedTrue" class="text-danger">
								I certify that the above is true and correct to
								the best of my knowledge
							</label>
						</div>
						<div class="col">
							<input
								class="form-check-input"
								type="checkbox"
								value="true"
								name="certifiedTrue"
								id="certifiedTrue"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="col">
							<label for="requestorFirst">First name:</label>
							<input
								type="name"
								class="form-control"
								name="requestorFirst"
								id="requestorFirst"
								required
							/>
						</div>
						<div class="col">
							<label for="requestorLast">Last Name:</label>
							<input
								type="name"
								class="form-control"
								name="requestorLast"
								id="requestorLast"
								required
							/>
						</div>
					</div>

					<input class="form-control" type="submit" />
				</form>
			</main>
		</>
	);
}
