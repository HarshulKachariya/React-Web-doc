import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const MemoComponent = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h1 className="title">memo</h1>
      <p className="text-xl mb-4 ">
        <Span> memo</Span> lets you skip re-rendering a component when its props
        are unchanged.
      </p>

      <CodeSnippets
        codeString={`const MemoizedComponent = memo(SomeComponent, arePropsEqual?)`}
        showLineNumbers={false}
      />
      <br />
      <h2 className="text-3xl font-bold mb-2 text-[#282c34]">Reference :</h2>
      <h2 className="text-2xl font-bold mb-2 text-[#282c34]">
        memo(Component, arePropsEqual?) :
      </h2>

      <div className="mt-5">
        <p className="text-xl mb-2 ">
          Wrap a component in <Span> memo</Span> to get a memoized version of
          that component. This memoized version of your component will usually
          not be re-rendered when its parent component is re-rendered as long as
          its props have not changed. But React may still re-render it:
          memoization is a performance optimization, not a guarantee.
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <CodeSnippets
          codeString={`import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
      `}
        />
        <div className="mt-5">
          <h2 className="text-3xl font-bold mb-2 text-[#282c34]">
            Parameter :
          </h2>
          <p className="text-xl mb-2 ">
            <strong className="text-red-500"> Component: </strong> The component
            that you want to memoize. The memo does not modify this component,
            but returns a new, memoized component instead. Any valid React
            component, including functions and forwardRef components, is
            accepted.
          </p>
          <p className="text-xl mb-2 ">
            <strong className="text-red-500"> optional arePropsEqual:</strong> A
            function that accepts two arguments: the component’s previous props,
            and its new props. It should return true if the old and new props
            are equal: that is, if the component will render the same output and
            behave in the same way with the new props as with the old. Otherwise
            it should return false. Usually, you will not specify this function.
            By default, React will compare each prop with Object.is.
          </p>
          <h2 className="text-3xl font-bold mb-2 text-[#282c34]">Return :</h2>
          <p className="text-xl mb-2 ">
            <Span> memo</Span> returns a new React component. It behaves the
            same as the component provided to memo except that React will not
            always re-render it when its parent is being re-rendered unless its
            props have changed.
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-[#282c34]">Usage :</h2>
        <h2 className="text-2xl font-bold mb-2 text-[#282c34]">
          Skipping re-rendering when props are unchanged :
        </h2>
        <p className="text-xl mb-2 ">
          React normally re-renders a component whenever its parent re-renders.
          With memo, you can create a component that React will not re-render
          when its parent re-renders so long as its new props are the same as
          the old props. Such a component is said to be memoized.
        </p>
        <p className="text-xl mb-2 ">
          To memoize a component, wrap it in memo and use the value that it
          returns in place of your original component:
        </p>
      </div>
      <CodeSnippets
        codeString={`const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;`}
      />
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-2 text-[#282c34]">
          Updating a memoized component using state :
        </h2>
        <p className="text-xl mb-2 ">
          Even when a component is memoized, it will still re-render when its
          own state changes. Memoization only has to do with props that are
          passed to the component from its parent.
        </p>

        <div className="h-96 overflow-y-auto rounded-md">
          <CodeSnippets
            codeString={`import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState('Hello');
  return (
    <>
      <h3>{greeting}{name && ', '}{name}!</h3>
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

function GreetingSelector({ value, onChange }) {
  return (
    <>
      <label>
        <input
          type="radio"
          checked={value === 'Hello'}
          onChange={e => onChange('Hello')}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={value === 'Hello and welcome'}
          onChange={e => onChange('Hello and welcome')}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}
`}
          />
        </div>

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
            <RefreshButton
              className="flex flex-col gap-3"
              onClick={() => {
                setSelectedValue("option1");
                setName("");
                setAddress("");
              }}
            >
              <>
                <div className="flex flex-col gap-2">
                  <div>
                    <label className="text-lg mr-6">Name:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-2 rounded-md hover:shadow-md outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-lg mr-4">Address:</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="p-2 rounded-md hover:shadow-md outline-none"
                    />
                  </div>
                </div>
                <p className="text-xl font-bold">
                  {selectedValue === "option2"
                    ? `Hello and welcome, ${name}!`
                    : `Hello! ${name}`}
                </p>
                <div className="flex flex-col gap-2">
                  <label className="text-lg ">
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleChange}
                    />
                    Regular greeting
                  </label>
                  <label className="text-lg ">
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleChange}
                    />
                    Enthusiastic greeting
                  </label>
                </div>
              </>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default MemoComponent;
