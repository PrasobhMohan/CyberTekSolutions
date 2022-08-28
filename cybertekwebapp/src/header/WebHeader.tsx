import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import InstagramLogo from "../static/media/instagram.svg";
import Logo from "../static/media/CyberTEK-Solutions-LLC transparent.png";

export const WebHeader = () => {
  return (
    <header>
      <nav className="bg-white py-2">
        <div className="flex flex-wrap justify-between items-center lg:px-8 md:px-4">
          <Link to="/" className="flex items-center" style={{ width: "300px" }}>
            <img src={Logo} className="mr-3 aspect-[4/1]" alt="CyberTek Logo" />
          </Link>
          <div className="justify-between flex w-auto">
            <ul className="flex mt-4 font-medium flex-row space-x-6 main-nav">
              <li>
                <Link
                  to="/"
                  className="block py-2 rounded bg-transparent p-0"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <div className="flex">
                  <div className="relative group h-0 ">
                    <div className="flex flex-row cursor-pointer">
                      <div className="flex flex-row-reverse">
                        <div slot="icon" className="flex py-2">
                          SERVICES
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="#525253"
                              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full hidden group-hover:block rounded-b border-t-0 z-10 top-8">
                      <div className="shadow-xl w-64">
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">Networking</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">Security</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">Wireless</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">5G</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">SD-WAN</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">Cloud Computing</Link>
                        </div>
                        <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                          <Link to="/">IoT</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/" className="block py-2 rounded bg-transparent">
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 rounded bg-transparent">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 rounded bg-transparent">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 rounded bg-transparent">
                  PARTNERS
                </Link>
              </li>
            </ul>
          </div>
          <div className="justify-between flex w-auto">
            <ul className="flex font-medium flex-row space-x-2">
              <li>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://www.facebook.com/"
                  className="block rounded bg-transparent"
                >
                  <FontAwesomeIcon size="lg" icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://twitter.com/"
                  rel="noreferrer"
                  className="block rounded bg-transparent"
                >
                  <FontAwesomeIcon size="lg" icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://www.linkedin.com/"
                  className="block rounded bg-transparent"
                >
                  <FontAwesomeIcon size="lg" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <img
                    style={{
                      height: "19px",
                      width: "20px",
                      marginTop: "1px",
                    }}
                    src={InstagramLogo}
                    alt="Instagram Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
