import React from "react";
import Image from "next/image";

interface ContactFormProps {
  onSubmit?: React.FC;
}

const ContactForm: React.FC<ContactFormProps> = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-5">
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
        ></textarea>
      </div>

      <input
        type="submit"
        value="Send Message"
        className="bg-redish-20 text-white w-fit py-3 px-7 rounded-full hover:bg-redish-10 cursor-pointer "
      />
    </form>
  );
};

export default ContactForm;
