import React from "react";

import { Link } from "react-router-dom";

import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

//TODO fix the svg so its in a seperate div for future loading spinner
//TODO checks for account name as the user types
const CreateAccount = () => {
    return (
        <div className="create centered">
            <div className="create-inner">
                <div className="create-inner_title">Create an Account</div>
                <form className="form">
                    <div className="form-input_container">
                        <label htmlFor="username">Username</label>
                        <div className="form-input form-input__correct">
                            <input type="text" id="username" name="username" />
                            <IoIosCheckmarkCircle />
                        </div>
                    </div>

                    <div className="form-input_container">
                        <label htmlFor="pword">Password</label>
                        <div className="form-input form-input__wrong">
                            <input type="password" id="pword" name="pword" autoComplete="yes" />
                            <IoMdCloseCircle />
                        </div>
                        <div className="form-info ">
                            <BsFillInfoCircleFill />
                            <p> needs to be at least 6 characters</p>
                        </div>
                    </div>
                    <button>Create Account</button>
                </form>

                <div className="create-inner_info">
                    <div>
                        Already have an account? <Link to="/log-in">Log-in</Link>.
                    </div>
                    <div>
                        You don't need an Account to browse the recipes. <Link to="/">Click here to go back to the search</Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
