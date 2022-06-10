import { useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to_name: "Ajinkya",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: formData.to_name,
    };

    setShowToast(true);

    // clear form
    setFormData({
      name: "",
      email: "",
      message: "",
      to_name: "Ajinkya",
    });

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
    } catch (err) {
      setShowToast(false);
      console.error(err);
    }
  }

  return (
    <section
      id="contact"
      className="p-4 py-8 text-center md:py-10 lg:py-14 dark:text-white 2xl:justify-items-center md:mx-auto relative"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-wide font-bold my-4 text-zinc-700 dark:text-white">
        Contact Me
      </h1>

      <div className="pt-5">
        <p className="text-sm font-[500] dark:font-[400] md:text-base 3xl:text-lg md:w-1/2 lg:w-1/3 3xl:w-1/4 mx-auto">
          Have any questions for me? Just fill out this form to send me a
          message & I'll try to get back to you as soon as possible.
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 lg:w-1/3 3xl:w-1/4 mx-auto py-4 2xl:py-6 3xl:py-8 px-2"
        >
          {/* name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            className="w-full p-2 md:p-2.5 my-3 md:my-4 3xl:my-5 text-sm md:text-base 3xl:text-lg text-black dark:text-white border-2 border-slate-300 dark:border-gray-700 dark:bg-gray-700 placeholder:text-slate-500 placeholder:dark:text-gray-400 focus:border-2 rounded focus:outline-none focus:border-gray-600 focus:dark:border-white"
            placeholder="Your Name"
            onChange={handleChange}
          />

          {/* email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full p-2 md:p-2.5 my-3 md:my-4 3xl:my-5 text-sm md:text-base 3xl:text-lg text-black dark:text-white border-2 border-slate-300 dark:border-gray-700 dark:bg-gray-700 placeholder:text-slate-500 placeholder:dark:text-gray-400 focus:border-2 rounded focus:outline-none focus:border-gray-600 focus:dark:border-white"
            placeholder="Your Email"
            onChange={handleChange}
          />

          {/* subject */}
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            className="w-full p-2 md:p-2.5 my-3 md:my-4 3xl:my-5 text-sm md:text-base 3xl:text-lg text-black dark:text-white border-2 border-slate-300 dark:border-gray-700 dark:bg-gray-700 placeholder:text-slate-500 placeholder:dark:text-gray-400 rounded focus:outline-none focus:border-2 focus:border-gray-600 focus:dark:border-white"
            placeholder="Your message"
            onChange={handleChange}
          ></textarea>

          {/* button */}
          <button className="p-3 text-white px-10 lg:px-12 text-sm md:text-base 2xl:text-base 3xl:text-lg my-5 inline-block bg-button rounded-lg font-bold tracking-wide hover:scale-105 transition-all">
            Send
          </button>

          <p className="dark:text-white font-[500] dark:font-light py-2 text-sm md:text-base 3xl:text-lg">
            or email me at{" "}
            <a
              href="mailto: palaskarajinkya22@gmail.com"
              className="underline underline-offset-1"
            >
              palaskarajinkya22@gmail.com
            </a>
          </p>
        </form>
      </div>

      {/* toast */}
      <Toast show={showToast} text="Message sent successfully." />
    </section>
  );
}

export default Contact;
