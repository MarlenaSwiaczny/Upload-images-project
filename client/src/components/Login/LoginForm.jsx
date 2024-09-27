import React from "react";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

function LoginForm() {

const [register, setRegister] = React.useState(false);

const [formData, setFormData] = React.useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const [errors, setErrors] = React.useState({})

React.useEffect(() => setRegister(false), []);

  function handleRegisterClick(event) {
    if (!register) {
      setRegister(true);
      return;
    }
    handleErrors(event)
    if (errors) {
      console.log("Validation errors: ", errors)
    } else {
      console.log("registration successful - handle register submition")
    }
  }

  function handleLoginClick() {
    if (register) {
    setRegister(false);
    return;
    }
    console.log("login successful - handle login submition")
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData, [name] : value
  })
  }

  const handleErrors = (event) => {
    event.preventDefault();
    const validationErrors = {};

    //Validation username
    if (!formData.username.trimEnd()) {
        validationErrors.username = "Username is required"
    }

    //Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trimEnd()) {
        validationErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
        validationErrors.email = "Email is not valid"
    }

    //Validation password
    const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!formData.password.trimEnd()) {
        validationErrors.password = "Password is required"
    } else if (!passRegex.test(formData.password)) {
        validationErrors.password = "Password should contain at least 8 characters, including 1 uppercase letter and 1 number"
    }

    //Validation confirm password
    if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "Password not matched"
    }

    setErrors(validationErrors);
    }


  return (<>
    
      <h2>Logowanie (bez funkcjonalności)</h2>
      <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          error={!!errors.username}
          helperText={errors.username}
        />
        {register && <>
           <TextField
           required
           id="outlined-required"
           label="Email"
           name="email"
           onChange={handleChange}
           value={formData.email}
           error={!!errors.email}
           helperText={errors.email}
         />
        </>}
       
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          error={!!errors.password}
          helperText={errors.password}
        />
        {register && <>
         <TextField
           id="outlined-password-input"
           label="Confirm Password"
           type="password"
           autoComplete="current-password"
           name="confirmPassword"
           onChange={handleChange}
           value={formData.confirmPassword}
           error={!!errors.confirmPassword}
           helperText={errors.confirmPassword}
         />
         </>}
        
    </div>
    </Box>
    {register ? 
    <>
    <Box>
     <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
   </Box>
   <Box>
    <Button onClick={handleLoginClick}>Login</Button>
   </Box>
   </> :
    <>
    <Box>
     <Button variant="contained"
     onClick={handleLoginClick}>Login</Button>
    </Box>
    <Box>
      <Button onClick={handleRegisterClick}>Register</Button>
    </Box>
    </>
}
      </>
  );
}


export default LoginForm;
