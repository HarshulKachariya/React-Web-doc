import { useEffect, useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { FaPlus } from "react-icons/fa";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const UseEffect = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    !stop &&
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
  });

  return (
    <div>
      <h1 className="title">React useEffect Hook</h1>
      <p className="text-xl text-gray-600 mb-4 ">
        The React <Span>useEffect</Span> Hook allows you to perform side effects
        in your function components. Some examples of side effects are: fetching
        data, directly updating the DOM, and timers.
      </p>
      <p className="text-2xl text-[#282c34] font-bold mb-2">
        Import useEffect :
      </p>
      <CodeSnippets
        codeString={` import { useEffect } from "react"`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-2xl text-[#282c34] font-bold mb-2">Example:</h2>
        <p className="mb-2 text-xl text-gray-600">
          At the top of your component, <Span>import</Span> the
          <Span> useEffect</Span> Hook.
        </p>
        <p className="mb-2 text-xl text-gray-600">
          Then, call the Hook inside your component function with an
          <Span>effect</Span> function as an argument. <br /> Example with the
          without dependency
        </p>

        <div className="flex flex-col gap-3">
          <CodeSnippets
            codeString={`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <h1>I've rendered {count} times!</h1>;
  );
}
`}
          />

          <div className=" p-2 bg-gray-400 rounded-lg ">
            {!preview ? (
              <div className="space-x-3">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <RefreshButton
                onClick={() => {
                  setCount(0);
                  setPreview(false);
                }}
              >
                <div className="flex flex-col gap-2">
                  <strong className="text-2xl ">{`I've rendered ${count} times!`}</strong>
                  <button
                    className=" bg-[#282c34] p-2 w-72
                  rounded-md hover:shadow-md text-white"
                    onClick={() => setStop((p) => !p)}
                  >
                    {!stop ? "Stop" : "resume"}
                  </button>
                </div>
              </RefreshButton>
            )}
          </div>
        </div>
        <p className="my-4 text-xl text-gray-600">
          Example with the with dependency
        </p>
        <div className="flex flex-col gap-2">
          <CodeSnippets
            codeString={`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
`}
          />

          <CodePreview>
            {!preview ? (
              <div>
                <div className="space-x-3 ">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setPreview(true)}
                  >
                    Preview of code
                  </button>
                </div>
              </div>
            ) : (
              <RefreshButton onClick={() => setCount2(0)}>
                <div className="flex flex-col gap-2">
                  <strong className="text-2xl ">{`I've rendered ${count2} times!`}</strong>
                  <button
                    className="bg-[#282c34] flex justify-center items-center p-2 rounded-md hover:shadow-md text-white w-20"
                    onClick={() => setCount2((p) => p + 1)}
                  >
                    <FaPlus className="text-xl text-white " />
                  </button>
                </div>
              </RefreshButton>
            )}
          </CodePreview>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
