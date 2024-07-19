import { type FC } from "react";
import Image from "next/image";

const PageLoader: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#121215]">
      <span className="font-days-one flex items-end justify-center text-8xl">
        <Image
          src="/assets/todo-logo-text.svg"
          alt=""
          width={232}
          height={122}
          className="h-[120px] w-[200px]"
        />
        <div className="mb-4 animate-bounce text-[#8665F5]">.</div>
      </span>
    </div>
  );
};

export default PageLoader;
