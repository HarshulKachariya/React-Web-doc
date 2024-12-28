import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { BrowserView, RefreshButton, Span } from "../PreviewBox";
import { useLocation } from "react-router-dom";

const DynamicRoutes = () => {
  const location = useLocation();

  const [preview, setPreview] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false);

  const [routeName, setRouteName] = useState<string>(
    location?.pathname.replace("/", "")
  );

  const [secondPreview, setSecondPreview] = useState<string>("login");

  const [userId, setUserId] = useState<string>("123456");

  const [formData, setFormData] = useState<any>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormData({
      username: e.target.username.value,
      password: e.target.password.value,
    });

    console.log(formData);
    if (formData.username === "" && formData.password === "") {
      setSecondPreview("dashboard");
    }
  };

  return (
    <div>
      <section>
        <h1 className="title">Dynamic Routes</h1>

        <p className="text-xl mb-4 ">
          The <Span>Dynamic Routes</Span> allows to get the params from routes.
        </p>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold  text-[#282c34]">
            {`useLocation():`}
          </h2>
          <p className="text-xl">
            The <Span>{`useLocation()`}</Span> hook returns the
            <Span>pathname</Span> of the current route.
          </p>
          <CodeSnippets
            codeString={`import { useLocation } from 'react-router-dom';
            
export default function RoutePath() {
    const location = useLocation();
  
    return (
        <div>Current Route: {location?.pathname}</div>
    );
}`}
          />

          <CodePreview className="mt-5">
            {!preview ? (
              <div>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <RefreshButton className="min-h-40 " isShow={false}>
                <>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-600"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                      <span className="w-3 h-3 rounded-full bg-green-600"></span>
                    </div>
                    <div
                      className="w-full h-7 rounded-xl bg-gray-300  px-2"
                      onClick={() => setEdit(true)}
                    >
                      http://localhost:5173/
                      {edit ? (
                        <input
                          type="text"
                          value={routeName}
                          onChange={(e) => setRouteName(e.target.value)}
                          className="h-full bg-gray-100 outline-none"
                        />
                      ) : (
                        routeName
                      )}
                    </div>
                  </div>

                  <hr className="mt-2" />

                  <div className="text-xl ml-5">
                    Current Route : <strong> {routeName}</strong>
                  </div>
                  <Span>
                    *if you try out how it's works Click on the url and you can
                    chnage and see Magic
                  </Span>
                </>
              </RefreshButton>
            )}
          </CodePreview>
        </div>

        <div className="space-y-3 mt-4">
          <h2 className="text-2xl font-bold  text-[#282c34]">
            {`useNavigate():`}
          </h2>
          <p className="text-xl">
            The <Span>{`useNavigate()`}</Span> hook navigate to the{" "}
            <Span>pathname</Span>.
          </p>
          <CodeSnippets
            codeString={`import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoutePath() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); 

    setFormData({
      username: e.target.username.value,
      password: e.target.password.value,
    });
    
    if (formData.username && formData.password) {
      navigate('/dashboard');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}`}
          />
          <CodePreview className="mt-5">
            {!preview ? (
              <div>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <RefreshButton
                className="min-h-40 "
                onClick={() => {
                  {
                    setFormData({
                      username: "",
                      password: "",
                    });
                    setSecondPreview("login");
                  }
                }}
              >
                <BrowserView
                  url={` http://localhost:5173/${secondPreview}`}
                  onClick={() => setEdit(true)}
                >
                  <div className="text-xl my-3">
                    Current Route : <strong> {secondPreview}</strong>
                  </div>

                  {secondPreview === "dashboard" ? (
                    <span>
                      Welcome <strong>{formData.username}</strong>
                    </span>
                  ) : (
                    <form
                      action=""
                      onSubmit={handleSubmit}
                      className="space-x-2"
                    >
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </BrowserView>
              </RefreshButton>
            )}
          </CodePreview>
        </div>

        <div className="space-y-3 mt-4 ">
          <h2 className="text-2xl font-bold  text-[#282c34]">
            {`useParams():`}
          </h2>
          <p className="text-xl">
            The <Span>{`useParams()`}</Span> hook returns an object of key/value
            pairs of the dynamic params from the current URL that were matched
            by the
            <Span>{` <Route path>`}</Span>.
          </p>

          <CodeSnippets
            codeString={`import * as React from 'react';
import {  useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  
  return <div>Profile for user {userId}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}`}
          />

          <CodePreview className="mt-5">
            {!preview ? (
              <div>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <RefreshButton className="min-h-40 " isShow={false}>
                <BrowserView
                  url={`http://localhost:5173/users?userId=${userId}
`}
                >
                  <span className="text-xl"> Profile for user: {userId}</span>
                </BrowserView>
              </RefreshButton>
            )}
          </CodePreview>
        </div>
      </section>
    </div>
  );
};

export default DynamicRoutes;
