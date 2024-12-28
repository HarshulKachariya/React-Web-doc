import { ReactElement } from "react";
import { IoIosRefresh } from "react-icons/io";

const CodePreview = ({ children, className }: any) => {
  return (
    <div className={`col-span-1 p-2 bg-gray-400 rounded-lg ${className!}`}>
      {children}
    </div>
  );
};

export default CodePreview;

interface RefreshButtonProps {
  onClick?: () => void;
  children: ReactElement<any>;
  className?: string;
  isShow?: boolean;
}

export const RefreshButton = ({
  children,
  onClick,
  className,
  isShow = true,
}: RefreshButtonProps) => {
  return (
    <div className={`relative top-1 ${className}`}>
      {children}
      <div
        className={`${isShow ? "visible" : "hidden"} absolute top-1 right-2`}
      >
        <button
          className={` bg-[#282c34] p-2 rounded-md hover:shadow-md text-white`}
          onClick={onClick}
        >
          <IoIosRefresh className="text-xl text-white hover:transition-all hover:duration-1000 hover:rotate-180 " />
        </button>
      </div>
    </div>
  );
};

interface BrowserViewProps {
  children: any;
  url?: any;
  onClick?: () => void;
}

export const BrowserView = ({ url, children, onClick }: BrowserViewProps) => {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-600"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
        </div>
        <div
          className="w-full h-7 rounded-xl bg-gray-300  px-2"
          onClick={onClick}
        >
          {url}
        </div>
      </div>

      <hr className="mt-2" />

      {children}
    </>
  );
};

export const Span = ({ children }: any) => {
  return <span>{children}</span>;
};
