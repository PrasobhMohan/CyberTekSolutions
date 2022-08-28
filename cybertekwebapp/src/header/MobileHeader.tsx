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
          <button onClick={() => setOpen(!open)}>
            <FontAwesomeIcon size="lg" icon={open ? faClose : faBars} />
          </button>
        </div>
        <div className={open ? "showMenuNav" : "hideMenuNav"}>
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
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">Networking</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">Security</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">Wireless</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">5G</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">SD-WAN</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">Cloud Computing</Link>
                    </div>
                    <div
                      className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 uppercase"
                      onClick={closeAll}
                    >
                      <Link to="/">IoT</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/" className="p-2 w-full uppercase">
                Experience
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/" className="p-2 w-full uppercase">
                blog
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/" className="p-2 w-full uppercase">
                contact us
              </Link>
            </li>
            <li
              className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={closeAll}
            >
              <Link to="/" className="p-2 w-full uppercase">
                partners
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
