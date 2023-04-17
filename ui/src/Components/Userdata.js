import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://127.0.0.1:8001/getusers/");
            const resData= await reqData.json();
            setUserdata(resData);
           // console.log(resData);
        }
        getUserdata();
    },[]);
 //restaurant_name, contact_name, location, pincode, phone_number, website, average_daily_transactions
    return(
        <React.Fragment>
            <div style={{ color: "white"}}>
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Restaurant List</h5>
                       <div className="d-grid d-md-flex justify-content-md-end mb-3">
                        <Link to="/adduser" className="btn btn-warning">Register</Link>
                       </div>
                       <Table inverted>
                        <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>restaurant_name</Table.HeaderCell>
                        <Table.HeaderCell>contact_name</Table.HeaderCell>
                        <Table.HeaderCell>location No</Table.HeaderCell>
                        <Table.HeaderCell>pincode</Table.HeaderCell>
                        <Table.HeaderCell>phone_number</Table.HeaderCell>
                        <Table.HeaderCell>website</Table.HeaderCell>
                        <Table.HeaderCell>average_daily_transactions</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                         { userData.map( (userData, index)=>(                           
                        <Table.Row key={index}>
                        <Table.Cell>{index+1} </Table.Cell>
                        <Table.Cell>{ userData.restaurant_name } </Table.Cell>
                        <Table.Cell>{ userData.contact_name } </Table.Cell>
                        <Table.Cell>{ userData.location } </Table.Cell>
                        <Table.Cell>{ userData.pincode } </Table.Cell>
                        <Table.Cell>{ userData.phone_number } </Table.Cell>
                        <Table.Cell>{ userData.website } </Table.Cell>
                        <Table.Cell>{ userData.average_daily_transactions } </Table.Cell>
                        
                        </Table.Row>
                        )) 
                        }                        
                        </Table.Body>
                        </Table>                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;
