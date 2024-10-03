import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Get In Touch",
  description: "Get in touch with us! We are here to answer your questions and provide support for our services. Reach out today to discuss how we can help you.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions or need assistance? Our team is ready to help you with any inquiries. Contact us to find out more about our services!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
