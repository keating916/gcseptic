import Head from "next/head";
import Image from "next/image";

export default function About() {
    return(
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="About us, staff, stockton, sacramento, san joaquin" />
                <meta name="description" content="G&C Leadership Team" />
                <title>G&amp;C Staff</title>
                
                {/* <!-- Social Media posting --> */}
                <meta property="og:title" content="The G&C Septic Team" />
                <meta property="og:description" content="Learn more about our amazing team" />
                <meta property="og:url" content="https://gandcseptic.com/about-us" />
                <meta property="og:image" content="https://gandcseptic.com/images/team-square.jpg" />
            </Head>
            <main>
                <div className="text-center">
                    <h1>The G&amp;C Leadership Team</h1>
                </div>
                <div className="container">
                    <div className="card-row">
                        <div className="card">
                            <img className="card-img-top" src="images/IMG_8291.jpg" alt="Danielle - Business Administrator" />
                            <div className="card-body">
                                <h4 className="card-title">Danielle - Business Administrator</h4>
                                <p className="card-text">Danielle has lived in the Sacramento region for the last 20 years. She is a key member of the G&amp;C Septic team working as our Business Administrator. Danielle brings an extensive managerial background in sales, marketing and client relations. When she is not in the office, she is likely exploring Northern California wine trails, working as a board member for a non-profit or crafting. 
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="images/dan.jpg" alt="Dan - Engineer" />
                            <div className="card-body">
                                <h4 className="card-title">Dan - Engineer</h4>
                                <p className="card-text">Dan has been involved in septic construction for to many years to count both as a civil engineer and engineering contractor.  Dan has lived in Wilton for 25 years on 5 acres with 10 children. That definitely gives him a good idea what living with septic systems and a family is all about. He loves helping people with their septic issues, and has the knowledge and experience to do an amazing job.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-team">
                        <h3 className="text-center">Our Service Team will take excellent care of you!</h3>
                        <img className="serviceimg" src="images/pumping-team.webp" alt="Our service team" />
                    </div>
                    
                </div>
            </main>
        </>
    )
}