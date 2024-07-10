"use client";
import React, {useState} from "react";
import Image from "next/image";

// NEXT_PUBLIC_SPREADSHEET_WEB_APP_URL

interface ContactFormProps {
  onSubmitSuccess: () => void; // Callback function to notify parent component
}

const appsScriptWebAppUrl = process.env
  .NEXT_PUBLIC_APPS_SCRIPT_WEB_APP_URL as string;

const ContactForm: React.FC<ContactFormProps> = ({onSubmitSuccess}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const result = await response.json();
      if (response.ok) {
        // alert("Form submitted successfully!");
        onSubmitSuccess(); // Notify parent component of successful submission
      } else {
        setError("Please try again");
      }
    } catch (error: any) {
      console.error(error);
      setError("An error occurred. Please try again ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col ${
        error.length > 1 ? "space-y-3" : "space-y-5"
      } `}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          className="border-2 rounded-lg py-2 px-4"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        {" "}
        <label htmlFor="email" className="mb-2">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          className="border-2 rounded-lg py-2 px-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Good day..."
          className="border-2 rounded-lg py-2 px-4"
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      {error.length > 1 && <p className=" text-redish-10">{error}</p>}

      <input
        type="submit"
        value={loading ? "Loading..." : "Send Message"}
        disabled={loading} //disables button when loading is true
        className="bg-redish-20 text-white w-fit py-3 px-7 rounded-full hover:bg-redish-10 cursor-pointer "
      />
    </form>
  );
};

export default ContactForm;
