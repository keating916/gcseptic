import Head from "next/head";

export default function Construction() {
	return (
		<>
			<Head>
				<meta
					name="keywords"
					content="Construction, Septic installation, Construction services, Septic Tank"
				/>
				<meta
					name="description"
					content="G&C Construction services, serving Lodi, Stockton, Sacramento, and Elk Grove"
				/>
				<title>G&amp;C Construction Services</title>

				{/* <!-- Social Media posting --> */}
				<meta
					property="og:title"
					content="G&C Septic Construction Services"
				/>
				<meta
					property="og:description"
					content="G&C Septic Services, Installation of new septic tanks, leach lines, and dry wells"
				/>
				<meta
					property="og:url"
					content="https://gandcseptic.com/construction"
				/>
				<meta
					property="og:image"
					content="https://gandcseptic.com/images/dig-hole.webp"
				/>
			</Head>
			<main className="w-80">
				<h1 className="text-center jumbotron">
					Construction and Repair Services
				</h1>
				<div className="container text-center">
					<article>
						<h3>
							From Sacramento to Stockton, we have your
							construction and septic installation needs covered
						</h3>
						<p>
							Big septic issues require big equipment! The good
							news is that we have the equipment, knowledge, and
							experience to get the job done correctly the first
							time. Whether you are in Sacramento county, San
							Joaquin county, Sacramento, Lodi, Elk Grove, or
							Stockton, we can help. Our construction services
							include:
						</p>
						<div className="row text-left">
							<div className="col-md-2"></div>
							<ul className="col-md-4 ">
								<li>New Septic Tank installation</li>
								<li>New Leach system installation</li>
								<li>New Dry Well installation</li>
								<li>Complete System installation</li>
							</ul>
							<ul className="col-md-6">
								<li>Septic tank repair</li>
								<li>Removal of tree roots from septic tanks</li>
								<li>Repair septic lines</li>
								<li>Leach line repair</li>
							</ul>
						</div>
						<p>
							We also have easy payment options through Hearth
							Financing! Click the banner below to see if you
							qualify for one of our great rates
						</p>
						<a
							href="https://app.gethearth.com/partners/lodgepool-dba-septic-services-group?utm_campaign=21068&utm_content=blue&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="https://app.gethearth.com/contractor_images/lodgepool-dba-septic-services-group/banner.jpg?color=blue&size_id=700x110"
								alt="Hearth 700x110"
								style={{ height: "110px", width: "700px" }}
							/>
						</a>
						<br />
						<p>
							Give us a call today to schedule an inspection and
							to get a quote!{" "}
							<a href="tel:9163661111">916-366-1111</a>. You can
							also fill out the form below, and we will contact
							you as soon as possible!
						</p>
						<hr />
						<div className="row">
							<img
								src="images/startdrilling.webp"
								alt="Starting to drill a hole"
								className="col-md-4"
							/>
							<img
								src="images/dig-hole.webp"
								alt="machines at job site"
								className="col-md-4"
							/>
							<img
								src="images/drilling.webp"
								alt="Drilling a dry well"
								className="col-md-4"
							/>
						</div>
						<br />
						<div className="row">
							<img
								src="images/hole.webp"
								alt="Dry well finished being dug"
								className="col-md-4"
							/>
							<img
								src="images/dry-well.webp"
								alt="filling in a dry well"
								className="col-md-4"
							/>
							<img
								src="/images/tank-crane.webp"
								alt="Using a backhoe to install a new Septic Tank"
								className="img-fluid col-md-4"
							/>
						</div>
					</article>
					<hr />
					<hr />
				</div>
			</main>
		</>
	);
}
