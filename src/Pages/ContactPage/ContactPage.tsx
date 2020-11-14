import React, { useState } from "react";
import { postAdminMessage } from "../../services/ContactService";
import { useHistory } from "react-router-dom";
import FormButton from "../../components/Form/FormButton";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import { useForm } from "react-hook-form";
import ErrorMessages from "../../components/Subscriptions/ErrorMessage";

export default function ContactPage() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

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
    <div>
      <CustomSecondaryContainer>
        <form className="w-full max-w-sm shadow-md rounded">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onNameChange}
                className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="inline-full-name"
                type="text"
                value={name}
                placeholder="Full name"
                name="name"
                ref={register({
                  required: "Required",
                })}
              />
              {errors.name && <ErrorMessages error="Name is required" />}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                onChange={onEmailChange}
                value={email}
                name="email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && <ErrorMessages error="Invalid email address" />}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="shadow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="message"
                type="text"
                placeholder="Message"
                onChange={onMessageChange}
                value={message}
                name="message"
                ref={register({
                  required: "Required",
                  min: 10,
                })}
              />
              {errors.message && (
                <ErrorMessages error="Please elaborate your message!" />
              )}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                onClick={handleSubmit(onClick)}
                className="flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Send<i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </CustomSecondaryContainer>
    </div>
  );
}
