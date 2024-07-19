import { type FC, type ReactNode } from "react";
import { signIn, useSession } from "next-auth/react";

import PageLoader from "~/components/Loaders/PageLoader";

interface AuthenticationProps {
  children: ReactNode;
}

const Authentication: FC<AuthenticationProps> = ({ children }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated") {
    void signIn();
  }

  return <div>{children}</div>;
};

export default Authentication;
