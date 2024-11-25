import React from 'react'
import './index.css';
import Button from './components/Button';
import githubIcon from '../public/assets/github.png'; // Import the GitHub icon image


const Work = () => {
    return (
      <section className="c-space relative inset-0 sm:mb-[90vh]" id="work">
      <p className="font-semibold sm:text-4xl text-2xl text-white font-generalisans">
        Other Projects <span> 💻</span>
      </p>


      <div className="grid xl:grid-cols-3 xl:grid-rows-6 
        md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/project1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>[Group Project] Social Sport Web App Design</p>
                <p className="grid-subtext"> The aim of our project is to help users search for or find people with the same interest or passion for a particular sport and also help build a healthy community.</p>
                
                <a href="https://github.com/IlhamRamadhannn/Sport-Social-WebApp" target="_blank" rel="noopener noreferrer">
                <Button name='Open-SourceCode' containerClass='w-full mt-10' icon={githubIcon} /></a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/project2.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>E-Ramen Restaurant Web Project</p>
                <p className="grid-subtext"> This project was created for the final project in the Human and Computer Interaction course. This assignment is made using HTML & CSS with the aim of creating a front-end web design for a ramen restaurant.</p>
               
                <a href="https://github.com/IlhamRamadhannn/E-Ramen-Web-front-end" target="_blank" rel="noopener noreferrer">
                <Button name='Open-SourceCode' containerClass='w-full mt-10' icon={githubIcon} /></a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/project3.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>[Research] Comparative Studies About Sarcasm Analysis</p>
                <p className="grid-subtext"> This code is the code that I use for my research namely "Comparative Sarcasm Analysis".
                  As the title suggests, in this research I made a comparison of 3 different models used to analyze sarcasm words. The model consists of LSTM, BILSTM, and BERT.
                  This code will display the accuracy provided by each model, so that we can make accurate comparisons on the same dataset..</p>
               
                  <a href="https://github.com/IlhamRamadhannn/Sarcasm-Analysis" target="_blank" rel="noopener noreferrer">
                <Button name='Open-SourceCode' containerClass='w-full mt-10' icon={githubIcon} /></a>
            </div>
          </div>
        </div>
        
        </div>
        </section>
      )
    
}

export default Work