import React, { useState } from "react";
import { TextField, Box, Button, Typography, styled } from '@mui/material';
const imageURL = 'sjlogo2.png';
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    `;

    const Image = styled('img')`
    width:200;
    margin-top:10px;
    
   
    `;

    const Wrapper = styled(Box)`
     padding:25px 35px;
     display:flex;
     flex :1;
     flex-direction:column;
     & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background :#2E4374;
  color:#FFCC70;
  font-weight:bold;
  height : 48px;
  border-radius: 3px;
  font-size :18px
`;

const SignUpButton = styled(Button)`
    text-transform: none;
    background :#fff;
    color:#3085C3;
    font-weight:bold;
    height : 48px;
    border-radius: 3px;
    font-size :18px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);

`;

const Text = styled(Typography)`
 font-size:15px;
 color: #7D7C7C;
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
  

const Login = ()=>{

    const [signup,setSignUp] = useState(signupInitialValues)
     const [account , toggleAccount]  = useState('login')
    
     function toggleSignUp(){
        toggleAccount(prevState => prevState === "signup" ? "login" : "signup");
    }
     
    const onInputChange = (e)=>{
        setSignUp( {...signup, [e.target.name]:e.target.value});
       
    }
   
    const signUpUser =() => {
        
    }
    return (
         <Component>
            <Box>
            <Image  className="logo" src={imageURL} alt="Login"/>

                {account=== "login" ? 
                        <Wrapper>
                        <TextField label="Enter Username" variant="standard"/>
                        <TextField label="Enter Password" variant="standard"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{textAlign:"center"}}>OR</Text>
                        <SignUpButton onClick={toggleSignUp} >SignUp</SignUpButton>
                        </Wrapper> 
                   :
                        <Wrapper>
                        <TextField label="Enter Name"  name="name" onChange={(e)=>onInputChange(e)} variant="standard"/>
                        <TextField label="Enter Username"  name="username" onChange={(e)=>onInputChange(e)} variant="standard"/>
                        <TextField label="Enter Password"  name="password" onChange={(e)=>onInputChange(e)} variant="standard"/>

                        <SignUpButton onClick={()=>signUpUser()} >SignUp</SignUpButton>
                        <Text style={{textAlign:"center"}}>OR</Text>
                        <LoginButton variant="contained" onClick={toggleSignUp} >Already have an account</LoginButton>
                        </Wrapper>
                    }
                 
               
            </Box>
           
         
         
          
           
            
         </Component>
        )
}

export default Login