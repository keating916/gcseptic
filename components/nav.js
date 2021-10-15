export default function Nav() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{height: '60px'}}></nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a href="/"><img src="/images/logo.jpg" alt="company Logo" /></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about-us">About Us&nbsp;</a>
                    </li>
                    <li class="nav-item dropdown" id="listParent">
                        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Septic Services</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="navDropList" style={{marginTop: 0}}>
                            <p> 
                                <a class="dropdown-item" href="/residential-pumping">Residential Pumping</a>
                                <a class="dropdown-item" href="/commercial-pumping">Commercial Pumping</a>
                                <a class="dropdown-item" href="/faq">Frequently Asked Questions</a>
                                <a class="dropdown-item" href="inspection">Real Estate Inspection Form</a>
                            </p>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="construction">Construction Services</a>
                    </li>
                    <li class="nav-item dropdown" id="listParent1">
                        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact Us</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown1" id="navDropList1" style={{marginTop: 0}}>
                            <a class="dropdown-item" href="/contact">Address and Phone</a>
                            <a class="dropdown-item" href="/apply-now">Careers</a>
                        </div>
                    </li>
                </ul>
            </div>
            <h3 class="text-muted">Call us: <a href="tel:9163661111" class="text-muted">916-366-1111</a></h3>
        </nav>
        </>
    )
}