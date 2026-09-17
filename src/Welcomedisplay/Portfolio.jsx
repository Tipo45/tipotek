import { Link } from "react-router-dom";
import servicekimg from "../assets/Images/Screenshot 2025-03-24 230157.png";
import tipobrokerimg from "../assets/Images/Screenshot 2025-03-24 230722.png";
import portfolioimg from "../assets/Images/Screenshot 2026-05-16 211653.png";
import EMRMSimg from "../assets/Images/Screenshot 2025-04-15 051447.png";
import TicketsGigimg from "../assets/Images/Screenshot 2025-11-18 214030.png";
import ResumeBuilderimg from "../assets/Images/Screenshot 2026-01-27 200416.png";
import CrimsonCartimg from "../assets/Images/Screenshot 2026-05-16 203020.png";
import CASCADEimg from "../assets/Images/Screenshot 2026-08-07 023141.png";
import Ajsimg from "../assets/Images/Screenshot 2026-09-11 141306.png";
import { MdArrowOutward } from "react-icons/md";

const Portfolio = () => {

  const projects = [
    {
      title: "Service Konnect",
      image: servicekimg,
      description:
        "A Progressive Web App (PWA) connecting skilled artisans with clients, offering effortless booking, and secure transactions. Developed with React and Pocketbase, it features offline-first capabilities for reliable access in low-connectivity environments.",
      link: "https://service-konnect.vercel.app",
    },
    {
      title: "My Portfolio",
      image: portfolioimg,
      description:
        "A stylish and high-performance portfolio built with React.js and Tailwind CSS, showcasing clean code and modern UI design.",
      link: "https://tipotek.vercel.app",
    },
    {
      title: "Tipo's Broker",
      image: tipobrokerimg,
      description:
        "A React-powered brokerage platform built with React.js and Tailwind CSS demonstrating responsive UI design.",
      link: "https://tipos-broker.vercel.app",
    },
    {
      title: "Resume Builder",
      image: ResumeBuilderimg,
      description:
        "A dynamic resume creation tool built with React and Tailwind CSS.",
      link: "https://resume-builder-mocha-nu.vercel.app",
    },
    {
      title: "Electronic Medical Records Management System",
      image: EMRMSimg,
      description:
        "A secure EMRMS platform to streamline healthcare data management. This full-stack system enables clinics to digitize patient records with features like real-time vitals tracking (BP, pulse, temperature), appointment scheduling, and prescription management. Built with React.js and PocketBase, it offers role-based access, and responsive dashboards for both desktop and mobile use.",
      link: "https://med-records-management-system.vercel.app",
    },
    {
      title: "Event Tickets Management System",
      image: TicketsGigimg,
      description:
        "A secure event ticketing platform where users can browse events, purchase tickets, and manage bookings with real-time availability tracking built with React.js and Pocketbase.",
      link: "https://ticket-gigs.vercel.app",
    },
    {
      title: "Crimson Cart",
      image: CrimsonCartimg,
      description:
        "A role-based e-commerce platform offering PWA installation. Sellers can list products, manage inventory, and track orders, while buyers browse categories, make purchases, and enjoy offline access. Built with NextJs, Tailwind CSS, Framer Motion, and Convex.",
      link: "https://crimson-cart-umber.vercel.app",
    },
    {
      title: "CASCADE 2026",
      image: CASCADEimg,
      description:
        "CASCADE 2026 is a modern web application designed to streamline the registration and administration of the International Conference on Cybersecurity, Artificial Intelligence, Smart Systems, Computing, Analytics, Data and Emerging Technologies (CASCADE 2026). The platform enables authors, participants, and students to register, submit research papers, manage co-authors, upload conference documents, make payments, and receive automated confirmation emails. It also provides an administrative dashboard for managing registrations, tracking payments, viewing submitted papers, and communicating with attendees, all through a secure and user-friendly interface.",
      link: "https://cascade-nine-delta.vercel.app",
    },
    {
      title: "Aj's Portfolio",
      image: Ajsimg,
      description: "A sleek and modern portfolio website built with React.js and Tailwind CSS, showcasing clean code, responsive design, and a user-friendly interface.",
      link: "https://aj-s-portfolio.vercel.app",}
  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 px-5 py-16 lg:px-8 tablet:py-20 xl:px-12 2xl:px-20 scroll-mt-24"
    >
      <div
        className="mx-auto mb-10 max-w-3xl text-center tablet:mb-14"
        data-aos="zoom-in"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Selected work
        </p>
        <h2 className="font-primary text-3xl font-bold text-slate-900 lg:text-4xl xl:text-5xl">
          Projects I've Built
        </h2>
        <p className="mt-4 leading-7 lg:text-lg">
          A selection of practical, user-focused web applications built with
          modern technologies.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 tablet:grid-cols-2 tablet:gap-8 xl:grid-cols-3 xl:gap-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-primary text-xl font-semibold text-slate-900 lg:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`View ${project.title}`}
              >
                View Project
                <MdArrowOutward />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
