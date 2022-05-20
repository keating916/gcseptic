import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//
export function middleware(request: NextRequest) {	
    let cookieFromRequest = request.cookies["visitor"];
    let response = NextResponse.next();

    //REGEX for filter
	let fav = /favicon/
    let img = /image/
    let url = request.page.name 

    if(url != undefined) {

        if (!cookieFromRequest) { //if cookie doesn't exist or is expired
        //create random visitor number for analytics
		    cookieFromRequest = `${Math.floor(Math.random() * 1000000000)}`; //sets user number
            response.cookie("visitor", cookieFromRequest, {
                path: "/",
                maxAge: 1000 * 60 * 60 * 24 * 7, //One Week
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            });
        }
        console.log(url);
        //filter out asset requests, and only log route requests with corresponding visitor cookie number
        if(!url.match(fav) && !url.match(img)) {
            let date = new Date()
            let r = {
                type: "Custom Log",
                path: url,
                visitor: cookieFromRequest,
                timeStamp: date,
            }
            console.log(r)
        }
    } 
    
	
	
	return response;
}
