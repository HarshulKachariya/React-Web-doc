import CodeSnippets from "../CodeSnippets";
import { useState } from "react";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const OnBlurEvent = () => {
  const [preview, setPreview] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!inputValue) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React onBlur Event</h1>
      <p className="text-xl mb-4 ">
        The React <Span>onBlur</Span> event handler is triggered when an element
        loses focus. It is commonly used in form validation to check if the
        input is valid once the user moves away from the input field.
      </p>
      <p className="text-lg font-bold mb-2">Using onBlur:</p>
      <CodeSnippets
        codeString={` <input type="text" onBlur={handleBlur} />`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Here’s an example of using the <Span>onBlur</Span> event to validate
          an input field when the user moves out of it.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function InputValidationComponent() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!inputValue) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Enter text"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default InputValidationComponent;
`}
        />

        <CodePreview className=" mt-5 ">
          {!preview ? (
            <button
              className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
              onClick={() => setPreview(true)}
            >
              Preview of code
            </button>
          ) : (
            <RefreshButton
              onClick={() => setInputValue("")}
              className="min-h-48"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="Enter text"
                  className="p-2 rounded-md hover:shadow-md outline-none w-40"
                />
                {error && <p className="text-red-600 text-xl">{error}</p>}
              </div>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default OnBlurEvent;
