import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

const inputStyles = ["form-input", "form-input form-input__correct", "form-input form-input__wrong"];
const svgArr = ["", <IoIosCheckmarkCircle />, <IoMdCloseCircle />];

const CreateAccount = () => {
    const [allAccounts, setAllAccounts] = useState([]);
    const [inputedUsername, setInputedUsername] = useState("");
    const [inputedPassword, setInputedPassword] = useState("");
    const [usernameInputStyle, setUsernameInputStyle] = useState(0);
    const [passwordInputStyle, setPasswordInputStyle] = useState(0);

    const submitAccountHandler = async e => {
        e.preventDefault();

        if (usernameInputStyle !== 1 || passwordInputStyle !== 1) return;

        const accountData = {
            name: inputedUsername,
            password: inputedPassword,
            bookmarks: [""],
        };

        try {
            // eslint-disable-next-line no-unused-vars
            const response = await fetch(`https://recipedb-3c8b3-default-rtdb.europe-west1.firebasedatabase.app/accounts.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(accountData),
            });
        } catch (error) {
            console.log(error);
        }
    };

    // checking for username availability
    useEffect(() => {
        const usernameFree = allAccounts.filter(acc => acc.username === inputedUsername);

        if (inputedUsername === "") setUsernameInputStyle(0);
        if (inputedUsername !== "" && usernameFree.length === 0) setUsernameInputStyle(1);
        if (inputedUsername !== "" && usernameFree.length > 0) setUsernameInputStyle(2);
    }, [allAccounts, inputedUsername]);

    // checking for password correctness
    useEffect(() => {
        if (inputedPassword.length === 0) setPasswordInputStyle(0);
        if (inputedPassword.length > 0 && inputedPassword.length < 6) setPasswordInputStyle(2);
        if (inputedPassword.length >= 6) setPasswordInputStyle(1);
    }, [inputedPassword]);

    // getting all accounts
    useEffect(() => {
        const getAllAccounts = async () => {
            try {
                const response = await fetch(`https://recipedb-3c8b3-default-rtdb.europe-west1.firebasedatabase.app/accounts.json`);

                const data = await response.json();

                const allFetchedAccounts = [];

                for (const key in data) {
                    allFetchedAccounts.push({
                        username: data[key].name,
                        password: data[key].password,
                        bookmarks: data[key].bookmarks,
                    });
                }

                setAllAccounts(allFetchedAccounts);
            } catch (error) {
                console.log(error);
            }
        };

        getAllAccounts();
    }, []);

    return (
        <div className="create centered">
            <div className="create-inner">
                <div className="create-inner_title">Create an Account</div>
                <form className="form">
                    <div className="form-input_container">
                        <label htmlFor="username">Username</label>
                        <div className={inputStyles[usernameInputStyle]}>
                            <input type="text" id="username" name="username" onChange={e => setInputedUsername(e.target.value)} />
                            <div className="centered">{svgArr[usernameInputStyle]}</div>
                        </div>
                    </div>

                    <div className="form-input_container">
                        <label htmlFor="pword">Password</label>
                        <div className={inputStyles[passwordInputStyle]}>
                            <input type="password" id="pword" name="pword" autoComplete="yes" onChange={e => setInputedPassword(e.target.value)} />
                            <div className="centered">{svgArr[passwordInputStyle]}</div>
                        </div>
                        <div className="form-info">
                            <BsFillInfoCircleFill />
                            <p> needs to be at least 6 characters</p>
                        </div>
                    </div>
                    <button onClick={submitAccountHandler}>Create Account</button>
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
