import Head from 'next/head'

import styles from '../styles/contact.module.css'

export default function Contact(props) {
    return(
        <>
            <Head>
				<meta keywords="San Joaquin, Sacramento, Elk Grove, Lodi, Galt, Stockton" />
				<meta description="G&C Contact Information" />
				<title>G&amp;C Contact Us</title>
            </Head>
            <main className="text-center">
                <h1 className='jumbotron'>Contact us</h1>
                <div className={styles.container}>
                    <div className={styles.contactDiv}>
                        <h3 className={styles.label}>Office Address:</h3>
                        <a rel="noreferrer" href="https://goo.gl/maps/YCCeGN7uhPD3pcgm6" target="_blank" className={styles.addressDiv}>
                            <img src="images/gmaps.jpg" alt="google maps symbol" className={styles.twoLineLogo} />
                            <div className={styles.address}>
                                <p>11082 Jeff Brian Ln</p>
                                <p>Wilton, CA 95693</p>
                            </div>
                            
                        </a>
                    </div>
                    <div className={styles.contactDiv}>
                        <h3 className={styles.label}>Mailing Address:</h3>
                        <div className={styles.addressDiv}>
                            <img src="images/mailbox.svg" alt="mail box" className={styles.twoLineLogo}/> 
                            <div className={styles.address}>
                                <p>PO Box 569</p>
                                <p>Wilton, CA 95693</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.contactDiv}>
                        <h3 className={styles.label}>Phone Numbers:</h3>
                        <div  className={styles.phoneDiv}> 
                            <p>Sacramento: <a href="tel:9163661111"><img src="images/phone.svg" alt="cell phone symbol" />916-366-1111</a></p>
                            <p>Lodi: <a href="tel:9163683988"><img src="images/phone.svg" alt="cell phone symbol" />209-368-3988</a></p>
                            <p>Galt: <a href="tel:9167450757"><img src="images/phone.svg" alt="cell phone symbol" />209-745-0757</a></p>
                        </div>
                    </div>
                    <div className={styles.contactDiv}>
                        <h3 className={styles.label}>Business Hours:</h3>
                        <ul className={styles.hourslist}>
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
            </main>
        </>
    )
}