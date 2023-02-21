import axios from "axios";
import jwtDecode from 'jwt-decode';

var token_ = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiI1YzE4YTFlMC1iODJhLTQ2YjUtYWE2Ny0yYmIxM2I3ZWNhY2EiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzY5ODMwNDgsIm5iZiI6MTY3Njk4MzA0OCwiZXhwIjoxNjc2OTg2OTQ4LCJhaW8iOiJBVFFBeS84VEFBQUFQWEZoOTdxTmhwNWE1TXJEWHAxWW1Nc2FyemM0M1hCaHRUZXM5ZGF3ejJvQkxMamIxR2l2M1Q0VHRLUE1KSEJsIiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6IjlkMTgzNDRmLTg5ZWMtNGFkZC1iY2Q4LTIzMWFmMjNkYjU0NiIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnVDaEdGd3F1TFZHcW1jcnNUdC15c29NQUJ3LiIsInN1YiI6ImRBV0U5d2JPTEk3YWRrSzVHc1JsX0w2UUYyUHhhdWRuUXVPZVNEeEMzMWciLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiJUeGI0ellGTlIwdXJfZWJ4ZTlnNEFBIiwidmVyIjoiMi4wIn0.LsNVe1UurF3fYVCTbDuUDypg1iEfT90Hbcp6tePpXuI_U6qwiGViGy1GwjTIaBc8Ks1cRcjtFj5nP-fQm9lpLh0CndpaJj7RVdJ_0Fz1f0LcVkoUlLsVpIjCWyL9tGeO2rmdpGz1wy9agZ9Kan4QlELpYKn0VOYKYCYT867nAny8WJltqa-TqmFeTQZsuyaxvyCzIISJeLOCsVYuUNexxLA7Y1Rz_hoYH4Um6K7hS6CmIOlAWM6J2tFgM4J4esnqpj5U8vtooSntcCVfTwt12rXblzta6srVqK9rN3Ude4yCpiBYE50h6GXdbAa3WREiG-0uFNjXxZNmQPt6MoE-cA"
var _token = `Bearer ${token_}`
export const token = `Bearer ${token_}`
export const apiUrl = "https://bnlwe-gs-q-57322-apimgt-01.azure-api.net"
// export const apiUrl = "https://bnlwe-gs-d-57321-apimgt.azure-api.net"


// let toeknDecode = jwtDecode(token_);
//  console.log("toeknDecode.exp")
//  console.log(toeknDecode.exp)

  const generateToken= async()=> {
    axios.get('http://localhost:5005/generate_token')
    .then((res)=>{
        console.log("--get token res-");
        console.log(res);
        let toeknDecode = jwtDecode(res.data.token);
          
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("tokenExp", toeknDecode.exp);

        return res.token;

    }).catch((err)=>{

        console.log("--get token err-");
        console.log(err);
    });

}

 export const getToken = async()=>{
  return _token
     try{
      let localToken    =  localStorage.getItem("token");
      let localTokenExp =  Number(localStorage.getItem("tokenExp"));
      let newExpTime    =  Number(Math.floor(new Date().getTime()/1000));
      
      // console.log("-----")
      // console.log(localTokenExp)
      // console.log(newExpTime)
 
      if(!localToken){
        console.log("Token not get")
        localToken =  await generateToken();
        return localToken
        
      }else{
        if(newExpTime > localTokenExp-60){
          console.log("Token expire")
          localToken =  await generateToken();
          return localToken
        }
        else{
          console.log("Token get but not expire")
          return localToken

        }
      }
      

      }catch{

      }
 }