import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import logo from "../assets/Images/WhatsApp Image 2026-05-15 at 17.14.25(1).jpg";

const Tipo = () => {
  return (
    <section className="overflow-hidden px-5 py-16 lg:px-8 tablet:py-20 xl:px-12 2xl:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 tablet:grid-cols-2 xl:gap-16">
        <div className="order-2 tablet:order-1 mt-10 tablet:mt-0">
          <p
            className="flex items-center gap-2 font-medium text-primary lg:text-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Hi, I&apos;m Tipo <span aria-label="wave" role="img">👋</span>
          </p>

          <h1
            className="mt-4 font-primary text-3xl font-bold leading-tight text-slate-900 lg:text-4xl xl:text-5xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Full-stack developer building functional, intuitive web experiences.
          </h1>

          <p
            className="mt-5 max-w-xl text-gray-700 leading-7 lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I&apos;m a Nigerian-based developer focused on creating fast,
            accessible, and thoughtful applications that solve real problems and
            feel great to use.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="/documents/AZEBITCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <IoDocumentTextOutline className="text-xl" />
              View Resume
            </a>

            <a
              href="https://wa.me/2348135854955"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Tipo on WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full bg-green-50 text-xl text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:tipo4542@gmail.com"
              aria-label="Send Tipo an email"
              className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-xl text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              <BiLogoGmail />
            </a>
          </div>
        </div>

        <div
          className="hidden tablet:flex mx-auto w-full max-w-sm order-2 tablet:max-w-md xl:max-w-lg"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-primary/15 blur-2xl" />
            <img
              src={logo}
              alt="Tipo Azebi"
              className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tipo;