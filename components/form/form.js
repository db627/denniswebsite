import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig.js"; // Adjust the path according to your directory structure

export const sendContactForm = async ({ name, email, message }) => {
  try {
    const ref = collection(firestore, "contactFormSubmissions");
    await addDoc(ref, {
      name,
      email,
      message,
      sentAt: new Date(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const ContactForm = () => {
  const [userMessage, setUserMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "", // Changed 'comment' to 'message'
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submitContact = async (e) => {
    e.preventDefault();

    const res = await sendContactForm(formState);
    if (res === 0) {
      setUserMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setUserMessage("Something went wrong! Please try again");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center bg-black bg-opacity-20 p-10"
      id="contact"
    >
      <h2 className="text-6xl mb-4 text-center text-teal-300 font-bold">Contact Me</h2>
      <form
        ref={formRef} 
        className="flex flex-col " 
        style={{width: '90%'}} 
        onSubmit={submitContact}
      >
        <motion.input
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-400 bg-opacity-10 p-2 pl-5 mb-4 rounded-2xl text-white"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" bg-gray-400 bg-opacity-10 p-2 pl-5 mb-4 rounded-2xl text-white"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-400 bg-opacity-10 p-2 pl-5 mb-4 rounded-2xl text-white"
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#008080" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="border-none bg-teal-400 bg-opacity-60 p-2 rounded-lg text-white font-bold"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {userMessage && <div>{userMessage}</div>}
    </motion.div>
  );
};

export default ContactForm;
