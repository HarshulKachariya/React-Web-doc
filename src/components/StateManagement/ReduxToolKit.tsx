import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const ReduxToolKit = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [language, setLanguage] = useState<string>("js");

  return (
    <div>
      <section className="mb-8">
        <h2 className="title">Redux Toolkit</h2>
        <p className="text-xl mb-4 ">
          <Span> Redux Toolkit</Span> is the official, recommended way to write
          Redux logic. It simplifies common Redux patterns and reduces the
          amount of boilerplate code needed to manage state in your application.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="title">What is Redux?</h2>
        <p className="text-xl mb-2 text-[#282c34]">
          Redux is a state management library for JavaScript applications. It
          provides a centralized store for managing the state of your
          application, allowing you to have a single source of truth for your
          app's data.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="title">Why Use Redux Toolkit?</h2>
        <ul className="list-disc ml-8 mb-4 text-xl  text-[#282c34]">
          <li>
            <strong>Simpler Code:</strong> Reduces boilerplate and repetitive
            code.
          </li>
          <li>
            <strong>Better Performance:</strong> Includes helpful tools like{" "}
            <code>createSlice</code> and
            <code>createAsyncThunk</code> to write optimized Redux logic.
          </li>
          <li>
            <strong>Developer Experience:</strong> Built-in tools for debugging
            and better development experience.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="title">Key Concepts in Redux Toolkit</h2>
        <ul className="list-disc ml-8 mb-4 text-xl  text-[#282c34]">
          <li>
            <strong>Store:</strong> The centralized place where all the
            application state is stored.
          </li>
          <li>
            <strong>Actions:</strong> Plain JavaScript objects that represent an
            event or a change in the state.
          </li>
          <li>
            <strong>Reducers:</strong> Functions that determine how the state
            changes in response to actions.
          </li>
          <li>
            <strong>Slices:</strong> A feature of Redux Toolkit that allows you
            to manage state logic more easily by grouping actions and reducers
            together.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="title">Getting Started with Redux Toolkit</h2>
        <p className="text-xl mb-2 text-[#282c34]">
          Let's set up Redux Toolkit in a React application.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Step 1: Install Redux Toolkit and React-Redux
        </h3>
        <p className="text-xl mb-2 text-[#282c34]">
          First, install Redux Toolkit and <code>react-redux</code> (the
          bindings to use Redux in a React app):
        </p>
        <CodeSnippets
          codeString={` npm install @reduxjs/toolkit react-redux`}
          showLineNumbers={false}
        />
        <h3 className="text-xl font-semibold mb-2">
          Step 2: Create a Redux Store
        </h3>
        <p className="text-xl mb-2 text-[#282c34]">
          To create a Redux store, use the <code>configureStore</code> function
          provided by Redux Toolkit. This function automatically sets up the
          store with sensible defaults, including the Redux DevTools extension
          support.
        </p>

        <div className="flex gap-3 cursor-pointer transition-all duration-500 ease-linear">
          <h2
            className={`${
              language === "js" && "underline  transition-all duration-300 "
            } text-xl font-bold mb-2 text-[#282c34] mt-5 font-mono hover:underline-offset-8`}
            onClick={() => setLanguage("js")}
          >
            Javascript
          </h2>{" "}
          <h2
            className={`${
              language === "ts" && "underline  transition-all duration-300 "
            } text-xl font-bold mb-2 text-[#282c34] mt-5 font-mono hover:underline-offset-8`}
            onClick={() => setLanguage("ts")}
          >
            Typescript
          </h2>
        </div>

        <CodeSnippets
          codeString={
            language === "js"
              ? `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;`
              : `import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
  counter: counterReducer,
  },
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch`
          }
        />

        <h3 className="text-xl font-semibold mb-2">Step 3: Create a Slice</h3>
        <p className="text-xl mb-2 text-[#282c34]">
          A slice is a collection of Redux reducer logic and actions for a
          single feature of your app. You can create a slice using the{" "}
          <code>createSlice</code> function.
        </p>

        <CodeSnippets
          codeString={
            language === "js"
              ? `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`
              : `import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer`
          }
        />

        <h3 className="text-xl font-semibold mb-2">
          Step 4: Provide the Redux Store to Your React App
        </h3>
        <p className="text-xl mb-2 text-[#282c34]">
          Now, you need to provide the Redux store to your React components
          using the <code>Provider</code>
          component from <code>react-redux</code>.
        </p>
        <CodeSnippets
          codeString={`import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);`}
        />

        <h3 className="text-xl font-semibold mb-2">
          Step 5: Use Redux State and Actions in Components
        </h3>
        <p className="text-xl mb-2 text-[#282c34]">
          Now that the store is set up, you can use Redux state and actions in
          your React components using the <code>useSelector</code> and{" "}
          <code>useDispatch</code> hooks.
        </p>

        <CodeSnippets
          codeString={
            language === "js"
              ? `import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}`
              : `import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}`
          }
        />
      </section>

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
            className="min-h-48"
            onClick={() => {
              setCount(0);
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="mt-4 flex flex-col gap-3">
                <span className="text-xl">Count: {count}</span>
                <div className="space-x-3">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setCount(count + 1)}
                  >
                    Increment
                  </button>
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setCount(count - 1)}
                  >
                    Decrement
                  </button>
                </div>
              </div>
            </div>
          </RefreshButton>
        )}
      </CodePreview>

      <section className="mb-8">
        <h2 className="title">Key Features of Redux Toolkit</h2>
        <ul className="list-disc ml-8 mb-4 text-xl  text-[#282c34]">
          <li>
            <strong>
              <code>configureStore</code>
            </strong>
            : Automatically sets up the Redux store with good defaults,
            including middleware and DevTools.
          </li>
          <li>
            <strong>
              <code>createSlice</code>
            </strong>
            : Simplifies writing reducers by combining them with actions in a
            single function.
          </li>
          <li>
            <strong>
              <code>createAsyncThunk</code>
            </strong>
            : Handles asynchronous logic (like API calls) in Redux.
          </li>
          <li>
            <strong>
              <code>createReducer</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>createAction</code>
            </strong>
            : Utility functions to help create reducers and actions with less
            boilerplate.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="title">Best Practices</h2>
        <ul className="list-disc ml-8 mb-4 text-xl  text-[#282c34]">
          <li>
            <strong>Keep State Normalized:</strong> Store data in a normalized
            way to avoid deeply nested structures.
          </li>
          <li>
            <strong>Use Slices for Feature-Based Organization:</strong> Organize
            your Redux logic into slices based on different features or domains
            in your app.
          </li>
          <li>
            <strong>Leverage Middleware:</strong> Use middleware like Redux
            Thunk (included by default) for handling asynchronous logic.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="title">Additional Resources</h2>
        <ul className="list-disc ml-8">
          <li>
            <a
              href="https://redux-toolkit.js.org/"
              className="text-blue-600 hover:underline"
            >
              Redux Toolkit Documentation
            </a>
          </li>
          <li>
            <a
              href="https://redux.js.org/tutorials/fundamentals"
              className="text-blue-600 hover:underline"
            >
              Redux Fundamentals
            </a>
          </li>
          <li>
            <a
              href="https://react-redux.js.org/"
              className="text-blue-600 hover:underline"
            >
              React-Redux Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ReduxToolKit;
