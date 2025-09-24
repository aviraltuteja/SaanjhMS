import { UserRoles } from "@prisma/client";

export interface LoggedInUser {
  name: string;
  role: UserRoles;
  email: string;
}
