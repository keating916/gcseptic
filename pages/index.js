import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import carouselPhotos from '../components/carouselPhotos'


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
				<div className="text-center">
					<h1 className="display-4">G&amp;C Septic Services</h1>
					<p className="lead">
						G &amp; C Septic Tank Service has been in business for
						over 50 years. Serving Sacramento and San Joaquin
						Counties, we are your trusted Septic Tank service
						provider.
					</p>
					<Carousel photos={carouselPhotos} />

				</div>
				<div className="container">
					<div className="row text-center"></div>
					<h1 className="text-center">
						<span className="label label-default center-block">
							Services
						</span>
					</h1>
					<div className="card-row">
							<div className="card link-card">
								<a href="/residential">
									<img
										className="card-img-top"
										src="images/pumping2.webp"
										alt="Septic Tank Pumping"
									/>
								</a>
								<div className="card-body">
									<h4 className="card-title">
										Home Septic Pumping
									</h4>
									<p className="card-text">
										Keeping your home system running
										correctly is our top priority. Call us
										before you have a smelly mess in your
										yard!
									</p>
									<a
										href="/residential"
										className="btn btn-primary"
									>
										Find out more
									</a>
								</div>
						</div>
							<div className="card link-card">
								<a href="/commercial">
									<img
										className="card-img-top"
										src="images/commercial.webp"
										alt="Man hooking up pumping line to truck"
									/>
								</a>
								<div className="card-body">
									<h4 className="card-title">
										Commercial Services
									</h4>
									<p className="card-text">
										Keep your business from being the talk
										of the neighborhood in a bad way! Call
										us today to schedule your regular
										service.
									</p>

									<a
										href="/commercial"
										className="card-button"
									>
										Find out more
									</a>
								</div>
							</div>
							<div className="card link-card">
								<a href="/construction">
									<img
										className="card-img-top"
										src="images/backhoe.webp"
										alt="Digging with a backhoe"
									/>
								</a>
								<div className="card-body">
									<h4 className="card-title">
										Construction Services
									</h4>
									<p className="card-text">
										Whether you need a new system installed
										or just a few repairs. With over 50
										years combined experience, we can handle
										it!
									</p>
									<a
										href="/construction"
										className="btn btn-primary"
									>
										Find out more
									</a>
								</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
