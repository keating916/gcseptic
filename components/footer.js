export default function Footer() {
    return (
        <div className="row">
            <div className="text-center col-md-5 ">
                <p>Copyright &copy; 2020 &middot; All Rights Reserved &middot; G&amp;C Septic Services</p>
            </div>
            <div className="row col-md-2 text-center mx-auto">
                <div  className="mr-3 ml-5 social-links">
                    <a href="https://goo.gl/maps/YCCeGN7uhPD3pcgm6" target="_blank"><img src="/images/gmaps.jpg"/></a>
                </div>
                <div  className="mr-3 social-links">
                    <a href="https://www.yelp.com/biz/g-and-c-septic-tank-service-wilton" target="_blank"><img src="/images/yelp.png"/></a>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/pages/category/Sewer-Service/G-C-Septic-353220071454498/" target="_blank"><img src="../images/facebook.png" /></a>
                </div>
            </div>
            <div className="text-center row col-md-2 mx-auto">
                <a className="mr-3 ml-5 social-links" href="/" target="_same">Home</a>
                <a className="mr-3 social-links" href="/apply-now" target="_same">Careers</a>
                <a className="social-links" href="/sitemap.xml" target="_same">Sitemap</a>
            </div>
        </div>
    )
}