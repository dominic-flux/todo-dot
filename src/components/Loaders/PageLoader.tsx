import { type FC } from "react";
import Image from "next/image";

const PageLoader: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#121215]">
      <span className="flex items-end justify-center font-days-one text-8xl">
        <Image
          src="/assets/todo-logo-text.png"
          alt="Todo Logo"
          width={232}
          height={122}
          className="h-auto w-[200px]"
        />
        <div className="-mb-2 animate-bounce text-[#8665F5]">.</div>
      </span>
    </div>
  );
};

export default PageLoader;
