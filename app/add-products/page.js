"use client"
import {FaCloudUploadAlt} from "react-icons/fa"
import "./AddProducts.css";
import Topbar from "./topbar";
import Footer from "./Footer";

const AddProducts = () =>{

   
    return (
        <>
            <Topbar/>
            <div className="products-container">

                <div className="add-product-page">
                    <div className="add-product">
                         <div className="add-product-container">
                             <div className="add-product-left">
                                 <div className="product-title">
                                    <h4>Add Product</h4>
                                 </div>
                                 <div className="products-desc">
                                        <div className="form-grp">
                                            <label>Product Name</label>
                                            <div className="input">
                                            <input type="text" id="product-name" name="product-name"/>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <label>Description</label>
                                            <textarea rows={3} required></textarea>
                                        </div>
                                        <div className="form-grp">
                                            <label>Category</label>
                                            <select className="custom-select">
                                                <option>Select category</option>
                                                <option>New Arrival</option>
                                                <option>Most Popular</option>
                                                <option>Trending</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                        <div className="form-grp grp">
                                            <label>Expire Date</label>
                                            <div className="input input1">
                                            <input type="text" id="product-name" name="product-name"/>
                                            </div>
                                        </div>
                                        <div className="form-grp grp">
                                            <label>Units In Stock</label>
                                            <div className="input input1">
                                            <input type="text" id="product-name" name="product-name"/>
                                            </div>
                                        </div>
                                        </div>

                                        
                                 </div>
                             </div>

                             <div className="add-product-right">
                                 <div className="image-section">
                                    <div className="icon-upload"><i className="upload-icon"><FaCloudUploadAlt/></i></div>
                                    <img src ="" alt=""/>
                                 </div>
                                 <div className="btn-section">
                                    <button className="btn">UPLOAD PRODUCT IMAGE</button>
                                 </div>
                             </div>
                         </div>
                         <div className="btn-section">
                                <button className="btn">ADD PRODUCT NOW</button>
                             </div>
                    </div>
                </div>
           </div>
           <Footer/>
           </>
    )        
}
export default AddProducts;

