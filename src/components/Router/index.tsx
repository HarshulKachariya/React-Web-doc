import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { BrowserView, RefreshButton, Span } from "../PreviewBox";

const ReactRouter = () => {
  const routes = ["Home", "Blogs", "Content", "NoPage"];

  const [preview, setPreview] = useState<boolean>(false);
  const [routeName, setRouteName] = useState<string>("Home");

  const handleClick = (route: string) => {
    setRouteName(route);
  };

  return (
    <div>
      <h1 className="title">React Router</h1>
      <p className="text-xl mb-4">
        Create React App doesn't include page routing.
      </p>
      <p className="text-xl mb-4 ">
        React Router is the most popular solution.
      </p>

      <h1 className="text-2xl font-bold mb-4 text-[#282c34]">
        Add React Router
      </h1>
      <p className="text-xl mb-4 ">
        To add React Router in your application, run this in the terminal from
        the root directory of the application:
      </p>

      <CodeSnippets
        codeString={` #use npm
 npm i react-router-dom
 #use yarn
 yarn add react-router-dom`}
        showLineNumbers={false}
      />

      <div className="mt-5">
        <p className="text-xl mb-2 ">
          To create an application with multiple page routes, let's first start
          with the file structure.
        </p>
        <p className="text-xl mb-2 ">
          Within the src folder, we'll create a folder named pages with several
          files:
        </p>
        <CodeSnippets
          codeString={`src/pages/:
  ├── Layout.js
  ├── Home.js
  ├── Blogs.js
  ├── Contact.js
  └── NoPage.js`}
          showLineNumbers={false}
        />
        <p className="text-xl mb-2 ">
          Each file will contain a very basic React component.
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-2xl font-bold mb-2 text-[#282c34]">Example:</h2>
        <p className="mb-2 text-xl">
          Use React Router to route to pages based on URL:
        </p>
        <h2 className="text-2xl font-bold font-mono mb-2 text-[#282c34]">
          index.js
        </h2>
        <div className="flex flex-col gap-4">
          <CodeSnippets
            codeString={`import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
          />
          <CodePreview className="mt-5">
            {!preview ? (
              <div>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <RefreshButton className="min-h-40 " isShow={false}>
                <BrowserView url={`http://localhost:5173/${routeName}`}>
                  <div className="flex gap-3">
                    {routes.map((item) => (
                      <button
                        className={`${
                          item === routeName ? "text-red-600" : "text-blue-900"
                        }    underline `}
                        onClick={() => handleClick(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <hr className="mt-2" />
                  <div className="text-xl">
                    {routeName} Page {routeName === "NoPage" && "Found"}
                  </div>
                </BrowserView>
              </RefreshButton>
            )}
          </CodePreview>

          <section>
            <p className="text-xl mb-4 ">
              We wrap our content first with <Span>{`<BrowserRouter>`}</Span>.
            </p>
            <p className="text-xl mb-4 ">
              Then we define our <Span>{` <Routes> `}</Span> An application can
              have multiple
              <Span>{` <Routes> `}</Span> Our basic example only uses one.
            </p>
            <p className="text-xl mb-4 ">
              <Span>{` <Routes>`}</Span>s can be nested. The first{" "}
              <Span>{` <Routes>`}</Span> has a path of / and renders the Layout
              component.
            </p>
            <p className="text-xl mb-4 ">
              The nested <Span>{` <Routes>`}</Span>s inherit and add to the
              parent route. So the blogs path is combined with the parent and
              becomes <Span>/blogs</Span>.
            </p>
            <p className="text-xl mb-4 ">
              The Home component route does not have a path but has an index
              attribute. That specifies this route as the default route for the
              parent route, which is <Span>/</Span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2 text-[#282c34]">
              Pages / Components
            </h2>
            <p className="text-xl mb-4 ">
              The <Span>{`<Outlet>`}</Span> renders the current route selected.
            </p>
            <p className="text-xl mb-4 ">
              <Span>{`<Link>`}</Span> is used to set the URL and keep track of
              browsing history.
            </p>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold font-mono  text-[#282c34]">
                Layout.js
              </h2>
              <CodeSnippets
                codeString={`import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;`}
              />

              <h2 className="text-2xl font-bold font-mono  text-[#282c34]">
                Home.js
              </h2>
              <CodeSnippets
                codeString={`iconst Home = () => {
  return <h1>Home</h1>;
};

export default Home;`}
              />

              <h2 className="text-2xl font-bold font-mono  text-[#282c34]">
                Blogs.js
              </h2>
              <CodeSnippets
                codeString={`const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;`}
              />

              <h2 className="text-2xl font-bold font-mono  text-[#282c34]">
                Contact.js
              </h2>
              <CodeSnippets
                codeString={`const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;`}
              />

              <h2 className="text-2xl font-bold font-mono  text-[#282c34]">
                NoPage.js
              </h2>
              <CodeSnippets
                codeString={`const NoPage = () => {
  return <h1>404 NoPage Found</h1>;
};

export default NoPage;`}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReactRouter;
