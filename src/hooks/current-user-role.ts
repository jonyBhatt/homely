import { useSession } from "next-auth/react";

export const CurrentUserRole = () => {
  const session = useSession();
  return session.data?.user.role;
};
