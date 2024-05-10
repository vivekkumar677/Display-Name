import React, { useState } from "react"
import './DisplayName.css';

const DisplayName = (props) => {

    const [firstName, setFistName] = useState("");
    const [lastName, setLastname] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");

    const handleFirstName = (event) => {
        setFistName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastname(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName) {
            setFullName(firstName + " " + lastName);
        } else {
            setError("Please enter both first and last name");
        }
    }

    const handleClear = () => {
        setFistName("");
        setLastname("");
        setFullName("");
        setError("");
    };
    
    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastName}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                </div>
            </form>
            {error && <p>{error}</p>}
            {fullName && <p>Full Name: {fullName}</p>}
        </div>
    );
};

export default DisplayName;