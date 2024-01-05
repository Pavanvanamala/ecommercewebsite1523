import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './products.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  
   const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   const [username,setUserName]=useState('')
   const [password,setPassword]=useState('')

   const [errors,setErrors]=useState({firstNameError:"",lastNameError:"",usernameError:"",passwordError:""})

   const [validateUsername,setValidateUsername]=useState(true) // regex validation for email
   const [validateKey,setValidateKey]=useState(true)  //regex validation for password


  


  const handleChangeUserName = (e) => {   //triggers the input field and update the email with new field
    const newUser=e.target.value
    setUserName(newUser)

    const validateUsername= newUser.length >=10 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser)

    setValidateUsername(validateUsername)
    
}

const handleChangePassword = (e) => {  //triggers the password field and update the password with new field
  const newPassword=e.target.value
  setPassword(newPassword)

  const validatePassword = newPassword.length>=8 && /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)

  setValidateKey(validatePassword)
}


const navigate=useNavigate()

   const handleSignUp = ()=>{
    
    console.log('Signing up...');
   if(username&&password.length>0){
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
    alert('Account is created successfully')
    navigate('/SignIn')
   }else{
    alert('please register')
   }

   if (firstName.length===0 || lastName.length===0 || username.length===0 || password.length===0){
    const newErr = {
      firstNameError: firstName === ""? "First name is required" : "",
      lastNameError : lastName === ""? "Last name is required" : "",
      usernameError: username === "" ? "User name is required " : "",
      passwordError: password=== "" ? "password is required"  : ""
    }
    setErrors(newErr)

   }else if (!validateUsername || !validateKey) {
    // Add checks for email and password validation
    setErrors({
        setValidateUsername: !validateUsername ? 'Enter valid Email' : '',
        setValidateKey: !validateKey ? 'Password must contain at least 8 characters and include special symbols.' : ''
    });
}
   else{           
    alert("Account is created successfully")
    navigate('/SignIn')
    
   }
   }


   const handleSignInLinkClick=()=>{
    navigate('/SignIn')
   }



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                />
                <div className="error d-flex justify-content-start">{(errors.firstNameError  && !firstName.length)&&<span>FirstName is Required </span>} </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e)=>{setLastName(e.target.value)}}
                />
                <div className="error d-flex justify-content-start">{(errors.lastNameError  && !lastName.length)&&<span>LastName is Required </span>} </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={username}
                  onChange={(e)=>{handleChangeUserName(e)}}
                  name="email"
                  autoComplete="email"
                />
                <div className='error d-flex justify-content-start'>{!validateUsername ? "Enter valid Email" : ""} </div>
                <div className="error d-flex justify-content-start">{(errors.usernameError && !username.length)&&<span>Email name is Required </span>}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e)=>{handleChangePassword(e)}}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                   <div className='error d-flex justify-content-start'>{!validateKey ? "Enter valid password" : ""} </div>
                   <div className="error d-flex justify-content-start">{(errors.passwordError && !password.length)&&<span>password is Required </span>}</div>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={handleSignInLinkClick} >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}