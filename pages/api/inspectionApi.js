import axios from "axios";

export default async function inspectionAPI(req, res) {

	if(req.method != "POST" || req.headers.origin != 'https://gandcseptic.com') { // 'http://localhost:3000'
		console.log(req.method)
		console.log(req.headers.origin)
        res.status(400)
        res.send("error")
    }else {    
	//uses axios to send contact form information to email client without compromising access token since it is from the server
	const user_ID = "6tsHDpeIkl5xVW3md";
	const serviceID = "GcSeptic";
	const templateID = "GC_inspection";
	console.log(req.body);
	const template_params = req.body.params;
	const access_token = "UXXrf7E_yy_WXvDaTCqSf";
	var data = {
		service_id: serviceID,
		template_id: templateID,
		user_id: user_ID,
		accessToken: access_token,
		template_params: template_params
	};

	axios
		.post("https://api.emailjs.com/api/v1.0/email/send", data)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => {
			console.log(error.response.data);
			res.status(500).send("Error");
		}); 
	}
}
