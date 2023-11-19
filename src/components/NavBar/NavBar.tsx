import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutDeleteToken } from "../../utils/functions/logout";
import swal from "sweetalert";

const NavBar = (): JSX.Element => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "Search", path: "/search/:id" },
  ];
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 w-full mt-0 fixed z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          VIIO website
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div
          className="text-sm lg:flex-grow"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <button
            type="button"
            onClick={() => {
              swal({
                title: "Are you sure?",
                text: "Once logged out, you will not be able to log in again!",
                icon: "warning",
                buttons: ["Cancel", "Logout"],
                dangerMode: true,
              }).then((willLogout) => {
                if (willLogout) {
                  logoutDeleteToken();
                  navigate("/");
                  swal("You have been logged out!", {
                    icon: "success",
                  });
                } else {
                  swal("You are still logged in!", {
                    icon: "info",
                  });
                }
              });
            }}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
