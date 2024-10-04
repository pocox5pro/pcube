"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Statistics = () => {
    const List = ({ text }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] min-w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          {text}
        </p>
      );

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.2, delay: 0.25 }}
      viewport={{ once: true }}
    >
      <section id="statistics" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container mx-auto">
          <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <h1 className=" text-4xl font-bold mb-9">
                  The PCUBE <span className="border-b-4 border-yellow-500">Advantage</span>
                </h1>

                <div className="flex flex-wrap">
                  
                <List text="Simplified, fast-track onboarding: Ramp up and start working on your project in three business days or less." />
                  <List text="A large talent pool: Pick from 2000+ active software developers and 10,000+ pre-vetted engineers on file." />
                  <List text="Save big: Our clients save up to $2,000 per hire." />
                  <List text="We’re fully remote: Build distributed, global teams that deliver on time, every time." />
                 
                    
                 
                </div>
                
                
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto max-w-[500px] lg:mr-0">
                  {/* <Image
                   src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    width={200}
                    height={100}
                    className="w-48 mx-auto max-w-full drop-shadow-lg"
                  /> */}

                  <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  width={700}
                  height={100}
                  className=" mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="statistics_savebluebox">
            <div className="blue_boxwrapper grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              
              <div className="calander_icon relative">
                <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 min-h-[176px] text-white flex items-center">
                <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"><rect x="-2.4" y="-2.4" width="28.80" height="25" rx="0" fill="#7ca9ff" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z" fill="#ffffff"></path> <path d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10Z" fill="#ffffff"></path> </g></svg>
                  <div className="flex flex-col">
                    Save
                    <h3 className="text-value text-2xl font-bold">60 <span className="suffix-text font-semibold text-lg">Days</span></h3>
                  </div>
                </div>
                <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
              </div>
              
              <div className="calander_icon relative">
                <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 min-h-[176px] text-white flex items-center">
   
                <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill="#7ca9ff" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#fdfcfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <div className="flex flex-col">
                    Save
                    <h3 className="text-value text-2xl font-bold">$2000 Per Hire</h3>
                  </div>
                </div>
                <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
              </div>
              
              <div className="calander_icon relative">
                <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 min-h-[176px] text-white flex items-center">
                <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill="#7ca9ff" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <div className="flex flex-col">
                    Onboarding
                    <h3 className="text-value text-2xl font-bold"><span className="suffix-text">Hire in 3 Days</span></h3>
                  </div>
                </div>
                <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
              </div>
              
              <div className="calander_icon relative">
                <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 min-h-[176px] text-white flex items-center">
                <svg fill="#fdfcfc" viewBox="-3.19 -3.19 38.26 38.26" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.19" y="-3.19" width="38.26" height="38.26" rx="0" fill="#7ca9ff" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-673.292 -327.728)"> <path d="M689.741,329.778l9.241,2.448-9.242,2.7-9.82-2.7,9.821-2.449m.012-2.05a.478.478,0,0,0-.113.013L673.752,331.7a.465.465,0,0,0-.01.9l15.887,4.366a.467.467,0,0,0,.123.017.476.476,0,0,0,.13-.019l14.951-4.366a.465.465,0,0,0-.011-.9l-14.95-3.962a.479.479,0,0,0-.119-.015Z"></path> <path d="M696.013,349.95H682.63a3.932,3.932,0,0,1-4.124-3.7v-8.831a1,1,0,0,1,2,0v8.831a1.95,1.95,0,0,0,2.124,1.7h13.383a1.949,1.949,0,0,0,2.125-1.7v-8.831a1,1,0,0,1,2,0v8.831A3.932,3.932,0,0,1,696.013,349.95Z"></path> <path d="M674.292,341.16a1,1,0,0,1-1-1v-4.208a1,1,0,0,1,2,0v4.208A1,1,0,0,1,674.292,341.16Z"></path> </g> </g></svg>
                  <div className="flex flex-col">
                    Hire
                    <h3 className="text-value text-2xl font-bold"><span className="suffix-text">Top 3% Engineering Talent</span></h3>
                  </div>
                </div>
                <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
              </div>
            </div>
          </div> */}
          <div className="statistics_savebluebox">
    <div className="blue_boxwrapper grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {/** First Box */}
        <div className="calander_icon relative">
            <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 h-[176px] text-white flex items-center">
                <svg viewBox="-2.4 -2.4 28.80 28.80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" ><rect x="-2.4" y="-2.4" width="28.80" height="28.80" fill="#7ca9ff"></rect></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z" fill="#ffffff"></path>
                        <path d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#ffffff"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10Z" fill="#ffffff"></path>
                    </g>
                </svg>
                <div className="flex flex-col ml-4">
                    Save
                    <h3 className="text-value text-2xl font-bold">60 <span className="suffix-text font-semibold text-lg">Days</span></h3>
                </div>
            </div>
            <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
        </div>
        
        {/** Second Box */}
        <div className="calander_icon relative">
            <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 h-[176px] text-white flex items-center">
                <svg viewBox="-2.4 -2.4 28.80 28.80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#fdfcfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
                <div className="flex flex-col ml-4">
                    Save
                    <h3 className="text-value text-2xl font-bold">$2000 Per Hire</h3>
                </div>
            </div>
            <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
        </div>
        
        {/** Third Box */}
        <div className="calander_icon relative">
            <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 h-[176px] text-white flex items-center">
                <svg viewBox="-2.4 -2.4 28.80 28.80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
                <div className="flex flex-col ml-4">
                    Onboarding
                    <h3 className="text-value text-2xl font-bold"><span className="suffix-text">Hire in 3 Days</span></h3>
                </div>
            </div>
            <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
        </div>
        
        {/** Fourth Box */}
        <div className="calander_icon relative">
            <div className="blue_boxinner bg-[#7CA6FF] rounded-lg p-4 h-[176px] text-white flex items-center">
                <svg fill="#fdfcfc" viewBox="-3.19 -3.19 38.26 38.26" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier"> 
                        <g transform="translate(-673.292 -327.728)"> 
                            <path d="M689.741,329.778l9.241,2.448-9.242,2.7-9.82-2.7,9.821-2.449m.012-2.05a.478.478,0,0,0-.113.013L673.752,331.7a.465.465,0,0,0-.01.9l15.887,4.366a.467.467,0,0,0,.123.017.476.476,0,0,0,.13-.019l14.951-4.366a.465.465,0,0,0-.011-.9l-14.95-3.962a.479.479,0,0,0-.119-.015Z"></path> 
                            <path d="M696.013,349.95H682.63a3.932,3.932,0,0,1-4.124-3.7v-8.831a1,1,0,0,1,2,0v8.831a1.95,1.95,0,0,0,2.124,1.7h13.383a1.949,1.949,0,0,0,2.125-1.7v-8.831a1,1,0,0,1,2,0v8.831A3.932,3.932,0,0,1,696.013,349.95Z"></path> 
                            <path d="M674.292,341.16a1,1,0,0,1-1-1v-4.208a1,1,0,0,1,2,0v4.208A1,1,0,0,1,674.292,341.16Z"></path> 
                        </g> 
                    </g>
                </svg>
                <div className="flex flex-col ml-4">
                    Hire
                    <h3 className="text-value text-2xl font-bold"><span className="suffix-text">Top 3% Engineering Talent</span></h3>
                </div>
            </div>
            <span className="absolute right-[-19px] top-1/2 transform -translate-y-1/2 w-4 h-1 bg-[#7CA6FF]"></span>
        </div>
    </div>
</div>


          <div className="do-link mt-5 flex justify-center">
            <button className=" bg-blue-600 text-white py-4 px-8 rounded-xl text-sm font-medium">Hire a Software Developer</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Statistics;
