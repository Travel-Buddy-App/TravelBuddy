
import {useState, Component, PropsWithChildren} from 'react';
import { hot } from "react-hot-loader/root";
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import UserLogin from './Components/UserLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App () {

  const [loginAccount, setLoginAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const props = {
    loginAccount,
    username,
    password,
    email,
    avatar,
    setLoginAccount,
    setUsername,
    setPassword,
    setEmail,
    setAvatar
  }

  if(!loginAccount){
    return (
      <>
        <Box border = {1} borderColor = {"black"} width = {'50%'} height = {'50%'} display="flex" justifyContent={"center"} alignItems={"center"} marginTop={'25%'} marginLeft={'25%'} color={'white'}>
          <UserLogin {...props} />
        </Box>
      </>
    );
  }
  else{
    return (
      <>
        <Box border = {1} borderColor = {grey} width = {'50%'} height = {'50%'} display="flex" flexDirection={'column'} justifyContent={"center"} alignItems={"center"} marginTop={'25%'} marginLeft={'25%'}>
          <h1>Your Itineraries</h1>
          <Box> Itinerary 1 <Button> Go to this Itinerary </Button></Box>
        </Box>
      </>
    );
  }
}

export default hot(App);
