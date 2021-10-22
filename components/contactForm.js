export default function ContactForm() {
    return(
        <div className="container w-80">
            <form method="post" action="submit.php">
                <h3 className="text-center">Quick Contact</h3>
                <input className="form-control" type="text" name="fname" placeholder="First Name" required />
                <input className="form-control" type="text" name="lname" placeholder="Last Name" required />
                <input className="form-control" type="email" name="contactEmail" placeholder="Email: you@yourdomain.com" required />
                <input className="form-control" type="phone" name="contactPhone" placeholder="Phone: 111-111-1111" required />
                <input className="form-control" type="text" name="address" placeholder="Service Address" required />
                <div style={{border:"1px solid lightgrey", borderRadius: "5px", paddingLeft: "1%"}}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Septic Pumping" name="serviceRadio" id="pumping" checked />
                        <label className="form-check-label col-form-label" htmlFor="pumping">Pumping Service</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="System backing up" name="serviceRadio" id="back-up" />
                        <label className="form-check-label col-form-label" htmlFor="back-up">System Backing Up</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Construction" name="serviceRadio" id="construction" />
                        <label className="form-check-label col-form-label" htmlFor="construction">Construction Services</label>
                    </div>
                </div>
                <textarea name="comments" className="form-control" placeholder="Comments"></textarea>
                <div id="html_element"></div>
                <input className="form-control" type="submit" id="formSubmitButton" disabled />
            </form>
        </div>
    )
}