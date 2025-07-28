import TypedText from "./TypedText.js";

import { useNavigate } from "react-router-dom";
// import Search from './Search';
import React, { useEffect } from "react";
import "./second.css";
import img1 from "./assets/img1.png";
import IMG1 from "./assets/IMG1.jpg";
import boat from "./assets/boat.jpg";
import bench from "./assets/bench.jpg";
import kurta from "./assets/kurta.jpg";
import video from "./assets/video resume.mp4";
import resume from "./assets/resume.pdf";
import email from "./assets/envelope-solid.svg";
import phone from "./assets/phone-volume-solid.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/square-instagram.svg";
import x from "./assets/facebook.svg";
import facebook from "./assets/x-twitter.svg";
import copyright from "./assets/copyright-regular.svg";

function Second() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Third");
  };

  const handleRedirectAlbum = (event) => {
    event.preventDefault();
    navigate("/album");
  };
  const handleRedirectT = (event) => {
    event.preventDefault();
    navigate("/T");
  };

  return (
    <>
      <header>
        <nav>
          <div className="left"> Vedant's portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="firstsection">
          <div className="leftsection">
            <p>Student</p>
            <br />
            <h1>
              {" "}
              Hi, I'm <span>Vedant Rahul Phalke</span>
              <br /> From Pune
            </h1>
            <br />

            <div>
              and I am a <span>Web Developer </span>
            </div>
          </div>
          <div className="rightsection">
            {/* <div></div> */}
            <img src={img1} alt="self" />
          </div>
        </section>
        {/* ...................................about..................................... */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 50 }} />
        <section className="secondsection" id="About">
          <span id="aboutspan">would you like to know about me</span>
          <div id="about">About Me</div>
          <div id="container">
            <div className="leftsecond">
              <img src={IMG1} />
            </div>
            <div className="rightsecond">
              <p>
                I am a dedicated and enthusiastic web developer with a passion
                for creating meaningful digital experiences. My journey in the
                world of web development began with a curiosity to understand
                how websites are built, and it has since evolved into a
                full-fledged career. I have a strong foundation in front-end
                technologies like HTML, CSS, and JavaScript, and I am constantly
                exploring new frameworks and tools to enhance my skills. I
                thrive in collaborative environments where I can contribute my
                creativity and problem-solving skills to deliver innovative
                solutions. With a keen eye for detail and a drive for continuous
                learning, I am committed to delivering high-quality work that
                exceeds expectations.
              </p>

              <TypedText />
            </div>
          </div>
        </section>

        {/* ......................services............................... */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 50 }} />

        <section className="thirdsection" id="services">
          <div className="container">
            <span id="aboutspan">I can help you with</span>
            <div id="about">Services</div>
            <div className="serviceslist ">
              <div>
                <i className="fa-solid fa-code" />
                <h2>Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  qui.
                </p>
                <a href="https://www.linkedin.com/in/vedant-phalke-810521292/">
                  Learn more
                </a>
              </div>
              <div>
                <i className="fa-solid fa-crop-simple" />
                <h2>UI/UX Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  qui.
                </p>
                <a href="https://www.linkedin.com/in/vedant-phalke-810521292/">
                  Learn more
                </a>
              </div>
              <div>
                <i className="fa-brands fa-java" />
                <h2>Java</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  qui.
                </p>
                <a href="https://www.linkedin.com/in/vedant-phalke-810521292/">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ....................project.. Favourit...................... */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 50 }} />
        <section className="fivesection" id="project">
          <span id="aboutspan">Living the life with </span>
          <div id="about">Accessories</div>
          <div className="favourit">
            <div className="work">
              <img src={boat} />
              <div className="layer" onClick={handleRedirectAlbum}>
                <h3>Album</h3>
                <p>
                  Hera are some memories which i would like to share with you
                </p>
                <a href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={kurta} />
              <div className="layer" onClick={handleRedirectT}>
                <h3>Achivements</h3>
                <p>Hera are some Achivements in my life which inspires me</p>
                <a href="#"></a>
              </div>
            </div>
            <div className="work">
              <img src={bench} />
              <div className="layer">
                <h3>Songs</h3>
                <p>Hera are some songs which will refresh you</p>
                <a href="https://music.youtube.com/playlist?list=PLuE4iv0uWRscSP2gfZdFliwBkVLsAtbu1">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btnn">
            See More
          </a>
        </section>
        {/* .......................contact...................... */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 50 }} />
        <section className="foursection" id="contact">
          <div className="container">
            <span id="aboutspan">Get connected to me with </span>
            <div id="about">Contact</div>
            <div className="row ">
              <div className="contactleft">
                <p id="contactemailid">
                  <img src={email} alt="email" /> vedantphalke19@gmail.com
                </p>
                <p id="contactemailid">
                  <img src={phone} alt="phone" /> 7774848240
                </p>
                <div className="sicon">
                  <a href="https://www.linkedin.com/in/vedant-phalke-810521292/">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.instagram.com/vedant_phalke_1/">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="https://twitter.com/">
                    <img src={facebook} alt="x" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100079108972610">
                    <img src={x} alt="facebook" />
                  </a>
                </div>
                <a
                  href="MICROPROCESSORS-AND-MICROCONTROLLERS.pdf"
                  download={resume}
                  className="btn btn2"
                >
                  Download CV
                </a>
                <a href="#vedio" className="btn btn2">
                  Video Resume
                </a>
              </div>
              <div className="contactright">
                <form>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="Message"
                    rows={6}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                  <button type="submit" className="btn btn2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <video src={video} id="vedio" controls />
        </section>
        {/* ..................another .................. */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 50 }} />
        <h3 id="another">To see the Activity press Submit</h3>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="bttn bttn2">
            Submit
          </button>
        </form>

        {/* ..................footer.................. */}
        <footer className="footer">
          <p>
            Copyright
            <img src={copyright} alt="copyright" /> Vedant Rahul Phalke.
          </p>
        </footer>
      </main>
    </>
  );
}
export default Second;
