import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";
import CodePreview, { RefreshButton } from "../PreviewBox";

const RadioButtonValue = () => {
  const [preview, setPreview] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Radio Button Value</h1>
      <p className="text-xl mb-4 ">
        Handling radio button values in React involves capturing the selected
        value from a group of radio buttons. This is commonly used in forms
        where a user needs to select one option from a set of mutually exclusive
        choices.
      </p>
      <p className="text-lg font-bold mb-2">Managing Radio Button Values:</p>
      <CodeSnippets
        codeString={` const [selectedValue, setSelectedValue] = useState("");`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Here’s an example of how to manage the selected value from a group of
          radio buttons and update the state accordingly.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";
import CodePreview from './../PreviewBox';

function RadioButtonValueComponent() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default RadioButtonValueComponent;
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
            <RefreshButton
              className=" min-h-20"
              onClick={() => setSelectedValue("")}
            >
              <>
                <div className="flex gap-2 ">
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleChange}
                    />
                    Option 1
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleChange}
                    />
                    Option 2
                  </label>
                </div>
                {selectedValue && (
                  <p className="text-xl">
                    Selected Value: <strong> {selectedValue}</strong>
                  </p>
                )}
              </>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default RadioButtonValue;
