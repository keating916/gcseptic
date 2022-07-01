import Head from "next/head";

import Carousel from "../components/carousel";
import carouselPhotos from "../components/carouselPhotos";
import HomeCard from "../components/homeCard";

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="keywords"
					content="Stockton, Lodi, Sacramento, Septic Pumping, Septic Services, San Joaquin"
				/>
				<meta
					name="description"
					content="G&amp;C Septic Services, serving Sacramento and San Joaquin counties"
				/>
				<title>G&amp;C Septic Services</title>

				<meta property="og:title" content="G&amp;C Septic Services" />
				<meta
					property="og:description"
					content="G&amp;C Septic Services, serving Sacramento and San Joaquin counties for more than 30 years"
				/>
				<meta property="og:url" content="https://gandcseptic.com" />
				<meta
					property="og:image"
					content="https://gandcseptic.com/images/GC-Septic-Logo.png"
				/>
			</Head>
			<main>
				<div className="text-center jumbotron ">
					<h1>G&amp;C Septic Services</h1>
					<Carousel photos={carouselPhotos} />
				</div>
				<div className="container">
					<div className="row text-center"></div>
					<h3 className="text-center w95">
						G &amp; C Septic Tank Service has been in business for
						over 50 years. Serving Sacramento and San Joaquin
						Counties, we are your trusted Septic Tank service
						provider.
					</h3>
					<h1 className="text-center">
						<span className="label label-default center-block">
							Services
						</span>
					</h1>
					<div className="card-row">
						<HomeCard
							target="/residential"
							image="images/pumping2.webp"
							title="Home Septic Pumping"
							aText="Septic Tank Pumping"
							cText="Keeping your home system running
										correctly is our top priority. Call us
										before you have a smelly mess in your
										yard!"
						/>
						<HomeCard
							target="/commercial"
							image="images/commercial.webp"
							title="Commercial Services"
							aText="Man hooking up pumping line to truck"
							cText="Keep your business from being the talk
										of the neighborhood in a bad way! Call
										us today to schedule your regular
										service."
						/>
						<HomeCard
							target="/construction"
							image="images/backhoe.webp"
							title="Construction Services"
							aText="Digging with a backhoe"
							cText="Whether you need a new system installed
							or just a few repairs. With over 50
							years combined experience, we can handle
							it!"
						/>
					</div>
				</div>
			</main>
		</>
	);
}
