import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";
import CodePreview, { RefreshButton } from "../PreviewBox";

const InputDefaultValue = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Default value");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Input Default Value</h1>
      <p className="text-xl mb-4 ">
        Setting a default value for an input field in React allows you to
        pre-fill the input with an initial value when the component first
        renders. This is useful for forms where you want to provide a starting
        value or placeholder.
      </p>
      <p className="text-lg font-bold mb-2">Setting Default Value:</p>
      <CodeSnippets
        codeString={` const [inputValue, setInputValue] = useState("Default Value");`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of how to set a default value for an input field
          in React.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";
import PreviewBox from './../PreviewBox';

function InputDefaultValueComponent() {
const [inputValue, setInputValue] = useState("Default Value");

const handleChange = (event) => {
 setInputValue(event.target.value);
};

return (
 <div>
   <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter text" />
   <p>Current Value: {inputValue}</p>
 </div>
);
}

export default InputDefaultValueComponent;
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
            <RefreshButton onClick={() => setValue("Default value")}>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={value}
                  defaultValue={"Default Value"}
                  onChange={(e) => setValue(e.target.value)}
                  className="p-2 rounded-md hover:shadow-md  outline-none w-48 "
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

export default InputDefaultValue;
