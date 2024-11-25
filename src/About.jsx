import React from 'react';
import './index.css';
import Button from './components/Button';
import githubIcon from '../public/assets/github.png'; // Import the GitHub icon image

const About = () => {
  return (
    <section className="c-space relative inset-0" id="about" style={{ marginTop: '-300px' }}>
      <div className=" py-24 sm:py-32">
      <div className=" mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-white-600"></h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-950 text-white sm:text-5xl">
          About Me 🧑‍🦰
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative lg:row-span-2">
            <div className="grid-container absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <div className="grid">
            <img
              src="../public/assets/userface.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-950 max-lg:text-center">
                  Bio
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-600 max-lg:text-center">
                Hello, I’m Ilham Syahrul Ramadhan
                 I’m an undergraduate student at Binus University, major in Computer Science.
                I have been interested in UI/UX web design, front-end web, data analyst and data scientist. <br/><br/> I am happy to share my work via:  
                </p>
                <a href="https://github.com/IlhamRamadhannn" target="_blank" rel="noopener noreferrer">
                <Button name='Github' containerClass='w-full mt-10' icon={githubIcon} /></a>
              </div></div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              </div>
            </div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className=" grid-container absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="grid">
            <img
              src="../public/assets/language.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            </div>
              
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-950 max-lg:text-center">Hard Skill</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-600 max-lg:text-center">
                - UI/UX Web Design <br />
                - Database Management<br />
                - Programming language (Javascript, php, React, SQL, Python, R)<br />
                - Microsoft Office (Word, Excel, PowerPoint)
                </p>
              </div>
              
            </div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className=" grid-container absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-950 max-lg:text-center">Soft Skill</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-600 max-lg:text-center">
                - Communication <br />
                - Creative Thinking<br />
                - Collaboration<br />
                - Teamwork<br />
                - Time management<br />
                - Flexible
                </p>
              </div>

             <div className="grid">
            <img
              src="../public/assets/light.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            </div>
            </div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="grid-container absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white text-950 max-lg:text-center">
                  Working Experience
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-600 max-lg:text-center">
                Working Experiences 🏢

            I have experience working on: <br /><br />

            - 2020 - 2021 | **Online Store Administration Staff at PT. BOLI MAKMUR SEJAHTERA** Responsible for product management, product visuals, as well as advertising on products. <br /><br />
            - 2023 - 2024 | **Freelance and Personal Administrative Staff Shopper at JastipFeeMurah.** Responsible for order recapitulation and service to customers. <br /><br />
                </p>
              </div>
              <div className="grid">
            <img
              src="../public/assets/handshake.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>


      {/* <p className="font-semibold sm:text-4xl text-2xl text-white font-generalisans">
        About Me<span> 👤</span>
      </p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 
        md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/userface.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>Hello, I’m Ilham Syahrul Ramadhan</p>
                <p className="grid-subtext"> I’m an undergraduate student at Binus University, major in Computer Science.
                I have been interested in UI/UX web design, front-end web, data analyst and data scientist. <br/><br/> I am happy to share my work via:  </p>
                <Button name='Github' containerClass='w-full mt-10' icon={githubIcon} />
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/handshake.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>Working Experiences 🏢</p>
                <p className="grid-subtext"> I have experience working on:
                <br/><br/> - 2020 - 2021 | **Online Store Administration Staff at PT. BOLI MAKMUR SEJAHTERA**
                Responsible for product management,
                product visuals, as well as advertising on products.<br/><br/>
                - 2023 - 2024 | **Freelance and Personal Administrative Staff
                Shopper at JastipFeeMurah.**
                Responsible for order recapitulation and service to customers.</p>        
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/language.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'>Hard Skill</p>
                <p className="grid-subtext"> - UI/UX Web Design <br />
                            - Database Management<br />
                            - Programming language (Javascript, php, React, SQL,
                            Python, R)<br />
                            - Microsoft Office (Word, Excel, PowerPoint) </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../public/assets/light.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
                <p className='grid-headtext'> Soft Skill </p>
                <p className="grid-subtext">
                                    - Communication <br/>
                                    - Creative Thinking<br/>
                                    - Collaboration<br/>
                                    - Teamwork<br/>
                                    - Time management<br/>
                                    - Flexible</p>        
            </div>
          </div>
        </div>
        </div> */}

    
    </section>
  );
};

export default About;
 