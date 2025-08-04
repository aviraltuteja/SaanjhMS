"use client";

import { loggedInUserAtom } from "@/app/store/user";
import { useAtomValue } from "jotai";

export default function Dashboard(): React.ReactElement {
  const user = useAtomValue(loggedInUserAtom);
  return (
    <div className="p-8">
      <div className="text-2xl text-primary">Hi {user.name}</div>
    </div>
  );
}
