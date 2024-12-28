import { lazy, Suspense, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
const Sidebar = lazy(() => import("./components/Sidebar"));
const MainLayout = lazy(() => import("./components/Layout"));
import { BsLayoutSidebarInset } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
const Homepage = lazy(() => import("./components/Home"));

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="selection:bg-slate-300/40">
      <div className="bg-black text-xl w-full p-4 flex justify-center items-center text-white gap-2">
        <Link to="/" className="flex gap-2 justify-center items-center">
          <img className="h-6" src="/react.svg" alt="react Logo" /> React
          Tutorial
        </Link>
      </div>
      <button
        className="text-xl lg:hidden text-white absolute top-5 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLargeLine /> : <BsLayoutSidebarInset />}
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-59.8px)]">
        <div
          className={`${
            isOpen
              ? "flex translate-x-0 transition-transform duration-1000 ease-linear"
              : "-translate-x-full lg:translate-x-0 hidden"
          } lg:flex  lg:col-span-2 w-full h-screen lg:h-full bg-[#1f2229] text-white p-6 overflow-y-auto sidebar transition-transform duration-1000 ease-in transform`}
        >
          <Suspense fallback={<>Loading...</>}>
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
          </Suspense>
        </div>
        <div className="w-full col-span-1 lg:col-span-10 bg-gray-200 h-full overflow-y-auto sidebar relative">
          {location.pathname === "/" && (
            <Suspense fallback={<>Laoding...</>}>
              <Homepage />
            </Suspense>
          )}
          <MainLayout>
            <Outlet />
          </MainLayout>
        </div>
      </div>
    </div>
  );
}
