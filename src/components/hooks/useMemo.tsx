import { useState, useMemo } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const UseMemo = () => {
  const [preview, setPreview] = useState(false);
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const memoizedValue = useMemo(
    () => ExpensiveCalculation(inputValue),
    [inputValue]
  );

  function ExpensiveCalculation(num: number) {
    return num * 2;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useMemo Hook</h1>
      <p className="text-xl mb-4 ">
        The React <Span>useMemo</Span> Hook returns a memoized value. It only
        recomputes the memoized value when one of the dependencies has changed.
        This can optimize performance by avoiding expensive calculations on
        every render.
      </p>
      <p className="text-lg font-bold mb-2">Import useMemo:</p>
      <CodeSnippets
        codeString={` import { useMemo } from "react"`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          To use the <Span>useMemo</Span> Hook, wrap an expensive calculation or
          a derived state in
          <Span> useMemo()</Span> and provide a dependency array.
        </p>
        <CodeSnippets
          codeString={`import { useState, useMemo } from "react";

function ExpensiveCalculation(num) {
  console.log("Calculating...");
  return num * 2;
}

function ExampleComponent() {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => ExpensiveCalculation(inputValue), [inputValue]);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Render Count: {count}</p>
    </div>
  );
}

export default ExampleComponent;
`}
        />

        <CodePreview className="mt-5">
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
            <RefreshButton
              className="min-h-48"
              onClick={() => {
                setCount(0);
                setInputValue(0);
              }}
            >
              <div className="flex flex-col gap-3">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="p-2 rounded-md hover:shadow-md outline-none w-36"
                />
                <span className="text-xl">Memoized Value: {memoizedValue}</span>
                <div className="mt-4">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setCount(count + 1)}
                  >
                    You pressed me {count} times
                  </button>
                </div>
                <span className="text-xl">Render Count: {count}</span>
              </div>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default UseMemo;
