import { logo } from "../assets";
import { heading, paragraph } from "../constants/Sentences";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-2">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/PrasathRavichandran/Summize")
          }
          className="black_btn mt-3"
        >
          GitHub
        </button>
      </nav>

      <h1
        className="head_text"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h1>
      <h2 className="desc">{paragraph}</h2>
    </header>
  );
}

export default Hero;
