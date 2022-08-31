import * as React from "react";
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab'
import { GitHub } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function SignInForm(props:any) {
 

    const handleClick = () => {
        const username = (document.getElementById("username")as HTMLInputElement).value;
        const password = (document.getElementById("password")as HTMLInputElement).value;

        props.setUsername(username);
        props.setPassword(password);
        props.setLoginAccount(true)
    }

    return (
      <div>
        <input type="text" placeholder="Username" id='username'/>
        <input type="text" placeholder="Password" id="password"/>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </div>
    );
  }
