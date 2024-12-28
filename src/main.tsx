import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.tsx"));
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const DynamicRoutes = lazy(
  () => import("./components/Router/DynamicRoutes.tsx")
);
const GetStarted = lazy(() => import("./components/Home/GetStarted.tsx"));

const CuatomHook = lazy(
  () => import("./components/Hooks/CustomHooks/CustomHook.tsx")
);

const UseEffect = lazy(() => import("./components/Hooks/useEffect.tsx"));
const UseMemo = lazy(() => import("./components/Hooks/useMemo.tsx"));
const UseRef = lazy(() => import("./components/Hooks/useRef.tsx"));
const UseCallback = lazy(() => import("./components/Hooks/useCallback.tsx"));
const UseContext = lazy(() => import("./components/Hooks/useContext.tsx"));
const UseReducer = lazy(() => import("./components/Hooks/useReducer.tsx"));
const UseState = lazy(() => import("./components/Hooks/useState.tsx"));
const CreateReactApp = lazy(
  () => import("./components/Home/Create-react-app.tsx")
);
const CreateViteApp = lazy(
  () => import("./components/Home/Create-vite-app.tsx")
);
const OnBlurEvent = lazy(() => import("./components/Events/onBlur.tsx"));
const OnChangeEvent = lazy(() => import("./components/Events/onChange.tsx"));
const OnFocusEvent = lazy(() => import("./components/Events/onFocus.tsx"));
const RadioButtonEvent = lazy(
  () => import("./components/Events/radiobuttonevent.tsx")
);
const CheckboxEvent = lazy(
  () => import("./components/Events/checkboxevent.tsx")
);
const InputValue = lazy(() => import("./components/other/inputValue.tsx"));
const RadioButtonValue = lazy(
  () => import("./components/other/radiobuttonvalue.tsx")
);
const CheckboxDefaultChecked = lazy(
  () => import("./components/other/CheckboxDefaultChecked.tsx")
);
const InputDefaultValue = lazy(
  () => import("./components/other/inputDefaultvalue.tsx")
);
const RadioButtonDefaultValue = lazy(
  () => import("./components/other/RadioButtonDefaultValue.tsx")
);
const CheckboxChecked = lazy(
  () => import("./components/other/checkboxchecked.tsx")
);
const WebWorkerComponent = lazy(() => import("./components/other/webworker"));
const WindowWidthComponent = lazy(
  () => import("./components/Hooks/CustomHooks/WindowWidthComponent.tsx")
);
const Tailwind = lazy(() => import("./components/Styles/Tailwind.tsx"));
const MemoComponent = lazy(() => import("./components/Hooks/memo.tsx"));
const LazyComponent = lazy(() => import("./components/APIs/Lazy/Lazy.tsx"));
const ReduxToolKit = lazy(
  () => import("./components/StateManagement/ReduxToolKit.tsx")
);
const Components = lazy(() => import("./components/React/Components.tsx"));
const Props = lazy(() => import("./components/React/Props.tsx"));
const ReactRouter = lazy(() => import("./components/Router/index.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>Laoding...</>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/create-react-app",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CreateReactApp />
          </Suspense>
        ),
      },
      {
        path: "/create-vite-app",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CreateViteApp />
          </Suspense>
        ),
      },
      {
        path: "/gettingSarted",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <GetStarted />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useState",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseState />
          </Suspense>
        ),
      },
      {
        path: "/hooks/customHooks",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CuatomHook />
            //
          </Suspense>
        ),
      },
      {
        path: "/output/customHooks",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <WindowWidthComponent />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useEffect",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseEffect />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useMemo",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseMemo />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useRef",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseRef />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useCallback",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseCallback />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useContext",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseContext />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useReducer",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <UseReducer />
          </Suspense>
        ),
      },
      {
        path: "/apis/lazy",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <LazyComponent />
          </Suspense>
        ),
      },
      {
        path: "/apis/memo",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <MemoComponent />
          </Suspense>
        ),
      },
      {
        path: "/events/onBlur",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <OnBlurEvent />
          </Suspense>
        ),
      },
      {
        path: "/events/onChange",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <OnChangeEvent />
          </Suspense>
        ),
      },
      {
        path: "/events/onFocus",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <OnFocusEvent />
          </Suspense>
        ),
      },
      {
        path: "/events/RadioButtonEvent",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <RadioButtonEvent />
          </Suspense>
        ),
      },
      {
        path: "/events/CheckboxEvent",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CheckboxEvent />
          </Suspense>
        ),
      },
      {
        path: "/other/webworker",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <WebWorkerComponent />
          </Suspense>
        ),
      },
      {
        path: "/other/inputValue",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <InputValue />
          </Suspense>
        ),
      },
      {
        path: "/other/RadioButtonValue",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <RadioButtonValue />
          </Suspense>
        ),
      },
      {
        path: "/other/CheckboxDefaultChecked",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CheckboxDefaultChecked />
          </Suspense>
        ),
      },
      {
        path: "/other/inputDefaultvalue",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <InputDefaultValue />
          </Suspense>
        ),
      },
      {
        path: "/other/RadioButtonDefaultValue",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <RadioButtonDefaultValue />
          </Suspense>
        ),
      },
      {
        path: "/other/Checkboxchecked",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CheckboxChecked />
          </Suspense>
        ),
      },
      {
        path: "/style/tailwindcss",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <Tailwind />
          </Suspense>
        ),
      },
      {
        path: "/state-management/reduxTookit",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <ReduxToolKit />
          </Suspense>
        ),
      },
      {
        path: "/react/components",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <Components />
          </Suspense>
        ),
      },
      {
        path: "/react/props",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <Props />
          </Suspense>
        ),
      },
      {
        path: "/react/router",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <ReactRouter />
          </Suspense>
        ),
      },
      {
        path: "/react/dynamic-routes",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <DynamicRoutes />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
