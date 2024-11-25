import React from 'react';
import Button from './components/Button';
import instagramIcon from '../public/assets/instagram.png';
import gmailIcon from '../public/assets/ggmail.png';
import linkedinIcon from '../public/assets/linkedin.png';
import outlookIcon from '../public/assets/outlook.png';

const Contact = () => {
  return (
    <section className="relative inset-0 flex justify-center items-center min-h-screen mt-[-125vh]" id="contact">
      <div className="text-center">
        <h1 className="font-semibold sm:text-4xl text-2xl font-generalisans text-neutral-400 font-bold text-xl text-white transition-colors">
          Contact Me:
        </h1>
        <div className="flex justify-center items-center mt-10 space-x-4">
          <a href="https://www.linkedin.com/in/ilhamsyahrulramadhan/" target="_blank" rel="noopener noreferrer">
            <Button name="LinkedIn" containerClass="w-full" icon={linkedinIcon} />
          </a>
          <a href="mailto:ilham.ramadhan004@binus.ac.id" target="_blank" rel="noopener noreferrer">
            <Button name="Outlook" containerClass="w-full" icon={outlookIcon} />
          </a>
          <a href="mailto:ilhamsr05@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button name="Gmail" containerClass="w-full" icon={gmailIcon} />
          </a>
          <a href="https://www.instagram.com/_ilhamsr" target="_blank" rel="noopener noreferrer">
            <Button name="Instagram" containerClass="w-full" icon={instagramIcon} />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
