import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { serverTimestamp, addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig.js";

const contactFormVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
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
      setUserMessage("Something went wrong! Please try again! If more errors persist email me at dennisboguslavskiy@gmail.com !");
    }
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center  p-20 text-white"
      id="contact"
      variants={contactFormVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <h2 className="text-4xl md:text-6xl text-zinc-100 underline font-semibold mb-8 text-center">Contact Me</h2>
      <form
        ref={formRef} 
        className="flex flex-col space-y-4" 
        style={{width: '90%'}} 
        onSubmit={submitContact}
      >
        <motion.input
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-transparent border border-teal-600 rounded-lg"
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
          className="p-4 border bg-transparent border-teal-600 rounded-lg"
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
          className="p-4 border bg-transparent border-teal-600 rounded-lg text-white"
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#4FD1C5" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-zinc-800 rounded-lg font-bold"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {userMessage && <div className="mt-6 text-white font-bold">{userMessage}</div>}
    </motion.div>
  );
};

export default ContactForm;
