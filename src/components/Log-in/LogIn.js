import React, { useRef } from "react";

import { Link } from "react-router-dom";

import { BsFillInfoCircleFill } from "react-icons/bs";

const LogIn = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="create centered">
            <div className="create-inner">
                <div className="create-inner_title">Log In</div>
                <form className="form">
                    <div className="form-input_container">
                        <label htmlFor="username">Username</label>
                        <div className="form-input">
                            <input type="text" id="username" name="username" ref={usernameRef} />
                            <div></div>
                        </div>
                    </div>

                    <div className="form-input_container">
                        <label htmlFor="pword">Password</label>
                        <div className="form-input">
                            <input type="password" id="pword" name="pword" autoComplete="yes" ref={passwordRef} />
                            <div className="centered"></div>
                        </div>
                        <div className="form-info">
                            <div className="form-info">
                                <BsFillInfoCircleFill />
                                <p> needs to be at least 6 characters</p>
                            </div>
                        </div>
                    </div>
                    <button>Log In</button>
                </form>

                <div className="create-inner_info">
                    <div>
                        If you don't have an account? <Link to="/log-in">Create Account</Link>.
                    </div>
                    <div>
                        You don't need an Account to browse the recipes. <Link to="/">Click here to go back to the search</Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
