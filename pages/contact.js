import Head from 'next/head'

export default function Contact() {
    return(
        <>
            <Head>
				<meta keywords="San Joaquin, Sacramento, Elk Grove, Lodi, Galt, Stockton" />
				<meta description="G&C Contact Information" />
				<title>G&amp;C Contact Us</title>
            </Head>
            <main className="w-80">
                <h1 className="text-center jumbotron">Contact us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Office Address:</h3>
                            <div className="row">
                                <a className="ml-3 mr-1 row" rel="noreferrer" href="https://goo.gl/maps/YCCeGN7uhPD3pcgm6" target="_blank">
                                    <img src="images/gmaps.jpg" alt="google maps symbol" style={{height: "5vh"}} />
                                    <p>11082 Jeff Brian Ln<br />Wilton, CA 95693</p>
                                </a>
                            </div>
                            <h3>Mailing Address</h3>
                            <div className="row">
                                <p className="ml-3 mr-1">PO Box 569<br />Wilton, CA 95693</p>
                            </div>
                            <h3>Phone Numbers:</h3>
                            <p>Sacramento: <a href="tel:9163661111"><img src="images/phone.svg" alt="cell phone symbol" />916-366-1111</a></p>
                            <p>Lodi: <a href="tel:9163683988"><img src="images/phone.svg" alt="cell phone symbol" />209-368-3988</a></p>
                            <p>Galt: <a href="tel:9167450757"><img src="images/phone.svg" alt="cell phone symbol" />209-745-0757</a></p>
                        </div>
                    <div className="col-md-6">
                        <h3>Business Hours:</h3>
                        <ul>
                            <li>Monday 7:00AM - 5:00PM</li>
                            <li>Tuesday 7:00AM - 5:00PM</li>
                            <li>Wednesday 7:00AM - 5:00PM</li>
                            <li>Thursday 7:00AM - 5:00PM</li>
                            <li>Friday 7:00AM - 5:00PM</li>
                            <li>Saturday 8:00AM - 1:00PM</li>
                            <li>Sunday 8:00AM - 1:00PM</li>
                        </ul>
                        
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <h4>You can also use the form below, and we will get back to you as soon as possible!</h4>
                    </div>
                    
                    <hr />
                </div>
                <hr />
            </main>
        </>
    )
}