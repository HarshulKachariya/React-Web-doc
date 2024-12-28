import CodeSnippets from "../../CodeSnippets";

// Import the component that uses the custom hook
import { useNavigate } from "react-router-dom";
import CodePreview, { Span } from "../../PreviewBox";

const CuatomHook = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="title">React Custom Hook Example</h1>
      <p className="text-xl mb-4 ">
        A custom hook is a JavaScript function whose name starts with "use" and
        that may call other hooks. Custom hooks offer the flexibility of sharing
        logic that wasn't possible in React components before.
      </p>
      <p className="text-xl mb-2 text-[#282c34]">Example of a Custom Hook:</p>
      <CodeSnippets
        codeString={`import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};`}
      />
      <div className="mt-5">
        <p className="text-xl mb-2 ">
          The custom hook <Span>useWindowWidth</Span>
          listens for window resize events and updates the state accordingly. It
          can be used in any component to get the current window width.
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-[#282c34]">
          Using the Custom Hook:
        </h2>
        <p className="mb-2 text-lg">
          Let's see how to use the custom hook in a component.
        </p>
        <CodeSnippets
          codeString={`import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

const WindowWidthComponent = () => {
  const width = useWindowWidth();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Window Width Tracker</h2>
      <p className="text-lg mt-4">
        The current window width is: <span className="font-mono">{width}px</span>
      </p>
    </div>
  );
};

export default WindowWidthComponent;`}
        />
        <CodePreview className="mt-4">
          <button
            className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
            onClick={() => navigate("/output/customHooks")}
          >
            Show Preview
          </button>
        </CodePreview>
      </div>
    </div>
  );
};

export default CuatomHook;
