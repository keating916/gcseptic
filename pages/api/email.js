import axios from "axios";

export default async function email(req, res) {
	//uses axios to send contact form information to email client without compromising access token since it is from the server
	/* const user_ID = "user_mX30CEcEYTVb7EG39rmYu";
	const serviceID = "RLS Contact Form";
	const templateID = "RLS";
	const template_params = req.body.params;
	const access_token = "216b45fad4abda169e2d724843d2ec58";
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
		}); */
    console.log(`Method: ${req.method}      ${req.method === 'POST'} `  )
    console.log(`Origin:  ${req.headers.origin}          ${req.headers.origin === 'http://localhost:3000'}`)
    if(req.method != "POST" || req.headers.origin != 'http://localhost:3000') {   /* || req.headers.origin !== 'https://gandcseptic.com'*/
        res.status(400)
        res.send("error")
    }else {
        res.send(200);
    }
}


//TODO Remove Localhost when in production