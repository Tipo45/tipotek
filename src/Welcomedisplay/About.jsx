import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const focusAreas = [
  "Web development services",
  "Data analysis services",
];

const strengths = [
  {
    title: "Developer's Precision",
    description:
      "Hands-on coding experience helps me turn ideas into practical, technically sound solutions.",
  },
  {
    title: "Product-minded Delivery",
    description:
      "I balance visual polish, usability, performance, and the real goals behind every project.",
  },
  {
    title: "Clear Collaboration",
    description:
      "I communicate clearly, stay organized, and keep projects moving from concept to launch.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="px-5 pb-20 pt-32 lg:px-8 tablet:pt-36 xl:px-12 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              data-aos="fade-down"
            >
              About Tipotek
            </p>

            <h1
              className="mt-4 font-primary text-4xl font-bold leading-tight text-slate-950 lg:text-5xl xl:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tech simplified. Solutions amplified.
            </h1>

            <p
              className="mt-5 leading-7 text-slate-600 lg:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I build thoughtful digital products that help people and businesses
              turn good ideas into useful web experiences.
            </p>
          </header>

          <section className="mt-14 grid gap-10 tablet:grid-cols-3 xl:gap-16">
            <div className="tablet:col-span-2">
              <p
                className="text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                data-aos="fade-right"
              >
                The person behind the work
              </p>

              <h2
                className="mt-3 font-primary text-3xl font-bold text-slate-950 lg:text-4xl"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Building experiences that are easy to use and built to last.
              </h2>

              <div className="mt-7 space-y-6 leading-8 text-slate-600 lg:text-lg">
                <p data-aos="fade-up" data-aos-delay="200">
                  I&apos;m Steven Azebi, the creative force behind Tipotek and a
                  full-stack web developer passionate about crafting useful,
                  intuitive digital experiences. I enjoy turning complex ideas
                  into clear, reliable applications.
                </p>

                <p data-aos="fade-up" data-aos-delay="300">
                  My work focuses on responsive web development with React,
                  Next.js, Tailwind CSS, PocketBase, and Convex. Every project is
                  approached with attention to performance, accessibility, clean
                  code, and the people who will use it.
                </p>

                <p data-aos="fade-up" data-aos-delay="400">
                  I am currently exploring data analysis, developing a strong foundation in
                  data cleaning, visualization, and basic statistical analysis using modern
                  tools. My focus is on gaining practical experience through beginner-friendly
                  projects and continuous learning.
                </p>
              </div>
            </div>

            <aside className="space-y-5">
              <div
                className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm"
                data-aos="fade-left"
              >
                <h3 className="font-primary text-xl font-semibold text-slate-950">
                  Current focus
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3 className="font-primary text-xl font-semibold text-slate-950">
                  Technical toolkit
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800">Development</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS,
                      PocketBase, Convex
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      Analysis
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why work with me
              </p>
              <h2 className="mt-3 font-primary text-3xl font-bold text-slate-950 lg:text-4xl">
                A practical approach to building better products.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 tablet:grid-cols-2 xl:grid-cols-3">
              {strengths.map((strength, index) => (
                <article
                  key={strength.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-primary text-xl font-semibold text-slate-950">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;