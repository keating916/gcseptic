import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<>
	<Head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="Stockton, Lodi, Sacramento, Septic Pumping, Septic Services, San Joaquin" />
		<meta name="description" content="G&C Septic Services, serving Sacramento and San Joaquin counties" />
		<title>G&amp;C Septic Services</title>

		<meta property="og:title" content="G&C Septic Services" />
		<meta property="og:description" content="G&C Septic Services, serving Sacramento and San Joaquin counties for more than 30 years" />
		<meta property="og:url" content="https://gandcseptic.com" />
		<meta property="og:image" content="https://gandcseptic.com/images/GC-Septic-Logo.png" />

  </Head>
  <body className="w-80">
    <div className="jumbotron jumbotron-fluid text-center w-100">
       <h1 className="display-4">G&amp;C Septic Services</h1>
       <p className="lead">G &amp; C Septic Tank Service has been in business for over 50 years. Serving Sacramento and San Joaquin Counties, we are your trusted Septic Tank service provider.</p>
		<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
		  <div className="carousel-inner">
			<figure className="carousel-item active">
			  	<img className="d-block w-100" src="./images/header.webp" alt="Two pumping trucks" />
				<figcaption>We get to you quickly in an emergency!</figcaption>
			</figure>
			<figure className="carousel-item">
			  <img className="d-block w-100" src="./images/time-for-next-pumping.webp" alt="Is it time for your next septic pumping?" />
				<figcaption>Regular pumping saves you trouble later!</figcaption>
			</figure>
			<figure className="carousel-item">
			  	<img className="d-block w-100" src="./images/team.webp" alt="Pumping truck with tank on trailer" />
				<figcaption>Our team will take care of you, from start to finish!</figcaption>
			</figure>
		  </div>
		</div>
	</div>
    <div className="container">
        <div className="row text-center"></div>
		<h1 className="text-center"><span className="label label-default center-block">Services</span></h1>
        <div className="row">
          <div className="col-md-4">
             <div className="card">
                <a href="residential-pumping.php"><img className="card-img-top" src="images/pumping2.webp" alt="Septic Tank Pumping" /></a>
                <div className="card-body">
                   <h4 className="card-title">Home Septic Pumping</h4>
                   <p className="card-text">Keeping your home system running correctly is our top priority. Call us before you have a smelly mess in your yard!</p>
                   <br /><br />
                   <a href="residential-pumping.php" className="btn btn-primary">Find out more</a>
                </div>
             </div>
          </div>
          <div className="col-md-4">
             <div className="card">
               	<a href="commercial-pumping.php"><img className="card-img-top" src="images/commercial.webp" alt="Man hooking up pumping line to truck" /></a>
                <div className="card-body">
                   <h4 className="card-title">Commercial Services</h4>
                   <p className="card-text">Keep your business from being the talk of the neighborhood in a bad way! Call us today to schedule your regular service.</p>
                   <br /><br />
                   <a href="commercial-pumping.php" className="btn btn-primary">Find out more</a>
                </div>
             </div>
          </div>
          <div className="col-md-4">
             <div className="card">
              	<a href="construction.php"><img className="card-img-top" src="images/backhoe.webp" alt="Digging with a backhoe" /></a>
                <div className="card-body">
                   <h4 className="card-title">Construction Services</h4>
                   <p className="card-text">Whether you need a new system installed or just a few repairs. With over 50 years combined experience, we can handle it!</p>
                   <br /><br />
                   <a href="construction.php" className="btn btn-primary">Find out more</a>
                </div>
             </div>
          </div>
		</div>

  	</div>
	
  </body>
</>

  )
}
