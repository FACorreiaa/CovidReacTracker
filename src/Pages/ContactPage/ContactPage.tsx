import React, { useState } from "react";
import { postAdminMessage } from "../../services/ContactService";
import { useHistory } from "react-router-dom";

export default function ValidationTextFields() {
  let history = useHistory();

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

  return <div>Contact</div>;
}
