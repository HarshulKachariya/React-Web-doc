import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";

const OnChangeEvent = () => {
  const [inputValue, setInputValue] = useState("");
  const [preview, setPreview] = useState(false);

  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React onChange Event</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">onChange</span> event handler
          is triggered when the value of an input element changes. It is
          commonly used to update the state as the user types or selects
          options, enabling dynamic forms and interactive UI.
        </p>
        <p className="text-lg font-bold mb-2">Using onChange:</p>
        <CodeSnippets
          codeString={`<input type="text" onChange={handleChange} />`}
        />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            Below is an example of using the{" "}
            <span className="text-red-500">onChange</span> event to update the
            state as the user types in an input field.
          </p>
          <CodeSnippets
            codeString={`import { useState } from "react";

function InputUpdateComponent() {
  const [inputValue, setInputValue] = useState("");

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

export default InputUpdateComponent;
`}
          />
          <div className="col-span-1 p-2 bg-gray-400 rounded-lg my-5 ">
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
              <div className="relative top-1 min-h-48">
                <input
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter text"
                  className={`p-2 rounded-md hover:shadow-md outline-none  w-64 `}
                />
                <p className="text-xl mt-4">
                  Current Value: <strong>{inputValue}</strong>
                </p>
                <div className="absolute top-1 right-2">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => {}}
                  >
                    <IoIosRefresh className="text-xl text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnChangeEvent;
