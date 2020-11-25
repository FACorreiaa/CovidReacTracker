import React, { useState } from "react";
import { postAdminMessage } from "../../services/ContactService";
import { Redirect, useHistory } from "react-router-dom";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import { useForm } from "react-hook-form";
import ErrorMessages from "../../components/Subscriptions/ErrorMessage";
import { Transition } from "@headlessui/react";

export default function ContactPage() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors, formState } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const loading = () => {
    setTimeout(function () {
      setIsOpen(false);
      redirect();
      history.goBack();
    }, 2000);
  };

  const onClick = () => {
    const data = {
      name,
      email,
      message,
    };
    const result = postAdminMessage(data);
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

  const redirect = () => {
    return `Redirecting...`;
  };

  return (
    <div>
      <div className="font-lato bg-landing-secondary bg-bottom bg-white-landing bg-dark-landing grid justify-evenly border-box h-full bg-no-repeat bottom-0 pt-12">
        <article className="prose prose-sm lg:prose-sm">
          <h3>Contact me</h3>

          <p>
            Contact me for any information you want or application improvement
            tips.
          </p>
          <p>
            Dont forget to reach me through the social media links on the
            footer.
          </p>
        </article>

        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-1 col-span-2 ">
            <form className="w-full max-w-sm shadow-md rounded border-gray-300 border">
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
                    className="shadow appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
                    className="shadow appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
                  {errors.email && (
                    <ErrorMessages error="Invalid email address" />
                  )}
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
                    className="shadow appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
                  {formState.isSubmitted && !errors.email && (
                    <div>
                      <Transition
                        show={isOpen}
                        enter="transition-opacity duration-105"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-350"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="font-semibold border-green-300 text-green-500">
                          Email sent!
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="font-semibold">{redirect()}</div>
                        {loading()}
                      </Transition>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    onClick={handleSubmit(onClick)}
                    className="hover:border-none focus:shadow-nav focus:outline-none hover:bg-gray-500 flex-shrink-0 bg-gray-700 hover:gray-700 border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Send<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
