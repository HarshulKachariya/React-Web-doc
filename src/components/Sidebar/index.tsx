import { NavLink } from "react-router-dom";
// #C66CAC
// #286AD0
import {
  gettingStarted,
  Events,
  Hooks,
  other,
  styleSheets,
  Apis,
  StateManagement,
  reactTypes,
} from "../../lib/data";

const Sidebar = ({ setIsOpen }: any) => {
  return (
    <div className="sidebar ">
      <div>
        <NavLink
          to="/gettingSarted"
          className="text-xl font-bold "
          onClick={() => setIsOpen(false)}
        >
          Getting Started
        </NavLink>
        <nav className="ml-8 py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {gettingStarted &&
              gettingStarted.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          Styles
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {styleSheets &&
              styleSheets.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to="#"
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          React
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {reactTypes &&
              reactTypes.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          Hooks
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Hooks &&
              Hooks.map((item) => (
                <li>
                  <NavLink
                    to={`/hooks${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          APIs
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Apis &&
              Apis.map((item) => (
                <li>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          State Management
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {StateManagement &&
              StateManagement.map((item) => (
                <li>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          Events
        </NavLink>
        <nav className="ml-8  py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Events &&
              Events.map((item) => (
                <li>
                  <NavLink
                    to={`/events${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      <div>
        <NavLink
          to=""
          className="text-xl font-bold my-4"
          onClick={() => setIsOpen(false)}
        >
          Other
        </NavLink>
        <nav className="ml-8   py-2">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {other &&
              other.map((item) => (
                <li>
                  <NavLink
                    to={`/other${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
