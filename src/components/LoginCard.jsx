import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CardActions,
  Link,
  Divider,
  SvgIcon,
} from "@material-ui/core";

function LoginCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3),
    },
    cardAction: {
      display: "inline-block",
      padding: theme.spacing(3),
    },
    heading: {
      textAlign: "center",
    },
    signUpLink: {
      paddingTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.heading} variant="h3">
          Login
        </Typography>
        <form class="" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
            name="username"
            autoFocus
            autoComplete="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            placeholder="Password"
            name="password"
            autoFocus
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className=""
            size="large"
          >
            Sign In
          </Button>
        </form>
      </CardContent>
      <Divider />
      <CardActions className={classes.cardAction} fullWidth>
        <div>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            startIcon={<GoogleIcon />}
          >
            LOGIN WITH GMAIL
          </Button>
        </div>
        <div className={classes.signUpLink}>
          <Typography>
            Don't have any account?
            <Link href="#" color="primary">
              Sign Up
            </Link>
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}

export default LoginCard;

function GoogleIcon(props) {
  const useStyles = makeStyles((theme) => ({
    a: {
      fill: "#fbbb00",
    },
    b: {
      fill: "#518ef8",
    },
    c: {
      fill: "#28b446",
    },
    d: {
      fill: "#f14336",
    },
  }));
  const classes = useStyles();

  return (
    <SvgIcon>
      <defs></defs>
      <path
        className={classes.a}
        d="M4.456,144.989l-.7,2.613-2.558.054a10.071,10.071,0,0,1-.074-9.387h0l2.277.418,1,2.264a6,6,0,0,0,.056,4.039Z"
        transform="translate(0 -132.838)"
      />
      <path
        className={classes.b}
        d="M271.284,208.176a10.049,10.049,0,0,1-3.584,9.718h0l-2.868-.146-.406-2.534a5.992,5.992,0,0,0,2.578-3.06h-5.376v-3.977h9.656Z"
        transform="translate(-251.354 -200.001)"
      />
      <path
        className={classes.c}
        d="M45.657,315.151h0a10.056,10.056,0,0,1-15.149-3.076l3.258-2.667a5.979,5.979,0,0,0,8.616,3.061Z"
        transform="translate(-29.311 -297.259)"
      />
      <path
        className={classes.d}
        d="M43.97,2.314,40.713,4.981A5.978,5.978,0,0,0,31.9,8.111L28.625,5.43h0A10.055,10.055,0,0,1,43.97,2.314Z"
        transform="translate(-27.5)"
      />
    </SvgIcon>
  );
}
