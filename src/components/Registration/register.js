import React from "react";

const Register = props =>{
    const { onChange, firstName, lastName, email, password, onSubmit, handleChange } = props;

    return (
        <div className="register">
            <form id="myForm" noValidate onSubmit={onSubmit}>
                <label htmlFor="firstName">
                    First Name
                </label>
                <input
                    type="text"
                    className="form-control profile__input"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    id="firstName"
                    required
                />
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control profile__input"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    id="lastName"
                    required
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control profile__input"
                    name="email"
                    value={email}
                    onChange={onChange}
                    id="email"
                    required
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control profile__input"
                    name="password"
                    value={password}
                    onChange={onChange}
                    id="password"
                    required
                />
                <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                />

            </form>
        </div>
    )
    
}

export default Register