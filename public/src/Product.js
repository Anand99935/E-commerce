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
function Product()
{
    const[apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
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
            <center><MDBCardTitle>{item.title}</MDBCardTitle></center>
            <center><MDBCardTitle>{item.price*80} Rs</MDBCardTitle></center>
            <center><MDBCardText>{item.description.substring(0,100)} </MDBCardText></center>
              <MDBBtn>View Details</MDBBtn>
            </MDBCardBody>
          </MDBCard> 
           
      </MDBCol>
      
      )
        }
     
    </MDBRow>
        {/* <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Image</td>
                </tr>
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price*80}Rs</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td><img src={item.image} width="100px" height="100px"></img></td>
                    </tr>
                    )
                }
            </tbody>

        </Table> */}
    </div>
    )
}
export default Product