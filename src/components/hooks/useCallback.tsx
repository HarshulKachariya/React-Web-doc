import { useState, useCallback } from "react";
import CodeSnippets from "../CodeSnippets";
import { RefreshButton, Span } from "../PreviewBox";

const UseCallback = () => {
  const [preview, setPreview] = useState(false);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useCallback Hook</h1>

      <p className="text-xl mb-4 ">
        The React <Span>useCallback</Span> Hook returns a memoized version of
        the callback function that only changes if one of the dependencies has
        changed. It helps optimize performance by preventing unnecessary
        re-renders of components that rely on the callback function.
      </p>

      <p className="text-lg font-bold mb-2">Import useCallback:</p>

      <CodeSnippets
        codeString={` import { useCallback } from "react"`}
        showLineNumbers={false}
      />

      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          To use the <Span>useCallback</Span> Hook, wrap your callback function
          in <Span>useCallback()</Span>
          and provide a dependency array.
        </p>
        <CodeSnippets
          codeString={`import { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Memoized callback functions
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ParentComponent;
`}
        />

        <div className="col-span-1 p-2 bg-gray-400 rounded-lg my-5">
          {!preview ? (
            <div>
              <span className="text-xl">
                Enter any number you want to start with
              </span>
              <div className="space-x-3 mt-4">
                <input
                  type="number"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="p-2 rounded-md hover:shadow-md outline-none"
                />
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            </div>
          ) : (
            <RefreshButton
              onClick={() => {
                setCount(0);
                setTodos([]);
              }}
            >
              <>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={increment}
                >
                  You pressed me {count} times
                </button>

                <button
                  className="ml-3 bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={addTodo}
                >
                  Add Todo
                </button>

                <div className="mt-4">
                  {todos.length > 0 && (
                    <>
                      <h2 className="text-xl font-bold">Todos:</h2>
                      {todos.map((todo, index) => (
                        <p key={index}>{todo}</p>
                      ))}
                    </>
                  )}
                </div>
              </>
            </RefreshButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
