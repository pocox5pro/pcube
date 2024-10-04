"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSectionTwo = () => {
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
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Precision-Driven Software Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At PCUBE Technology, We harness cutting-edge technologies to deliver precision-driven software solutions that align seamlessly with your business objectives. Our dedicated team of experts is committed to providing you with innovative, scalable, and robust applications that enhance operational efficiency and drive success.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Unmatched Client Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We believe in building lasting partnerships with our clients. Our comprehensive support services ensure that you receive timely assistance and guidance, empowering you to navigate the evolving technological landscape with confidence. Your success is our priority.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Expertise in Software Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Specializing in Development, we develop high-performance web applications that are fast, secure, and SEO-optimized. Our solutions are designed to elevate your brand’s digital presence, ensuring a seamless user experience that drives engagement and conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default AboutSectionTwo;
