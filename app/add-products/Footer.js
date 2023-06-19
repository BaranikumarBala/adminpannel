"use client"
import {FaRegCopyright} from "react-icons/fa"
import "./Footer.css"

const Footer = () =>
{
    return <div className="footer">
                <div className="footer-content">
                    <p className="footer-text">Copyright <FaRegCopyright/> <span>2018</span> All rights reserved. Design: <a href="#">Template Mo</a></p>
                </div>
           </div>
}
export default Footer