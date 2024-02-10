import React, { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Electronic()
{ 
    const[apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/electronics").then((result)=>{
             result.json().then((data)=>{
                setapidata(data)

            })
        })
    },[])
    return(
        <div>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
                    apidata.map((item)=>
              <MDBCol>
                
                    <MDBCard className='h-100'>
                    <center><MDBCardImage  src={item.image} width="100px" height="150px" /></center>
                    <MDBCardBody>
                      <center><MDBCardTitle>{item.title.substring(0,20)}</MDBCardTitle></center>
                      <center><MDBCardTitle>{item.price*80} Rs</MDBCardTitle></center>
                      <MDBCardText>{item.description.substring(0,100)} </MDBCardText>
                      <center><MDBBtn>View Details</MDBBtn></center>
                    </MDBCardBody>
                  </MDBCard> 
                   
              </MDBCol>
              
              )
                }
             
            </MDBRow>
            </div>
    )
}
export default Electronic