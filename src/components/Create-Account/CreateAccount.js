import React from "react";

import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

const CreateAccount = () => {
    return (
        <div className="create centered">
            <div className="create-inner">
                <div className="create-inner_title">Create an Account</div>
                <form className="form">
                    <div className="form-input_container">
                        <label htmlFor="username">Username</label>
                        <div className="form-input">
                            <input type="text" id="username" name="username" />
                            <IoIosCheckmarkCircle />
                        </div>
                    </div>

                    <div className="form-input_container">
                        <label htmlFor="pword">Password</label>
                        <div className="form-input">
                            <input type="password" id="pword" name="pword" autoComplete="yes" />
                            <IoMdCloseCircle />
                        </div>
                    </div>
                    <button>Create Account</button>
                </form>

                <div>
                    <div>Already have an account? Log-in.</div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
