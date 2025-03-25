import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const About = () => {
  return (
    <section>
        <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 mt-10">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-emerald-600 mb-4" data-aos="fade-down" data-aos-delay="600">
            About Tipotek
          </h1>
          <p className="text-xl text-gray-600" data-aos="zoom-in" data-aos-delay="800">
            Tech Simplified. Solution Amplified
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800" data-aos="fade-right" data-aos-delay="600">
              Who Am I?
            </h2>
            <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="1200">
              I&apos;m the creative force behind Tipotek, a passionate web developer
              dedicated to crafting exceptional digital experiences. With a keen
              eye for detail and a commitment to clean, efficient code, I bring
              ideas to life in the browser.
            </p>

            <h3 className="text-2xl font-medium mt-8 mb-4 text-gray-800" data-aos="fade-right" data-aos-delay="800">
              My Development Approach
            </h3>
            <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
              I specialize in responsive, user-friendly web development with
              modern technologies like React, Next.js, and Tailwind CSS. My
              solutions blend aesthetic appeal with advanced functionalities,
              ensuring your digital presence works beautifully across all
              devices.
            </p>

            <h3 className="text-2xl font-medium mt-8 mb-4 text-gray-800" data-aos="fade-right" data-aos-delay="1000">
              Beyond Development
            </h3>
            <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="1200">
              While web development is my expertise now, I&apos;m actively expanding
              my skillset into IT project management. This
              unique combination allows me to not just build applications, but
              also manage the complete project
              lifecycle.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="700">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                Current Focus
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Web Development Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Project Management Methodologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="900">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-600">Web Development</h4>
                  <p className="text-sm">
                    HTML/CSS, JavaScript, React
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">
                    Project Management
                  </h4>
                  <p className="text-sm">Agile, Scrum</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="1100">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                Career Vision
              </h3>
              <p className="text-sm leading-relaxed">
                My goal is to evolve into a versatile tech professional who can
                bridge development, and project leadership -
                delivering comprehensive solutions that drive business value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800" data-aos="zoom-in" data-aos-delay="500">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg" data-aos="fade-up" data-aos-delay="900">
              <h3 className="text-xl font-medium mb-3 text-emerald-600">
                Developer&apos;s Precision
              </h3>
              <p>
                Hands-on coding experience ensures realistic, technically sound
                solutions
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg" data-aos="fade-up" data-aos-delay="1100">
              <h3 className="text-xl font-medium mb-3 text-emerald-600">
                Manager&apos;s Vision
              </h3>
              <p>
                Big-picture thinking to align projects with strategic objectives
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
