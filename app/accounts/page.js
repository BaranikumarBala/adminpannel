"use client"
import './Accounts.css';
import Topbar from './topbar';
import Footer from './Footer';

const Accounts = () =>
{
    return (
        <>
        <Topbar/>
        <div className='accounts-page'>
            <div className='accounts-container'>
                <div className='accounts'>
                    <h4>List of Accounts</h4>
                    <div className="form-grp accounts-grp">
                        <label>Accounts</label>
                        <select className="custom-select">
                            <option>Select account</option>
                            <option>Admin</option>
                            <option>Editor</option>
                            <option>Merchant</option>
                            <option>Customer</option>
                        </select>
                    </div> 
                </div>
                <div className='profile-page'>
                    <div className='avatar-page'>
                        <h4>Change Avatar</h4>
                        <div className='avatar-img'>
                            <img src=""/>
                        </div>
                        <div className='btn-section'>
                            <button className='btn'>UPLOAD NEW IMAGE</button>
                        </div>
                    </div>
                    <div className='settings-page'>
                        <div className='settings'>
                            <h4>Account Settings</h4>
                            <div className='accounts-profile'>
                                <div className='left-area'>
                                    <div className="form-grp">
                                        <label>Account Name</label>
                                        <div className="input">
                                        <input type="text" id="account-name" name="account-name"/>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <label>Password</label>
                                        <div className="input">
                                        <input type="password" id="password" name="password"/>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <label>Phone</label>
                                        <div className="input">
                                        <input type="tel" id="phone" name="phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='rigth-area'>
                                <div className="form-grp">
                                        <label>Account Email</label>
                                        <div className="input">
                                        <input type="mail" id="mail" name="mail"/>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <label>Re-enter Password</label>
                                        <div className="input">
                                        <input type="password" id="rpassword" name="rpassword"/>
                                        </div>
                                    </div>
                                    <div className='btn-section'>
                                        <span></span>
                                        <button className='btn btn-margin'>UPDATE YOUR PROFILE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn-section'>
                            <button className='btn'>DELETE YOUR ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Accounts;