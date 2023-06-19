"use client"
import {FaTachometerAlt, FaShoppingCart, FaUser, FaListUl} from "react-icons/fa"
import "./Topbar.css"
import { useRouter } from "next/navigation"


const Topbar= () =>
{
    let { push } = useRouter();
    const GoToDashboard = () =>
    {
        push('/dashboard');
    }
    const GoToProducts = () =>
    {
        push('/products');
    }
    const GoToAccounts = () =>
    {
        push('/accounts');
    }
    return <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <a className="navbar-brand">
                            <h1 className="brand">product admin</h1>
                        </a>
                    </div>
                    <div className="navbar-right">
                        <ul className="navbar-menu"> 
                            <li className="menu-item menu-icon"><i className="icons"><FaTachometerAlt/></i>Dashboard</li>
                            <li className="menu-item menu-icon"><i className="icons"><FaShoppingCart/></i>Products</li>
                            <li className="menu-item menu-icon"><i className="icons"><FaUser/></i>Accounts</li>
                            <li className="menu-item menu-click"><i className="icons"><FaListUl/></i>
                                <ul className="menu-click-ul">
                                    <li className="menu-click-ul-li" onClick={GoToDashboard}>Dashboard</li>
                                    <li className="menu-click-ul-li" onClick={GoToProducts}>Products</li>
                                    <li className="menu-click-ul-li" onClick={GoToAccounts}>Accounts</li>
                                </ul></li>
                        </ul>
                    </div>
                    <div className="logout">
                            <a href="">Admin,<span>Logout</span></a>
                    </div>
                </div>
           </div>
   
}
export default Topbar;