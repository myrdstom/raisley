import React from 'react';

const Register = (props) => {
    const {
        onChange,
        firstName,
        lastName,
        email,
        password,
        onSubmit,
        errors,
        onBlur,
        touched,
    } = props;

    return (
        <div className="wrapper">
            <h1>Welcome to Raisley!!!</h1>
            <h1>Sign up now</h1>

            <form id="myForm" className="form-wrapper" noValidate onSubmit={onSubmit}>
                <div className="grid">
                    <div className="firstName">
                        <label htmlFor="firstNAme">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="First Name"
                            id="firstName"
                        />
                        {touched.firstName && errors.firstName ? (
                            <span className="errorMessage">
                                {errors.firstName}
                            </span>
                        ) : null}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Last Name"
                            id="lastName"
                        />
                        {touched.lastName && errors.lastName ? (
                            <span className="errorMessage">
                                {errors.lastName}
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control profile__input"
                        name="email"
                        value={email}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Email"
                        id="email"
                    />
                    {touched.email && errors.email ? (
                        <span className="errorMessage">{errors.email}</span>
                    ) : null}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control profile__input"
                        name="password"
                        value={password}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                        id="password"
                    />
                    {touched.email && errors.password ? (
                        <span className="errorMessage">{errors.password}</span>
                    ) : null}
                </div>
                <div className="createAccount">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
