import { BiLogoGmail } from "react-icons/bi";
import { FaDiamond, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-slate-950 px-5 py-16 text-white lg:px-8 tablet:py-20 xl:px-12 2xl:px-20 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm tablet:p-10 xl:flex xl:items-end xl:justify-between xl:gap-12 xl:p-14">
          <div className="max-w-2xl">
            <div
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400"
              data-aos="fade-right"
            >
              <span>AZEBI-ALEX, Steven</span>
              <FaDiamond className="text-xs text-primary" />
              <span>{currentYear}</span>
            </div>

            <h2
              className="mt-5 font-primary text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Let&apos;s build something meaningful together.
            </h2>

            <p
              className="mt-5 leading-7 text-slate-300 lg:text-lg"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Have a project, idea, or opportunity in mind? I&apos;d love to
              hear about it. Reach out through WhatsApp, email, or GitHub.
            </p>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 xl:mt-0"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <a
              href="https://wa.me/2348135854955"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>

            <a
              href="/documents/AZEBI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="AZEBI_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <IoDocumentTextOutline className="text-lg" />
              Resume
            </a>

            <a
              href="mailto:tipo4542@gmail.com"
              aria-label="Send Steven an email"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <BiLogoGmail />
            </a>

            <a
              href="https://github.com/Tipo45"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Steven's GitHub profile"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;