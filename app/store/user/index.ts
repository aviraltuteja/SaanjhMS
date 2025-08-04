import { LoggedInUser } from "@/app/lib/types/user";
import { UserRoles } from "@prisma/client";
import { atom } from "jotai";

const loggedInUserAtom = atom<LoggedInUser>({
  name: "",
  role: UserRoles.client,
  email: "",
});

export { loggedInUserAtom };
