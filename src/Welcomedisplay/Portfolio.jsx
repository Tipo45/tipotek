import { Link } from "react-router-dom";
import servicekimg from "../assets/Images/Screenshot 2025-03-24 230157.png";
import tipobrokerimg from "../assets/Images/Screenshot 2025-03-24 230722.png";
import portfolioimg from "../assets/Images/Screenshot 2025-03-24 231604.png";
const Portfolio = () => {
  return (
    <section id="projects">
      <div className="flex justify-center xl:justify-normal xl:text-4xl p-8">
          <h2 className="text-xl font-primary font-bold">My Projects</h2>
        </div>
      <div className="p-4 grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3">
        <div className="px-8 mt-10">
          <img src={servicekimg} alt="" className="rounded-md mb-4" />
          <h2 className=" text-xl font-primary font-medium">Service Konnect</h2>
          <p className="text-gray-300 text-md mt-4">
            A Progressive Web App (PWA) connecting skilled artisans with
            clients, offering effortless booking, and secure transactions.
            Developed with React and Pocketbase, it features offline-first
            capabilities for reliable access in low-connectivity environments.
          </p>
          <div className="mt-8">
           <Link to="https://service-konnect.vercel.app"  target="_blank" 
  rel="noopener noreferrer">
           <button className="bg- hover:bg-darker-emerald-green font-medium outline-2 hover:outline-outline-z text-lg text-black hover:text-white p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 focus:outline-white">
              View Project
            </button></Link>
          </div>
        </div>
        <div className="px-8 mt-15">
          <img src={tipobrokerimg} alt="" className="rounded-md mb-4" />
          <h2 className=" text-xl font-primary font-medium">
            Tipo&apos;s Broker
          </h2>
          <p className="text-gray-300 text-md mt-4">
            A React-powered brokerage platform that integrates stock and crypto
            trading, offering real-time data and secure transactions.
          </p>
          <div className="mt-8">
            <Link to="https://tipos-broker.vercel.app"  target="_blank" 
  rel="noopener noreferrer">
              <button className="bg- hover:bg-darker-emerald-green font-medium outline-2 hover:outline-outline-z text-lg text-black hover:text-white p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 focus:outline-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="px-8 mt-15">
          <img src={portfolioimg} alt="" className="rounded-md mb-4" />
          <h2 className=" text-xl font-primary font-medium">My Portfolio</h2>
          <p className="text-gray-300 text-md mt-4">
            A stylish and high-performance portfolio built with React.js and
            Tailwind CSS, highlighting clean code and innovative UI design.
          </p>
          <div className="mt-8">
            <Link to="https://.tipotek.vercel.app"  target="_blank" 
  rel="noopener noreferrer">
              <button className="bg- hover:bg-darker-emerald-green font-medium outline-2 hover:outline-outline-z text-lg text-black hover:text-white p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 focus:outline-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
