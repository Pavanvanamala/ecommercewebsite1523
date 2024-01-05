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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css'

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

export default function SignIn() {


  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')

  const [errors,setErrors]=useState({usernameError:"",passwordError:""})

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

  const handleSignIn=(event)=>{
    event.preventDefault()



    const storedEmail=localStorage.getItem('username') //local storage
    const storedPassword=localStorage.getItem('password')

    if(username==storedEmail && password==storedPassword){
      navigate('/ProductsList')
    }else{
      alert('Invalid credentials')
    }



    if ( username.length===0 || password.length===0){
      const newErr = {
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
     navigate('/ProductsList')
      
     }

  }

  const handleSignUpLinkClick = () => {
    navigate('/SignUp'); 
  };


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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e)=>{handleChangeUserName(e)}}
            />
            <div className='error d-flex justify-content-start'>{!validateUsername ? "Enter valid Email" : ""} </div>
            <div className="error d-flex justify-content-start">{(errors.usernameError && !username.length)&&<span>Email address is Required </span>}</div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>{handleChangePassword(e)}}
            />
             <div className='error d-flex justify-content-start'>{!validateKey ? "Enter valid password" : ""} </div>
             <div className="error d-flex justify-content-start">{(errors.passwordError && !password.length)&&<span>password is Required </span>}</div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2"  onClick={handleSignUpLinkClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}