import { Link } from "react-router-dom";
import servicekimg from "../assets/Images/Screenshot 2025-03-24 230157.png";
import tipobrokerimg from "../assets/Images/Screenshot 2025-03-24 230722.png";
import portfolioimg from "../assets/Images/Screenshot 2026-05-16 211653.png";
import EMRMSimg from "../assets/Images/Screenshot 2025-04-15 051447.png";
import TicketsGigimg from "../assets/Images/Screenshot 2025-11-18 214030.png";
import ResumeBuilderimg from "../assets/Images/Screenshot 2026-01-27 200416.png";
import CrimsonCartimg from "../assets/Images/Screenshot 2026-05-16 203020.png"
import AmpreshGroupsimg from "../assets/Images/Screenshot 2026-05-28 162550.png";

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
      title: "Tipo's Broker",
      image: tipobrokerimg,
      description:
        "A React-powered brokerage platform integrating stock and crypto trading with real-time market data and secure transactions.",
      link: "https://tipos-broker.vercel.app",
    },
    {
      title: "My Portfolio",
      image: portfolioimg,
      description:
        "A stylish and high-performance portfolio built with React.js and Tailwind CSS, showcasing clean code and modern UI design.",
      link: "https://tipotek.vercel.app",
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
        "A secure event ticketing platform where users can browse events, purchase tickets, and manage bookings with real-time availability tracking.",
      link: "https://ticket-gigs.vercel.app",
    },
    {
      title: "Resume Builder",
      image: ResumeBuilderimg,
      description:
        "A dynamic resume creation tool built with React, Tailwind CSS, and Convex featuring real-time previews, templates, and export functionality.",
      link: "https://resume-builder-mocha-nu.vercel.app",
    },
    {
      title: "Crimson Cart",
      image: CrimsonCartimg,
      description:
        "A role-based e-commerce platform offering PWA installation. Sellers can list products, manage inventory, and track orders, while buyers browse categories, make purchases, and enjoy offline access. Built with NextJs, Tailwind CSS, Framer Motion, and Convex.",
      link: "https://crimson-cart-psi.vercel.app",
    },
    {
      title: "Ampresh Groups",
      image: AmpreshGroupsimg,
      description:
        "A modern business website for Ampresh Groups, showcasing their services and portfolio with a responsive design.",
      link: "https://ampresh-groups.vercel.app",
    }
  ];

  return (
    <section id="projects">
      <div className="flex justify-center xl:justify-normal xl:text-4xl p-8" data-aos="zoom-in"
        data-aos-delay="1000">
        <h2 className="text-xl font-primary font-bold">My Projects</h2>
      </div>
      <div className="p-4 grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => ( <div key={index} className="px-8 mt-15">
          <img src={project.image} alt={project.title} className="rounded-md mb-4" data-aos="zoom-out"
            data-aos-delay="300" />
          <h2 className=" text-xl font-primary font-medium" data-aos="fade-left"
            data-aos-delay="1000">
            {project.title}
          </h2>
          <p className="text-gray-600 text-md mt-4" data-aos="fade-up"
            data-aos-delay="800">
            {project.description}
          </p>
          <div className="mt-8">
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white hover:bg-primary font-medium outline-2 hover:outline-outline-z text-lg text-black hover:text-white p-4 rounded-2xl transition-all duration-300 hover:-translate-y-3 focus:outline-white" data-aos="fade-up"
                data-aos-delay="500">
                View Project
              </button>
            </Link>
          </div>
        </div>))}
        
      </div>
    </section>
  );
};

export default Portfolio;
 