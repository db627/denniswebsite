import { motion } from 'framer-motion';
import Github from '/public/github_logo.png'
import Image from 'next/image'
import Instagram from '/public/instagram_logo.png'

const footerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {


  return (
    <footer
      variants={footerVariants}
      initial='hidden'
      className='grid grid-cols-1 gap-4 p-4 text-white'
    >
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        <div className='flex justify-center'>
          <a href='/privacy_page' className='hover:underline'>
            Privacy Policy
          </a>
        </div>
        <div className='flex justify-center'>
          <a href='https://www.linkedin.com/in/dennis-boguslavskiy/' className='hover:underline' target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
        </div>
        <div className='flex justify-center'>
          <a href='#top' className='hover:underline'>
            Back to Top
          </a>
        </div>
      </div>
      <div className='flex gap-4 mt-4 items-center justify-center'>
        {/* Replace # with your actual social media links */}
        <a href='https://instagram.com/dennisbogus' className='hover:underline justify-center' target='_blank'>
          {/* Replace this with your actual social media icon */}
          <Image src={Instagram} alt="Instagram" width={20}/>
        </a>
        <a href='https://github.com/db627' className='hover:underline justify-center ' target='_blank'>
          {/* Replace this with your actual social media icon */}
          <Image src={Github} alt="GitHub" width={20}/>
        </a>
      </div>
    </footer>
  );
}
