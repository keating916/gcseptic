import axios from 'axios';

export default async function logRoutes(route) {
    
    const timeStamp = new Date();
    let r = route.route
    axios.post("/api/logAPI", {r, timeStamp})
    .then(res => {
return    })
}