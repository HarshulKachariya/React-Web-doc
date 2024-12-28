const GetStarted = () => {
  const commonStyle = `bg-gray-800 text-white rounded-lg p-4 mb-6`;
  const title = `text-3xl font-bold mb-4 text-slate-800`;
  return (
    <div>
      {/* Installation Section */}
      <section id="installation" className="mb-10">
        <h2 className={title}>Installation</h2>
        <p className="text-gray-700 mb-4">
          Before you start, ensure you have <strong>Node.js</strong> and{" "}
          <strong>npm</strong> installed on your machine. Download Node.js from{" "}
          <a
            href="https://nodejs.org/"
            className="text-blue-500 hover:underline"
          >
            nodejs.org
          </a>
          .
        </p>
        <div className={commonStyle}>
          <pre>
            <code>node -v</code>
            <br />
            <code>npm -v</code>
          </pre>
        </div>
        <p className="text-gray-700 mb-4">
          To create a new React project, run the following command:
        </p>
        <div className={commonStyle}>
          <pre>
            <code>npx create-react-app my-react-app</code>
          </pre>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="mb-10">
        <h2 className={title}>Setup</h2>
        <p className="text-gray-700 mb-4">
          Navigate to your project directory and start the development server:
        </p>
        <div className={commonStyle}>
          <pre>
            <code>cd my-react-app</code>
            <br />
            <code>npm start</code>
          </pre>
        </div>
        <p className="text-gray-700">
          Your React application should now be running on{" "}
          <strong>http://localhost:3000</strong>.
        </p>
      </section>

      {/* Build Section */}
      <section id="build">
        <h2 className={title}>Building for Production</h2>
        <p className="text-gray-700 mb-4">
          To create a production-ready build of your application, run:
        </p>
        <div className={commonStyle}>
          <pre>
            <code>npm run build</code>
          </pre>
        </div>
        <p className="text-gray-700">
          This command creates a <strong>build/</strong> directory with a
          production build of your app.
        </p>
      </section>
    </div>
  );
};

export default GetStarted;
