import Head from "next/head";
import Image from "next/image";
import danielle from '../public/images/IMG_8291.jpg'
import dan from '../public/images/dan.jpg'
import team from '../public/images/pumping-team.webp'

export default function About() {
    return(
        <>
            <Head>
                <meta charset="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
                <div className="text-center jumbotron">
                    <h1>The G&amp;C Leadership Team</h1>
                </div>
                <div className="container">
                    <div className="card-row">
                        <div className="card">
                            <Image className="card-img-top" src={danielle} alt="Danielle - Business Administrator" width={264} height={348} placeholder='blur' priority />
                            <div className="card-body">
                                <h4 className="card-title">Danielle - Business Administrator</h4>
                                <p className="card-text">Danielle has lived in the Sacramento region for the last 20 years. She is a key member of the G&amp;C Septic team working as our Business Administrator. Danielle brings an extensive managerial background in sales, marketing and client relations. When she is not in the office, she is likely exploring Northern California wine trails, working as a board member for a non-profit or crafting. 
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <Image className="card-img-top" src={dan} alt="Dan - Engineer" width={264} height={348} placeholder='blur' priority />
                            <div className="card-body">
                                <h4 className="card-title">Dan - Engineer</h4>
                                <p className="card-text">Dan has been involved in septic construction for to many years to count both as a civil engineer and engineering contractor.  Dan has lived in Wilton for 25 years on 5 acres with 10 children. That definitely gives him a good idea what living with septic systems and a family is all about. He loves helping people with their septic issues, and has the knowledge and experience to do an amazing job.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-team">
                        <h3 className="text-center">Our Service Team will take excellent care of you!</h3>
                        <Image className="serviceimg" src={team} alt="Our service team" width={762} height={260} placeholder="blur" />
                    </div>
                    
                </div>
            </main>
        </>
    )
}