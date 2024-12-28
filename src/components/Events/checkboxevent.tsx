import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const CheckboxEvent = () => {
  const [preview, setPreview] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Checkbox Event</h1>
      <p className="text-xl mb-4 ">
        The React <Span>checkbox</Span> event handler is used to capture the
        state of a checkbox, whether it is checked or unchecked. It’s commonly
        used in forms where a user can select multiple options.
      </p>
      <p className="text-lg font-bold mb-2">Handling Checkbox State:</p>
      <CodeSnippets
        codeString={` <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of using the <Span>onChange</Span> event to update
          the state based on the checkbox's checked status.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
       Item is :
      </label>
      <p>{isChecked ? "Checked" : "Unchecked"}</p>
    </div>
  );
}

export default CheckboxComponent;
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
              onClick={() => setIsChecked(false)}
              className="min-h-48"
            >
              <label className="flex gap-3 ">
                <input
                  type="radio"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Item is :
                <p className="font-bold">
                  {isChecked ? "Checked" : "Unchecked"}
                </p>
              </label>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default CheckboxEvent;
