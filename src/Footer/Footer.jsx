import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-white lg:px-8 tablet:px-10 xl:px-12 2xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 tablet:flex-row tablet:items-center tablet:justify-between">
        <div data-aos="fade-up">
          <a
            href="#top"
            className="font-primary text-2xl font-extrabold tracking-tight transition-colors hover:text-primary"
            aria-label="Back to top"
          >
            Tipotek<span className="text-primary">.</span>
          </a>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            Building practical, intuitive web applications for better digital
            experiences.
          </p>
        </div>

        <div
          className="flex items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="https://wa.me/2348135854955"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-green-400 transition-all hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:tipo4542@gmail.com"
            aria-label="Send an email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950"
          >
            <BiLogoGmail className="text-lg" />
          </a>

          <a
            href="https://github.com/Tipo45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-center text-sm text-slate-500 tablet:flex-row tablet:items-center tablet:justify-between tablet:text-left">
        <p>© {currentYear} Tipotek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;