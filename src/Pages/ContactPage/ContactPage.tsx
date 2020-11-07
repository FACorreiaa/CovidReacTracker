import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Icon } from "@material-ui/core";
import { postAdminMessage } from "../../services/ContactService";
import { useHistory } from "react-router-dom";
import { CustomContainer } from "../../components/Container/Container";
import CustomTitle from "../../components/Title/Title";
import CustomNavBar from "../../components/NavBar/NavBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function ValidationTextFields() {
  let history = useHistory();

  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClick = () => {
    const data = {
      name,
      email,
      message,
    };
    const result = postAdminMessage(data);
    history.goBack();

    return result;
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);
  };
  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message = e.target.value;
    setMessage(message);
  };

  return (
    <>
      <CustomNavBar />
      <CustomContainer>
        <CustomTitle title="Contact me anytime. I wont reply with spam :)" />
        <Grid
          style={{ marginBottom: "1em" }}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required={true}
              type="text"
              id="standard-error-helper-text"
              defaultValue=""
              label="Insert name"
              onChange={onNameChange}
            />
            <br />
            <TextField
              required={true}
              label="Insert email"
              type="email"
              id="standard-error-helper-text"
              defaultValue=""
              onChange={onEmailChange}
            />
            <br />

            <TextField
              required={true}
              type="text"
              id="standard-error-helper-text"
              label="Insert message"
              defaultValue=""
              onChange={onMessageChange}
            />
            <br />

            <Button
              style={{ width: "10em" }}
              onClick={onClick}
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
          </form>
        </Grid>
      </CustomContainer>
    </>
  );
}
