import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import { IoIosRefresh } from "react-icons/io";
import CodePreview, { RefreshButton } from "../PreviewBox";

const CheckboxChecked = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Checkbox Checked State</h1>
      <p className="text-xl mb-4 ">
        Managing the `checked` state of a checkbox in React allows you to
        control whether the checkbox is selected or not. This can be useful for
        tracking user selections and for controlling the state of forms.
      </p>
      <p className="text-lg font-bold mb-2">Handling Checkbox Checked State:</p>
      <CodeSnippets
        codeString={` const [isChecked, setIsChecked] = useState(false);`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Below is an example of how to manage the `checked` state of a checkbox
          in React.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function CheckboxCheckedComponent() {
  const [isChecked, setIsChecked] = useState(false); // Initial unchecked state

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Check me
      </label>
      <p>{isChecked ? "Checkbox is checked" : "Checkbox is unchecked"}</p>
    </div>
  );
}

export default CheckboxCheckedComponent;
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
            <RefreshButton onClick={() => setValue(false)}>
              <>
                <div className="flex gap-2 ">
                  <input
                    type="checkbox"
                    id="check"
                    checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                    className="p-2 rounded-md hover:shadow-md"
                  />
                  <label htmlFor="check"> Checkbox</label>
                </div>

                <p className="text-xl">
                  {value ? "Checkbox is checked" : "Checkbox is unchecked"}
                </p>
              </>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default CheckboxChecked;
