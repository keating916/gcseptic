import Head from "next/head";
import { useState } from "react";

import faqs from "../components/faqs";

import styles from "../styles/faq.module.css";

export default function Faq() {

	const [expanded, setExpanded] = useState(0);

	const handleClick = (evt) => {
		if(evt.target.parentElement.nodeName == "BUTTON") {
			if(expanded == evt.target.parentElement.name) {
				setExpanded(null);
			}else {
				setExpanded(evt.target.parentElement.name)
			}
		}else {
			if(expanded == evt.target.name) {
				setExpanded(null);
			}else {
				setExpanded(evt.target.name); 
			}
			
		}
	}

	return (
		<main>
			<Head>
				<meta keywords="septic faq, faq, septic, Septic Frequently asked questions" />
				<meta description="Frequently asked questions" />
				<title>G&amp;C FAQ</title>
			</Head>
			<h1 className="text-center jumbotron">
				G&amp;C Frequently Asked Questions
			</h1>
			<div className="container">
				<div id="accordion">
					{faqs.map((faq, index) => {
						const answer = faq.a;
						return (
							<div
								className={`${styles.accordionItem} ${
									expanded == index ? styles.shown : ""
								}`}
								key={index}
							>
								<button
									className={styles.question}
									data-toggle="collapse"
									data-target={`#collapse${index}`}
									aria-expanded="true"
									aria-controls={`collapse${index}`}
									name={index}
									onClick={evt => handleClick(evt)}
								>
									<h3>{faq.q}</h3>
									<h3 className={`${styles.symbol} ${expanded == index ? styles.changed : ""}`}>&#9660;</h3>
								</button>
								<div
									id={`collapse${index}`}
									className={styles.question}
									aria-labelledby={`q${index}`}
									data-parent="#accordionItem"
								>
									<div>
										<p className={styles.answer}
											dangerouslySetInnerHTML={{
												__html: answer
											}}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
