import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const UseState = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((p) => p + 1);
  };

  return (
    <section>
      <h1 className="title">React useState Hook</h1>
      <p className="text-xl mb-4">
        The React <Span>useState</Span> Hook allows us to track state in a
        function component. State generally refers to data or properties that
        need to be tracking in an application.
      </p>
      <p className="text-xl mb-2 text-[#282c34]">Import useState :</p>
      <CodeSnippets
        codeString={` import {useState} from "react`}
        showLineNumbers={false}
      />
      <div className="mt-5">
        <p className="text-xl mb-2 ">
          The <Span>set</Span> function returned by <Span>useState</Span> lets
          you update the state to a different value and trigger a re-render. You
          can pass the next state directly, or a function that calculates it
          from the previous state.
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-[#282c34]">Example:</h2>
        <p className="mb-2 text-lg">
          At the top of your component, <Span>import</Span> the
          <Span> useState</Span> Hook.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 h-full">
          <div className={`col-span-1 w-full`}>
            <CodeSnippets
              codeString={`import { useState } from 'react';
                
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      You pressed me {count} times
      </button>
  );
}
      `}
            />
          </div>
          <CodePreview>
            {!preview ? (
              <div>
                <span className="text-xl ">
                  Enter any number to you want to start
                </span>
                <div className="space-x-3 mt-4">
                  <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="p-2 rounded-md hover:shadow-md outline-none"
                  />
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setPreview(true)}
                  >
                    Preview of code
                  </button>
                </div>
              </div>
            ) : (
              <RefreshButton onClick={() => setCount(0)}>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={handleClick}
                >
                  You pressed me {count} times
                </button>
              </RefreshButton>
            )}
          </CodePreview>
        </div>
      </div>
    </section>
  );
};

export default UseState;
