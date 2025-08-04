"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { UserRoles } from "@prisma/client";
import { loggedInUserAtom } from "@/app/store/user";

export default function AutoLogin() {
  const setLoggedInUser = useSetAtom(loggedInUserAtom);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auto-login");
        if (res.ok) {
          const data = await res.json();
          setLoggedInUser({
            name: data.user.name,
            role: data.user.role as UserRoles,
            email: data.user.email,
          });
        }
      } catch (err) {
        console.error("Auto-login failed:", err);
      }
    };

    fetchUser();
  }, [setLoggedInUser]);

  return null;
}
