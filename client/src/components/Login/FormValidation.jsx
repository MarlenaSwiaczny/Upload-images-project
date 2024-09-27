import React from "react";

const FormValidation = () => {
    
    
    const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
)

const [errors, setErrors] = React.useState({})

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData, [name] : value
})
}

const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.name.trimEnd()) {
        validationErrors.name = "Username is required"
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!formData.email.trimEnd()) {
        validationErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
        validationErrors.email = "Email is not valid"
    }

    const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (!formData.password.trimEnd()) {
        validationErrors.password = "Password is required"
    } else if (!passRegex.test(formData.password)) {
        validationErrors.password = "Password should contain at least 8 characters, including 1 uppercase letter and 1 number"
    }
    if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "Password not matched"
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        alert("Form submitted successfully")
    }
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input
            type="text"
            name="name"
            placeholder="username"
            autoComplete="off"
            onChange={handleChange}/>
            {errors.name && <p className="error" style={{color: "red"}}>{errors.name}</p>}
        </div>
        <div>
            <label>Email:</label>
            <input
            type="text"
            name="email"
            placeholder="email@gmail.com"
            autoComplete="off"
            onChange={handleChange}/>
            {errors.email && <p className="error" style={{color: "red"}}>{errors.email}</p>}
        </div>
        <div>
            <label>Password:</label>
            <input
            type="text"
            name="password"
            placeholder="*****"
            autoComplete="off"
            onChange={handleChange}/>
            {errors.password && <p className="error" style={{color: "red"}}>{errors.password}</p>}
        </div>
        <div>
            <label>Confirm password:</label>
            <input
            type="text"
            name="confirmPassword"
            placeholder="*****"
            autoComplete="off"
            onChange={handleChange}/>
            {errors.confirmPassword && <p className="error" style={{color: "red"}}>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>

)
}

export default FormValidation;