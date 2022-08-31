import * as React from "react";
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab'
import { GitHub } from "@material-ui/icons";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { Button } from "@material-ui/core";

export default function UserProfile(props:any) {
  const [signInMethod, setSignInMethod] = React.useState("");

  const handleChange = (event:any, nextView:string) => {
    if (signInMethod !== nextView){
      setSignInMethod(nextView);
    }
  };
 
    return (
      <div>
        <ToggleButtonGroup value={signInMethod}       exclusive onChange={handleChange} aria-label="text formatting">
          <ToggleButton value="Sign-in" aria-label="bold">
            Sign-in
          </ToggleButton>
          <ToggleButton value="Sign-up" aria-label="italic">
            Sign-up
          </ToggleButton>
          <ToggleButton value="Github" aria-label="underlined">
            <GitHub/>
          </ToggleButton>
          <ToggleButton value="Google" aria-label="color">
            Google
          </ToggleButton>
        </ToggleButtonGroup>
        <div>
          {signInMethod === "Sign-up" ? <SignUpForm {...props}></SignUpForm>: null}
          {signInMethod === "Sign-in" ? <SignInForm {...props}></SignInForm>: null}
        </div>
      </div>
    );
  }
