import img from "../assets/headerimg.webp";
import BlurText from "../components/Animation/BlurText";

function Header() {
  const scrollToCard2 = () => {
    document.getElementById("card2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <div className="flex items-center ml-28">
            <BlurText
              text="AI Enabled Image Management solutions made just for you. Like no other."
              delay={170}
              animateBy="words"
              direction="top"
              className="text-6xl text-purple-200 text-center"
            />
          </div>
          <br />
          <br />
          <p className="mb-8 text-lg font-normal text-gray-100 lg:text-2xl sm:px-16 lg:px-48">
            Providing precisioned Medical Technology solutions worldwide.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-emerald-500 focus:ring-4 focus:ring-gray-600"
              onClick={scrollToCard2}
            >
              <button> Get to know more about us</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
