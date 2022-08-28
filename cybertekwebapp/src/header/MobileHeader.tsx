import React from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../static/media/CyberTEK-Solutions-LLC transparent.png";

export const MobileHeader = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);

  const closeAll = () => {
    setOpen(false);
    setShowSubMenu(false);
  };

  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-white">
        <div className="flex flex-wrap justify-between items-center px-4 border-b border-b-gray-100 py-2">
          <Link to="/" className="flex items-center" style={{ width: "160px" }}>
            <img src={Logo} className="mr-3 aspect-[4/1]" alt="CyberTek Logo" />
          </Link>
          <button
            onClick={() => {
              open ? closeAll() : setOpen(true);
            }}
            className="p-2"
          >
            <FontAwesomeIcon size="lg" icon={open ? faClose : faBars} />
          </button>
        </div>
        <div className={open ? "showMenuNav" : "hidden"}>
          <ul className="flex flex-col">
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/" className="p-2 w-full uppercase">
                HOME
              </Link>
            </li>
            <li className="flex flex-col bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <div>
                <Link
                  to="/"
                  className="p-2 flex w-full uppercase"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
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
                </Link>
              </div>
              {showSubMenu && (
                <div className="w-full group-hover:block rounded-b border-t-0 z-30">
                  <div className="shadow-md">
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link
                        to="/services/networking"
                        className="p-2 pl-4 w-full"
                      >
                        Networking
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/services/security" className="p-2 pl-4 w-full">
                        Security
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/services/wireless" className="p-2 pl-4 w-full">
                        Wireless
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/services/5G" className="p-2 pl-4 w-full">
                        5G
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/services/sd-wan" className="p-2 pl-4 w-full">
                        SD-WAN
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link
                        to="/services/cloud-computing"
                        className="p-2 pl-4 w-full"
                      >
                        Cloud Computing
                      </Link>
                    </div>
                    <div
                      className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/services/iot" className="p-2 pl-4 w-full">
                        IoT
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/experience" className="p-2 w-full uppercase">
                Experience
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/blog" className="p-2 w-full uppercase">
                blog
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/contact-us" className="p-2 w-full uppercase">
                Contact us
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/partners" className="p-2 w-full uppercase">
                partners
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
