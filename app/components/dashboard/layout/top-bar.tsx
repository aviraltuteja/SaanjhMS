"use client";
// import { logoutUser } from "@/store/user";
// import { useAtom } from "jotai";
import { LogOut, User } from "lucide-react";
import { redirect } from "next/navigation";

export default function Topbar() {
  // const [, logout] = useAtom(logoutUser);

  return (
    <div className="h-20 w-full bg-gray-50 flex items-center justify-end px-6 ">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 hover:text-blue-600 transition text-gray-500">
          <User size={20} />
          <span>Edit Profile</span>
        </button>
        <button
          className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
          onClick={async () => {
            // await logout();
            redirect("/");
          }}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
