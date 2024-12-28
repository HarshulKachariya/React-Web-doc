import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton } from "../PreviewBox";

const Components = () => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div>
      <h1 className="title">React Component</h1>

      <p className="text-xl mb-4">
        <span> Components are like functions that return HTML elements.</span>{" "}
        <span>
          Components are independent and reusable bits of code. They serve the
          same purpose as JavaScript functions, but work in isolation and return
          HTML.
        </span>
        <span>
          Components come in two types, Class components and Function
          components, in this tutorial we will concentrate on Function
          components.
        </span>
      </p>

      <p className="text-xl font-bold mb-2 text-[#282c34]">
        Function Component :
      </p>

      <p className="text-xl mb-4 ">
        Here is the same example as above, but created using a Function
        component instead.
      </p>
      <p className="text-xl mb-4 ">
        A Function component also returns HTML, and behaves much the same way as
        a Class component, but Function components can be written using much
        less code, are easier to understand, and will be preferred in this
        tutorial.
      </p>
      <CodeSnippets
        codeString={`function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;`}
      />

      <div className="flex flex-col gap-3 mt-5">
        <p className="text-xl font-bold mb-2 text-[#282c34]">
          Arrow function Class Component :
        </p>
        <p className="text-xl mb-4 ">
          Here is the same example as above, but created using a Arrow Function
          component instead.
        </p>

        <CodeSnippets
          codeString={`const Car = () => {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;`}
        />

        <CodePreview className="mt-5">
          {!preview ? (
            <div className="space-x-3 ">
              <button
                className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                onClick={() => setPreview(true)}
              >
                Preview of code
              </button>
            </div>
          ) : (
            <RefreshButton
              className="min-h-16"
              onClick={() => setPreview(false)}
            >
              <p className="text-xl">Hi, I am a Car!</p>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default Components;
