import React from "react";
import { useSelector } from "react-redux";
import TopNavigation from "./TopNavigation";

function Dashboard() {

  let abc = async ()=>{
    let requestOptions = {
      method:"DELETE"
    }

    let url = `http://localhost:9876/deleteProfile?email=${storeObj.loginDetails.email}`
    let jsonData = await fetch(url,requestOptions);
    let jsoData = await jsonData.json();
    alert(jsoData.msg);
  }

  let storeObj = useSelector((store) => {
    console.log(store);
    return store;
  });
  return (
    <div>
      <TopNavigation></TopNavigation>
      <h1>Dashboard</h1>
      <div>
      <button type="button" onClick={()=>{
        abc();
      }}>Delete Account</button>
      </div>
      <h1>
        {storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}
      </h1>
      <img
        src={`http://localhost:9876/${storeObj.loginDetails.profilePic}`}
        className="img1"
      ></img>

    </div>
  );
}

export default Dashboard;
