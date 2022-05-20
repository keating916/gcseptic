import Head from "next/head";

export default function Commercial() {
	return (
		<>
			<Head>
				<meta
					name="keywords"
					content="Restaurant pumping, RV pumping service, Commercial pumping, grease pumping, Sacramento, Stockton, Lodi, San Joaquin"
				/>
				<meta
					name="description"
					content="Commercial Septic and grease trap pumping for Sacramento and San Joaquin Counties"
				/>
				<title>G&amp;C Commercial Septic Services</title>

				{/* <!-- Social Media posting --> */}
				<meta
					property="og:title"
					content="G&C Septic Commercial services"
				/>
				<meta
					property="og:description"
					content="G&C can take care of your business needs"
				/>
				<meta
					property="og:url"
					content="https://gandcseptic.com/commercial"
				/>
				<meta
					property="og:image"
					content="https://gandcseptic.com/images/grapes.jpg"
				/>
			</Head>
			<main className="w95">
				<h1 className="text-center jumbotron">Commercial Pumping Services</h1>
				<div className="container text-center">
					<h3>
						Commercial Septic Pumping Services for Sacramento and
						San Joaquin counties, including the cities of Lodi, Elk
						Grove &amp; Stockton:
					</h3>
					<div>
						<p>
							Commercial septic systems are under more stress than
							residential systems, and therefore need service more
							often. If you own a restaurant, bar, winery, or
							commercial kitchen this can mean getting your grease
							trap or interceptor system pumped weekly or monthly.
							If you own housing facility like an RV Park or even
							a camp ground, we can keep your guests happy, and
							the pipes running smoothly. Our services include:
						</p>

						<div className="servicesListContainer">
							<div className="serviceListColumn">
								<ul className="serviceList">
									<li>Grease Trap Pumping</li>
									<li>System testing</li>
									<li>Restaurant Grease Pumping</li>
								</ul>
							</div >
							<div className="serviceListColumn">
								<ul className="serviceList">
									<li>RV Park Septic Pumping</li>
									<li>Maintenance and Repair services</li>
									<li>Electronic tank location</li>
								</ul>
							</div>
						</div>
						<p>
							Your business could become the talk of the
							neighborhood! Just be sure that it isn&apos;t for the
							wrong reason! Call us before you have a smelly
							problem on your hands at{" "}
							<a href="tel:9163661111">916-366-1111</a>, or
							fill out the form below!
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
