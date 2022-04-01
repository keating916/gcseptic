import Head from 'next/head'

export default function Residential() {
    return(
		<>
		<Head>
		<meta name="keywords" content="Residential Septic pumping, septic pumping, residential, pumping, Sacramento, San Joaquin, Stockton, Modesto, Lodi"/>
		<meta name="description" content="Residential Septic pumping services for Sacramento and San Joaquin Counties"/>
		<title>G&amp;C Residential Septic Services</title>
	  
		{/* <!-- Social Media posting --> */}
		<meta property="og:title" content="G&C Residentail pumping services" />
		<meta property="og:description" content="We offer full service septic pumping for your home" />
		<meta property="og:url" content="https://gandcseptic.com/residential-pumping" />
		<meta property="og:image" content="https://gandcseptic.com/images/truck.jpg" />

		</Head>
        <main>
            <h1 className="text-center jumbotron">Residential Septic Pumping</h1>
			<div className="container text-center">
				<h3>Whether you live in Galt, Stockton, or Sacramento, these services will have you covered:</h3>
			  	<div className="servicesListContainer">
					<div className="serviceListColumn">
						<ul className="serviceList">
							<li>Electronic Tank location</li>
							<li>Septic and Holding Tank Pumping</li>
							<li>Riser Installation</li>
							<li>Electric line snaking</li>
						</ul>
						</div>
					<div className="serviceListColumn">
						<ul className="serviceList">
							<li>Tank access uncovering</li>
							<li>Tank Repair</li>
							<li>Septic Line Replacement</li>
						</ul>
					</div>
				</div>
			  	<article><p>
				  We can locate, dig, and pump your septic tank. If the line needs snaking, our trucks are equipped with snakes and we can take care of that problem at the same time. Our technicians will take the time to completely remove all seepage in the tank. The most important step to achieving trouble-free septic system operation is to remove the solids from the tank <strong>BEFORE</strong> they start to wash out into the absorption field and <strong>BEFORE</strong> the system starts showing signs of failure.</p>
				  <h5>Getting your septic tank serviced and pumped regularly is vital to the health of your system.</h5>
				  <p>Remember, once the leach field is clogged, cleaning the tank will do little good – you will need a new leach field. The easiest way to care for your system is to consult a professional. Servicemen are experienced in locating, uncovering, and maintaining Sacramento area septic systems. How often your tank needs pumping will depend on the size of the tank, the number of people in the household, and the kinds of appliances you use. According to the Environmental Protection Agency(EPA), tanks should be cleaned every three to four years.</p> 
				  </article>
				<img src="/images/tank.webp" alt="Septic Tank Diagram" className="img-fluid" />
			</div>
       </main>
	   </>
	
    )
}