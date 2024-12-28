import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const RadioButtonEvent = () => {
  const [preview, setPreview] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React RadioButton Event</h1>
      <p className="text-xl mb-4 ">
        The React <Span>radio button</Span> event handler is used to capture the
        selection of a radio button. It allows you to determine which option a
        user has selected, commonly in forms where a user needs to choose one
        option from a set.
      </p>
      <p className="text-lg font-bold mb-2">Handling Radio Button Selection:</p>
      <CodeSnippets
        codeString={` <input type="radio" value="option1" onChange={handleChange} /> Option 1`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of using the <Span>onChange</Span> event to update
          the state based on the selected radio button.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function RadioButtonComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default RadioButtonComponent;
`}
        />

        <CodePreview className="mt-5 ">
          {!preview ? (
            <button
              className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
              onClick={() => setPreview(true)}
            >
              Preview of code
            </button>
          ) : (
            <RefreshButton
              className=" min-h-48"
              onClick={() => setSelectedOption("")}
            >
              <>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Option 1
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Option 2
                </label>

                <p>
                  Selected Option: <strong> {selectedOption}</strong>
                </p>
              </>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default RadioButtonEvent;
