import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { BsFillInfoCircleFill } from "react-icons/bs";

//TODO add error message for when username/password is incorrect
const LogIn = ({ logInAccount }) => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const accountLogInHandler = async (e) => {
        e.preventDefault();

        const inputedUsername = usernameRef.current.value;
        const inputedPassword = passwordRef.current.value;

        // if (!inputedUsername || !inputedPassword) return;

        const allAccounts = [];

        try {
            const response = await fetch("https://recipedb-3c8b3-default-rtdb.europe-west1.firebasedatabase.app/accounts.json");

            const data = await response.json();

            for (const key in data) {
                allAccounts.push({
                    username: data[key].name,
                    password: data[key].password,
                    bookmarks: data[key].bookmarks,
                });
            }
        } catch (error) {
            console.log(error);
        }

        const filteredAccountsByUsername = allAccounts.filter((acc) => acc.username === inputedUsername);

        if (filteredAccountsByUsername.length === 0) return;

        if (filteredAccountsByUsername[0].password === inputedPassword) {
            logInAccount(filteredAccountsByUsername[0]);
            navigate("/");
        } else {
            return;
        }
    };

    return (
        <div className="create centered">
            <div className="create-inner">
                <div className="create-inner_title">Log In</div>
                <form className="form" onSubmit={accountLogInHandler}>
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
