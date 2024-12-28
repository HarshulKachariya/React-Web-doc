import CodeSnippets from "../CodeSnippets";

import viteApp from "../../assets/react_create_vite_app.png";
import { Span } from "../PreviewBox";

const CreateViteApp = () => {
  return (
    <div>
      <section id="installation" className="mb-10">
        <p className="text-gray-700 mb-4 text-xl">
          To create a new React project, run the following command:
        </p>
        <CodeSnippets
          codeString={`   npm create vite@latest my-project -- --template react`}
          showLineNumbers={false}
        />
      </section>

      <section id="setup" className="mb-10  ">
        <h2 className="text-3xl font-bold mb-4 text-slate-800 ">Setup :</h2>
        <p className="text-gray-700 mb-4 text-xl">
          Navigate to your project directory and start the development server:
        </p>
        <CodeSnippets
          codeString={`   cd my-project
    npm run dev`}
          showLineNumbers={false}
        />
        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Folder Structure of first react-app :
          </h2>
          <CodeSnippets
            codeString={` my-app
     ├── README.md
     ├── node_modules
     ├── package.json
     ├── .gitignore
     ├── public
     │   ├── favicon.ico
     │   ├── index.html
     │   ├── logo192.png
     │   ├── logo512.png
     │   ├── manifest.json
     │   └── robots.txt
     └── src
     ├── App.css
         ├── App.jsx
         ├── index.css
         ├── App.css
         └── main.jsx`}
            showLineNumbers={false}
          />
        </div>

        <div>
          {" "}
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Scripts</h2>
          <p className="text-gray-700 text-xl">
            Inside the newly created project, you can run some built-in
            commands:
          </p>
          <div className="text-xl">
            <Span>npm run dev</Span> or <Span>yarn run dev</Span>
          </div>
        </div>
        <p className="text-gray-700 my-4 text-xl">
          Your React application should now be running on{" "}
          <strong>http://localhost:5173</strong>.
        </p>
        <p className="text-gray-700 my-4 text-xl">
          <strong>Preview of our firest react app :</strong>
        </p>
        <div className="max-w-4xl border-none overflow-hidden">
          <img src={viteApp} alt="cretae-react-app" className="rounded-md " />
        </div>
      </section>

      <section id="build">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">
          Building for Production
        </h2>
        <p className="text-gray-700 mb-4 text-xl">
          To create a production-ready build of your application, run:
        </p>
        <CodeSnippets
          codeString={`   # Run this to use npm
    npm run build
    # Or run this to use yarn
    yarn build`}
          showLineNumbers={false}
        />
        <p className="text-gray-700 text-xl">
          This command creates a <strong>build/</strong> directory with a
          production build of your app.
        </p>
      </section>
    </div>
  );
};

export default CreateViteApp;
