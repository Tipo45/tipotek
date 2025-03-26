

const Footer = () => {
  return (
    <section>
      <footer className="mt-30 w-full py-16 px-5 bg-emerald-green shadow-[0px_-4px_10px_rgba(0,0,0,0.2)]">



        <hr className="border-t border-gray-500 my-10" />

        <div
          className="mt-10 mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="text-white">
            © {new Date().getFullYear()} Tipotek. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
