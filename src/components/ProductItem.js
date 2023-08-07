import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import HttpClient from "../apiclient/httpclient";
// import { useDispatch } from 'react-redux';
// import {useEffect} from 'react'
// import {createAsyncThunk}  from '@reduxjs/toolkit'



const ProductItem=(props) => {
    // const getProductById=createAsyncThunk('products/getProductById',
    // async () => {
    //  const productId=await HttpClient.delete()
    //     return productId.data
    // })
    // //   const handleEdit = (id, updatedItem) => {
    // //     dispatch(editItem(id, updatedItem));
    // //   };
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //  dispatch(getProductById())
    // })
      const handleDelete = (productId) => {
    // dispatch
    (HttpClient.delete(props.product.productId));
      };
    return (
       <tr>
         <td>
         {props.show?
            <img src={props.product.imageUrl} 
            title={props.product.productName} className="avatar" alt="o"
            style={{width:50,margin:2}}/> :null}
        </td>
        <td> {props.product.productName}   </td>
        <td> {props.product.productCode}   </td>
        <td> {props.product.productAvailable}   </td>
        <td> {props.product.price}   </td>
       <td><StarRating rating={props.product.starRating}/></td>
       <td>
        <Link to={`product/edit/${props.product.productId}`} >
            <i className="fa fa-pencil" 
            style={{cursor:'pointer',float:'right', color:'red'}}>
            </i>
            </Link> 
       </td>
       <td>
        <Link to={`product/delete/${props.product.productId}`} onClick={handleDelete}>
            <i className="fa fa-remove" 
            style={{cursor:'pointer',float:'right', color:'red'}}>
            </i>
            </Link> 
       </td>
       </tr>
    )
}

export default ProductItem;