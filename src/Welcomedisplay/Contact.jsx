import { BiLogoGmail } from "react-icons/bi";
import { FaDiamond, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Contact = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section id="contact">
      <div className="mt-15 mb-30 p-4">
        <div className="p-8">
          <div className="flex mb-1 text-lg" data-aos="zoom-out"
            data-aos-delay="500" data-aos-duration="1000">
            <h2>
              <span className="font-medium">AZEBI-ALEX, </span>Steven{" "}
            </h2>
            <FaDiamond className="mt-2 ml-5 mr-5 text-xs" /> {getCurrentYear()}{" "}
          </div>
          <p className="text-lg py-2" data-aos="fade-right"
            data-aos-delay="700">Let&apos;s work together! 🤝</p>

          <p className="text-lg" data-aos="fade-right"
            data-aos-delay="800">
            Feel free to reach out to me anytime for a conversation on{" "}
            <span className="text-green-500 ml-2 hover:underline">
              <Link to="https://wa.me/+2348135854955"  target="_blank" 
  rel="noopener noreferrer" className="flex">
                <FaWhatsapp className="mt-1 mr-0.5" />
                WhatsApp
              </Link>
            </span>
          </p>
        </div>
        <div className="px-8 flex gap-3 text-lg">
          <p className="text-blue-500 hover:text-black underline" data-aos="fade-up"
            data-aos-delay="500">
            <a href="/documents/AZEBI.pdf" download="AZEBI_Resume.pdf"  target="_blank" 
  rel="noopener noreferrer" className="flex">
              <IoDocumentTextOutline className="mt-1" />Download Resume
            </a>
          </p>
          <p data-aos="fade-up"
            data-aos-delay="800">
            <Link
              to="#"
              onClick={() => (window.location = "mailto:tipo4542@gmail.com")}
            >
              <BiLogoGmail className="mt-1.5" />
            </Link>
          </p>
          <p data-aos="fade-up"
            data-aos-delay="1000">
            {" "}
            <Link to="https://github.com/Tipo45"  target="_blank" 
  rel="noopener noreferrer">
              <FaGithub className="mt-1.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
