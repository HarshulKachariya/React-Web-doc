import { useState, useEffect } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton } from "../PreviewBox";

const webWorker = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (preview) {
      const worker = new Worker(new URL("/src/fibbonaci.tsx", import.meta.url));

      worker.postMessage(number); // Send number to worker

      worker.onmessage = function (e) {
        setResult(e.data); // Receive result from worker
      };

      return () => {
        worker.terminate(); // Clean up the worker when component unmounts
      };
    }
  }, [preview, number]);

  const handlePreview = () => {
    setPreview(true);
  };

  const handleRefresh = () => {
    setPreview(false);
    setResult(null);
    setNumber(0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        React Web Workers - Fibonacci Example
      </h1>
      <p className="text-xl mb-4 ">
        Web Workers in React can be used to perform complex computations, like
        calculating the Fibonacci sequence, in the background to avoid blocking
        the main thread.
      </p>
      <p className="text-lg font-bold mb-2">
        Using Web Workers for Computation:
      </p>
      <CodeSnippets
        codeString={` const worker = new Worker('fibonacciWorker.js');`}
        showLineNumbers={false}
      />
      <p className="mb-2 text-lg">
        Enter a number to calculate the Fibonacci sequence using a Web Worker.
      </p>
      <h1 className="text-xl font-bold">Set this file in src folder </h1>
      <h2 className="text-2xl font-bold mb-2 text-[#282c34] mt-5 font-mono">
        fibonacciWorker.js
      </h2>

      <div className="bg-gray-200 rounded-lg  mb-4">
        <CodeSnippets
          codeString={`self.onmessage = function (e) {
  const nth = e.data;
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const result = fibonacci(nth);
  self.postMessage(result);
};`}
        ></CodeSnippets>
        <h2 className="text-2xl font-bold mb-2 text-[#282c34] mt-5 font-mono">
          App.js
        </h2>
        <div className="h-96 overflow-y-auto rounded-md">
          <CodeSnippets
            codeString={`import { useEffect, useState } from "react";

function FibonacciWorkerExample() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker(new URL('./fibonacciWorker.js', import.meta.url));

    worker.postMessage(number); // Send number to worker

    worker.onmessage = function (e) {
      setResult(e.data); // Receive result from worker
    };

    return () => {
      worker.terminate(); // Clean up the worker when component unmounts
    };
  }, [number]);

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <p> Result of Fibonacci Number : {!!result ? result : "Entered Number is Not Fibonacci"} </p>
    </div>
  );
}

export default FibonacciWorkerExample;
`}
          />
        </div>

        <CodePreview className="mt-5 ">
          {!preview ? (
            <div className="space-x-3 ">
              <input
                type="number"
                onChange={(e) => setNumber(Number(e.target.value))}
                className="p-2 rounded-md hover:shadow-md outline-none"
              />
              <button
                className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                onClick={handlePreview}
              >
                Preview of code
              </button>
            </div>
          ) : (
            <RefreshButton className="min-h-32" onClick={handleRefresh}>
              <p className="text-lg font-bold">
                {" "}
                Result of Fibonacci Number :{" "}
                {!!result ? result : "Entered Number is Not Fibonacci"}
              </p>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default webWorker;
