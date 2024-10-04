"use client";
import React, {useEffect, useRef} from "react";
import NewsLatterBox from "./NewsLatterBox";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {


 const form = useRef()

 
 

 const sendEmail = (e) => {
  e.preventDefault();

  const serviceId = 'service_1yyk3dl'
 const templateId = 'template_v9955di'
 const publicKey = 'J7e5GZPoMVGKjGlM6'

  const formData = new FormData(e.target);
  const emailData = {
    from_name: formData.get('name'), 
    from_email: formData.get('email'), 
    subject: formData.get('subject'),
    phone: formData.get('phone'), 
    message: formData.get('message'), 
    to_email: "hellopcube@gmail.com",
    to_name: "Chirag Patel" 
  };


  

  emailjs
    .send(serviceId, templateId, emailData, publicKey)
    .then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Error sending message. Please try again.");
        console.log(error.text);
      }
    );
  e.target.reset(); 
};
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

 
  
  
 
  

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-2 flex flex-wrap">
          <div className="max-w-c-1390 px-7.5 lg:px-15 lg:pt-15 relative mx-auto pt-10 xl:px-20 xl:pt-20">
            <div className="-z-1 absolute left-0 top-0 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
            {/* <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div> */}

            <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
                className="animate_top shadow-solid-8 dark:border-strokedark xl:p-15 w-full rounded-lg bg-white p-7 dark:border dark:bg-black md:w-3/5 lg:w-3/4"
              >
                <h2 className="xl:text-sectiontitle2 mb-10 text-3xl font-semibold text-black dark:text-white">
                  Send a message
                </h2>

                <form
                ref = {form}
                  onSubmit={sendEmail}
                >
                  <div className="gap-7 mb-8 flex flex-col lg:flex-row lg:justify-between lg:gap-14">
                    <input
                    style={{ position: 'relative', zIndex: 10 }}
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                    />

                    <input
                    style={{ position: 'relative', zIndex: 10 }}
                      type="email"
                       name="email"
                      placeholder="Email address"
                      className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                    />
                  </div>

                  <div className="gap-7 mb-12 flex flex-col lg:flex-row lg:justify-between lg:gap-14">
                    <input
                    style={{ position: 'relative', zIndex: 10 }}
                      type="text"
                       name="subject"
                      placeholder="Subject"
                      className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                    />

                    <input
                    style={{ position: 'relative', zIndex: 10 }}
                      type="text"
                       name="phone"
                      placeholder="Phone number"
                      className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                    />
                  </div>

                  <div className="mb-11 flex">
                    <textarea
                    style={{ position: 'relative', zIndex: 10 }}
                     name="message"
                      placeholder="Message"
                      rows={4}
                      className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white"
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap gap-4 xl:justify-between ">
                    <div className="mb-4 flex cursor-pointer md:mb-0">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700 ">
                        <svg
                          className="opacity-0 peer-checked:group-[]:opacity-100"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <label
                        htmlFor="default-checkbox"
                        className="flex max-w-[425px] cursor-pointer select-none pl-5"
                      >
                        By clicking Checkbox, you agree to use our “Form” terms
                        And consent cookie usage in browser.
                      </label>
                    </div>

                    <button
                      aria-label="send message"
                      type="submit"
                      className="hover:bg-gray-700 hover:scale-110 hover:dark:bg-gray-400 inline-flex items-center gap-2.5 rounded-full bg-black dark:bg-gray-200 px-6 py-3 font-medium text-white dark:text-gray-900 duration-300 ease-in-out"
                    >
                      Send Message
                      <svg
                        className="fill-blue-500"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </motion.div>

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
                className="animate_top md:p-7.5 xl:pt-15 w-full md:w-2/5 lg:w-[26%] "
              >
                <div style={{ position: 'relative' }}>
                <h2 className="xl:text-sectiontitle2 mb-12 text-3xl font-semibold text-black dark:text-white">
                  Find us
                </h2>
                

                <div className="5 mb-7">
                  <div className="flex gap-2">
                    <div className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <g id="SVGRepo_bgCarrier" ></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                          stroke="#000000"
                          
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    </div>
                    <div className="hidden dark:flex">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <g id="SVGRepo_bgCarrier" ></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    </div>
                    <h3 className="text-metatitle3 mb-4 font-bold text-black dark:text-white">
                      Our Loaction
                    </h3>
                  </div>
                  <p>Iscon Heights, Iscon Cross Road, Ahmedabad</p>
                </div>
                <div className="5 mb-7">
                  <div className="flex gap-2">
                    <div className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <g id="SVGRepo_bgCarrier" ></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                          stroke="#000000"
                       
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="#000000"
                         
                          stroke-linecap="round"
                        ></rect>{" "}
                      </g>
                    </svg>
                    </div>
                    <div className="hidden dark:flex">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <g id="SVGRepo_bgCarrier" ></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                        ></rect>{" "}
                      </g>
                    </svg>
                    </div>
                    <h3 className="text-metatitle3 mb-4 font-bold text-black dark:text-white">
                      Email Address
                    </h3>
                  </div>
                  <p>
                    <a href="#">hellopcube@gmail.com</a>
                  </p>
                </div>
                </div>
                {/* <div>
                  <div className="flex gap-2">
                    <svg
                      viewBox="0 -0.5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <g id="SVGRepo_bgCarrier"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                          stroke="#000000"
                          
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h4 className="text-metatitle3 mb-4 font-bold text-black dark:text-white">
                      Phone Number
                    </h4>
                  </div>
                  <p>
                    <a href="#">+91 9090 987 678678</a>
                  </p>
                </div> */}
                
              </motion.div>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";

// const Contact = () => {
//   /**
//    * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
//    * Reason: To fix rehydration error
//    */

//   return (
//     <>
//       {/* <!-- ===== Contact Start ===== --> */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0">

//       </section>
//       {/* <!-- ===== Contact End ===== --> */}
//     </>
//   );
// };

// export default Contact;
