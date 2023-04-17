import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'


function Home()
{
    return(
        <div>
            
            <h1 className="wodd"></h1>
            
            <h1 className="wodd">Order food online in your city</h1>
            <h2  className="wodd1">Join our food online delivery programme as chef </h2>
            <h3 className="wodd2">Always wanted to start a restaurant of your own</h3>
            <h3 className="wodd2">but could not? Join our delivery programme in </h3>
            <h3 className="wodd2">three easy steps and earn while you pursue your</h3>
            <h3 className="wodd2"> passion for cooking from the comfort of your home.</h3>
            <h3 className="wodd2">  We manage the rest! It is so easy you will be surprised! </h3>
            <Button className="wodd2"><Link to="/adduser" >Register for self onboard</Link></Button>

            <h2 className="wodd1">List of Restaurant</h2>
            <Button className="wodd2"><Link to="/userdata" >Choose your restaurant and order your food</Link></Button>
            
        </div>
    );
}

export default Home;