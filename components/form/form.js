import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { firestore } from "firebaseConfig";
import { addDoc, collection } from "firebase/firestore/lite";


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
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    comment: "",
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
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center b"
    >
      <h2 className="text-4xl mb-4">Contact Me</h2>
      <form className="flex flex-col border-black border-2 rounded-lg p-10" style={{width: '60em'}} onSubmit={submitContact}>
        <motion.input
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="border-none bg-transparent p-2 mb-4 rounded-lg outline-none text-white placeholder-white"
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
          className="border-none bg-transparent p-2 mb-4 rounded-lg outline-none text-white placeholder-white"
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
          className="border-none bg-transparent p-2 mb-4 rounded-lg outline-none text-white placeholder-white"
          name="comment"
          placeholder="Your Message"
          value={formState.comment}
          onChange={handleChange}
          required
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#008080" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="border-none bg-teal-400 p-2 rounded-lg text-white font-bold"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {message && <div>{message}</div>}
    </motion.div>
  );
};

export default ContactForm;
