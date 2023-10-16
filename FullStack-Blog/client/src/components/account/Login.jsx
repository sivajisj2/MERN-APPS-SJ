import React from "react";
import { TextField, Box, Button, Typography, styled } from '@mui/material';
const imageURL = 'sjlogo2.png';
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    `;

    const Image = styled('img')`
    width:200
   
    `;
const Login = ()=>{
   
    

    return (
         <Component>
            <Box>
            <Image  className="logo" src={imageURL} alt="Login"/>
                <Box>
                  <TextField variant="standard"/>
                  <TextField variant="standard"/>
                    <Button variant="contained">Login</Button>
                   <Button>Create an account</Button>
           
                </Box>
            </Box>
           
         
         
          
           
            
         </Component>
        )
}

export default Login