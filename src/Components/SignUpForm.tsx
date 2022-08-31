import * as React from "react";
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab'
import { GitHub } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function SignUpForm(props:any) {




    const handleClick = () => {
        const username = (document.getElementById("username")as HTMLInputElement).value;
        const password = (document.getElementById("password")as HTMLInputElement).value;
        const email = (document.getElementById("email")as HTMLInputElement).value;

        console.log(props)
        props.setUsername(username);
        props.setPassword(password);
        props.setEmail(email);
        props.setLoginAccount(true);
    }
 
    return (
      <div>
        <input id="username" type="text" placeholder="Username"/>
        <input id="password" type="text" placeholder="Password"/>
        <input id="email" type="text" placeholder="Email"/>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </div>
    );
  }
