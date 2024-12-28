import { useState, Suspense, lazy } from "react";
import { Loading } from "./MarkdownPreview";

const MarkdownPreview = lazy(() => delayForDemo(import("./MarkdownPreview")));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="p-2 rounded-md hover:shadow-md outline-none w-48"
      />
      <label className="text-lg">
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />{" "}
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2 className="text-xl">Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </div>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
