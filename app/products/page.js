"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import {FaRegTrashAlt, FaCheck} from "react-icons/fa";
import "./Products.css";
import Topbar from "./topbar";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

const Product = () =>{

    const [Product,setProduct] = useState([]);
    const [category,setCategory] = useState([]);
    const { push } = useRouter();

    const GoToAddNewProduct = () =>
    {
        push('/add-products');
    }

    useEffect(()=>
    {

        const getTableData = async () =>
        {
            try
            {
                const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
                const products = response.data.productsPage.products;
                const Categories = response.data.productsPage.categories;
                console.log(products);
                console.log(Categories);
                setProduct(products);
                setCategory(Categories);
            }
            catch(error)
            {
                console.log("Error: ",error);
            }
        }
        getTableData();
    },[]);

    return (
            <>
            <Topbar/>
            <div className="products-container">
                <div className="container-products">
                    <div className="table-left">
                        <div className="product-table">
                           
                                <table className="table-class">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>PRODUCT NAME</th>
                                            <th>UNIT SOLD</th>
                                            <th>IN STOCK</th>
                                            <th>EXPIRE DATE</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Product && Product.map((item,idx)=>(
                                        <tr className="table-data-contain">
                                            <td><div className="select"><i className="select-icon" id="check"><FaCheck/></i></div></td>
                                            <td><b>Lorem Ipsum Product {idx+1}</b></td>
                                            <td><b>{item.unitSold}</b></td>
                                            <td><b>{item.stock}</b></td>
                                            <td><b>{item.expireDate}</b></td>
                                            <td><div className="delete"><i className="delete-icon"><FaRegTrashAlt/></i></div></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            
                        </div>
                        <div className="btn-section">
                            <button className="btn" onClick={GoToAddNewProduct}>ADD NEW PRODUCT</button>
                            <button className="btn">DELETE SELECTED PRODUCTS</button>
                        </div>
                    </div>

                    <div className="table-right">
                        <div className="category-table">
                            <div className="title-div">
                                <h1>Product Categories</h1>
                            </div>
                            <div className="category-table-data">
                                <table style={{borderCollapse: 'collapse'}}>
                                    <tbody>
                                    {Product && Product.map((item,idx)=>(
                                        <tr className="table-right-category">
                                            <td style={{color:"#fff",fontSize:"small"}}><b>Product Category {idx+1}</b></td>
                                            <td><div className="delete"><i className="delete-icon"><FaRegTrashAlt/></i></div></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-section">
                                <button className="btn">ADD NEW CATEGORY</button>
                            </div>
                        </div>
                    </div>
                </div>                
           </div>
        <Footer/>
        </>)
           


}
export default Product;

