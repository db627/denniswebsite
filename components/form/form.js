import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { serverTimestamp, addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig.js"; // Adjust the path according to your directory structure

const contactFormVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const sendContactForm = async ({ name, email, message }) => {
  try {
    const ref = collection(firestore, "contactFormSubmissions");
    await addDoc(ref, {
      name,
      email,
      message,
      sentAt: serverTimestamp(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [userMessage, setUserMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
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
      ref={ref}
      className="flex flex-col items-center justify-center bg-black bg-opacity-20 p-10"
      id="contact"
      variants={contactFormVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <h2 className="text-6xl mb-4 text-center text-teal-300 font-bold pb-3">Contact Me</h2>
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
