import CodeSnippets from "../CodeSnippets";
import CodePreview from "../PreviewBox";

const Tailwind = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Style React App with Tailwind CSS
      </h1>
      <p className="text-xl mb-4 ">
        Rapidly build modern websites without ever leaving your HTML. A
        utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
      <p className="text-lg font-bold mb-2">
        Install Tailwind CSS with Vite :{" "}
      </p>
      <p className="text-lg font-bold mb-2">Create your project : </p>
      <p className="text-xl mb-4 ">
        Start by creating a new Vite project if you don’t have one set up
        already. The most common approach is to use Create Vite.
      </p>
      <CodeSnippets
        codeString={` npm create vite@latest my-project -- --template react
 cd my-project`}
        showLineNumbers={false}
      />
      <p className="text-lg font-bold mb-2">Install Tailwind CSS : </p>
      <p className="text-xl mb-4 ">
        Install tailwindcss and its peer dependencies, then generate your
        tailwind.config.js and postcss.config.js files.
      </p>
      <CodeSnippets
        codeString={` npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p`}
        showLineNumbers={false}
      />
      <p className="text-lg font-bold mb-2">Configure your template paths : </p>
      <p className="text-xl mb-4 ">
        Add the paths to all of your template files in your tailwind.config.js
        file.
      </p>
      <CodeSnippets
        codeString={` /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        showLineNumbers={false}
      />
      <p className="text-lg font-bold mb-2">
        Add the Tailwind directives to your CSS :{" "}
      </p>
      <p className="text-xl mb-4 ">
        Add the @tailwind directives for each of Tailwind’s layers to your
        ./src/index.css file.
      </p>
      <CodeSnippets
        codeString={` @tailwind base;
 @tailwind components;
 @tailwind utilities;`}
        showLineNumbers={false}
      />
      <p className="text-lg font-bold mb-2">Start your build process : </p>
      <p className="text-xl mb-4 ">Run your build process with npm run dev.</p>
      <CodeSnippets codeString={` npm run dev`} showLineNumbers={false} />
      <p className="text-lg font-bold mb-2">
        Start using Tailwind in your project :{" "}
      </p>
      <p className="text-xl mb-4 ">
        Start using Tailwind’s utility classes to style your content.
      </p>
      <CodeSnippets
        codeString={` export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}`}
        showLineNumbers={false}
      />
      <p className="text-xl font-bold mt-2">Preview : </p>
      <CodePreview className="mt-5">
        <h1 className="text-3xl font-bold underline ml-3">Hello world!</h1>
      </CodePreview>
    </div>
  );
};

export default Tailwind;
