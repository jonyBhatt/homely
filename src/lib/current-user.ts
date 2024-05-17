import { auth } from "~/auth";

export const CurrentUser = async () => {
  const session = await auth();
  const role = session?.user.role;
  const user = session?.user;
  return {
    role,
    user,
  };
};
