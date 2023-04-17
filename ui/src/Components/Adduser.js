import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import chef1 from '../assests/images/chef1.png'

function Adduser()
{
    const [formValue, setFormValue]= useState({
    restaurant_name:'',
    contact_name: '', 
    location: '', 
    pincode: '', 
    phone_number: '',
    website: '',
    average_daily_transactions: ''
    });
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const allInputvalue= { restaurant_name: formValue.restaurant_name, contact_name:formValue.contact_name, location:formValue.location, pincode:formValue.pincode, phone_number:formValue.phone_number, website:formValue.website, average_daily_transactions:formValue.average_daily_transactions}; 

      let res= await fetch("http://127.0.0.1:8001/create/",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      let resjson= await res.json();
      if(res.status===201)
      {
        setMessage(resjson.success);
        setTimeout(()=>{
            navigate('/userdata');
        }, 2000);

      } else{
        setMessage("Some Error Occured");
      }

       //console.log(allInputvalue);
    }
    return(
        <React.Fragment>
            <div style={{color: "white"}}>
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="wodd">Welcome to Self OnBoard</h2>
                    <p className="text-success"> { message } </p>
                    <form onSubmit={ handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Restaurant Name</label>
                                    <input type="text" name="restaurant_name" className="form-control" value={formValue.restaurant_name} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Contact Name</label>
                                    <input type="text" name="contact_name" className="form-control" value={formValue.contact_name} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Location </label>
                                    <input type="text" name="location" className="form-control" value={formValue.location} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Pincode</label>
                                    <input type="text" name="pincode" className="form-control" value={formValue.pincode} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Phone Number</label>
                                    <input type="text" name="phone_number" className="form-control" value={formValue.phone_number} onChange={ handleInput}/>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Website</label>
                                    <input type="text" name="website" className="form-control" value={formValue.website} onChange={ handleInput}/>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Average Daily Transactions</label>
                                    <input type="text" name="average_daily_transactions" className="form-control" value={formValue.average_daily_transactions} onChange={ handleInput}/>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                                     </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                <img src={chef1} alt="chef" style={{
                    height: "52vh",
                    width: "60vw"
                }}></img>
            </div>
            
        </React.Fragment>
    );
}

export default Adduser;
