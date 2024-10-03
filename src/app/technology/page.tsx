import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";

import { Metadata } from "next";
import Brands from "@/components/Brands";

export const metadata: Metadata = {
  title: "Service Page | Our Service",
  description: "Custom Software Development One Stop Solution",
  // other metadata
};

const Technology = () => {
  return (
    <>
     <Breadcrumb
        pageName="Our Expertise"
        description="Specialize in delivering cutting-edge technology solutions that drive innovation and efficiency. Our expertise spans across custom software development, cloud solutions, and IT consulting, tailored to meet the unique needs of your business."
      />

     <Brands />

     
    </>
  );
};

export default Technology;
