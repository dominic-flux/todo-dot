import { type FC } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const PageHeader: FC = () => {
  const { data: session } = useSession();

  return (
    <header className="flex w-full items-end justify-between">
      <Image
        src="/assets/todo-logo.png"
        alt="Todo Logo"
        width={258}
        height={122}
        className="h-auto w-[258px]"
      />

      <div className="flex flex-col items-start justify-end space-y-2">
        <div className="flex flex-col items-start justify-start text-sm font-medium text-[#83839E]">
          <span>{session?.user.name}</span>
          <span>{session?.user.email}</span>
        </div>

        <button
          className="cursor-pointer text-sm font-medium text-[#83839E] hover:underline"
          onClick={() => void signOut()}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
