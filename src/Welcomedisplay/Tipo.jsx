import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../public/android-icon-192x192.png";
const Tipo = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-2 tablet:grid-cols-2 mt-15 p-4">
        <div className="p-8">
          <div className="mb-8">
            <p
              className="flex text-lg text-gray-500"
              data-aos="fade-right"
              data-aos-delay="1600"
            >
              Hi, I&apos;m Tipo{" "}
              <span role="img" aria-label="wave">
                {" "}
                👋{" "}
              </span>
            </p>
            <h1
              className="text-2xl/10 font-medium font-primary"
              data-aos="fade-up"
              data-aos-delay="1700"
            >
              A Nigerian-based Web Developer passionate about developing
              functional, intuitive websites for seamless user experiences.
            </h1>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 space-y-4 space-x-6 mt-5">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/documents/AZEBI.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
              className="relative cursor-pointer outline-none p-4 rounded-2xl border-2 border-transparent overflow-hidden group bg-gray-100 font-medium text-black text-xl hover:bg-emerald-green hover:text-white transition-colors duration-300 ease-in-out w-50"
              data-aos="fade-right"
              data-aos-delay="1700"
            >
              <span className="relative z-10 flex">
                <IoDocumentTextOutline className="mt-1 mr-1" /> View Resume
              </span>
              <div className="absolute inset-y-0 left-[-100%] w-full bg-blue border-1 border-gray-100 transition-all duration-300 ease-in-out group-hover:left-0 z-0"></div>
            </button>
            <div className="flex space-x-4">
              <Link
                to="https://wa.me/+2348135854955"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="p-4 cursor-pointer bg-gray-200 hover:bg-black group rounded-full items-center justify-center w-14 h-14"
                  data-aos="zoom-in"
                  data-aos-delay="1900"
                >
                  <FaWhatsapp className="text-green-500 ml-1 group-hover:text-white" />
                </button>
              </Link>

              <Link
                to="#"
                onClick={() => (window.location = "mailto:tipo4542@gmail.com")}
              >
                <button
                  className="p-4 cursor-pointer bg-gray-200 hover:bg-black group rounded-full items-center justify-center w-14 h-14"
                  data-aos="zoom-in"
                  data-aos-delay="2000"
                >
                  <BiLogoGmail className="text-black ml-1 group-hover:text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={logo}
            alt=""
            className="rounded-lg w-90 invisible hidden xl:visible xl:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Tipo;
