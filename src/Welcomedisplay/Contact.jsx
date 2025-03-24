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
      <div className="mt-15 p-4">
        <div className="p-8">
          <div className="flex mb-1 text-lg">
            <h2>
              <span className="font-medium">AZEBI-ALEX, </span>Steven{" "}
            </h2>
            <FaDiamond className="mt-2 ml-5 mr-5 text-xs" /> {getCurrentYear()}{" "}
          </div>
          <p className="text-lg py-2">Let&apos;s work together! 🤝</p>

          <p className="flex text-lg">
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
          <p className="text-blue-500 underline">
            <Link to="/"  target="_blank" 
  rel="noopener noreferrer" className="flex">
              <IoDocumentTextOutline className="mt-1" /> Resume
            </Link>
          </p>
          <p>
            <Link
              to="#"
              onClick={() => (window.location = "mailto:tipo4542@gmail.com")}
            >
              <BiLogoGmail className="mt-1.5" />
            </Link>
          </p>
          <p>
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
