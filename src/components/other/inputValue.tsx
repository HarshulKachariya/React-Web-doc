import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";
import CodePreview, { RefreshButton } from "../PreviewBox";

const InputValue = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Input Value</h1>
      <p className="text-xl mb-4 ">
        Managing the value of an input field in React involves controlling and
        updating the input’s value through state. This allows you to capture
        user input and use it within your application, typically in forms or
        interactive components.
      </p>
      <p className="text-lg font-bold mb-2">Handling Input Value:</p>
      <CodeSnippets
        codeString={` const [inputValue, setInputValue] = useState("");`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of how to manage the value of an input field in
          React, including capturing user input and updating the state.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function InputValueComponent() {
  const [inputValue, setInputValue] = useState(""); // Initial input value

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default InputValueComponent;
`}
        />

        <CodePreview className="mt-5">
          {!preview ? (
            <button
              className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
              onClick={() => setPreview(true)}
            >
              Preview of code
            </button>
          ) : (
            <RefreshButton onClick={() => setValue("")}>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="p-2 rounded-md hover:shadow-md outline-none w-36 "
                />
                <p className="text-xl">Current Value: {value}</p>
              </div>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default InputValue;
