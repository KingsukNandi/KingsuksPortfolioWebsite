import { useRef } from "react";
import emailjs from "@emailjs/browser";
import config from "../config/config";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

function EmailJSForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        config.emailjsServiceKey,
        config.emailjsTemplateId,
        form.current,
        {
          publicKey: config.emailjsPublicKey,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col gap-10 sm:gap-6"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm">Name</label>
        <input
          className="rounded-lg p-2 outline-none bg-white bg-opacity-5 placeholder:text-white placeholder:text-opacity-30 text-lg"
          type="text"
          name="user_name"
          placeholder="Name"
          {...register("user_name", { required: "Name is required" })}
        />
        <ErrorMessage
          errors={errors}
          name="user_name"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="contactFormErrorMessage">
                    {message}
                  </p>
                ))
              : null;
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Email</label>
        <input
          className="rounded-lg p-2 outline-none bg-white bg-opacity-5 placeholder:text-white placeholder:text-opacity-30 text-lg"
          type="email"
          name="user_email"
          placeholder="you@company.com"
          {...register("user_email", {
            required: "Email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              message: "Email must be valid",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="user_email"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Message</label>
        <textarea
          className="resize-none h-32 sm:h-72 rounded-lg p-2 outline-none bg-white bg-opacity-5 placeholder:text-white placeholder:text-opacity-30 text-lg"
          name="message"
          placeholder="Leave me a message..."
          {...register("message", {
            required: "Message is required",
            minLength: { value: 3, message: "Input must exceed 3 characters" },
            maxLength: {
              value: 256,
              message: "Input must not exceed 256 characters",
            },
          })}
        />

        <ErrorMessage
          errors={errors}
          name="message"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="contactFormErrorMessage">
                    {message}
                  </p>
                ))
              : null;
          }}
        />
      </div>
      <button
        type="submit"
        className="bg-white bg-opacity-5 hover:bg-secondary text-text hover:text-black p-2 rounded-lg text-xl font-semibold"
      >
        Send Message
      </button>
      {/* TODO: make floating alert on send and empty out form fields */}
    </form>
  );
}

export default EmailJSForm;
