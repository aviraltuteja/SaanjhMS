import Topbar from "@/app/components/dashboard/layout/top-bar";
import Navbar from "@/app/components/dashboard/layout/navbar";
import { ReactNode } from "react";
import AutoLogin from "@/app/components/auth/auto-login";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="bg-gray-50 w-screen h-screen flex">
      <AutoLogin />
      <div className="h-screen w-[15%]" id="nav-bar">
        <Navbar location={""} role={""} />
      </div>
      <div className="min-h-screen w-[85%] flex flex-col">
        <div id="top-bar" className="w-full h-20">
          <Topbar />
        </div>
        <div id="main-space " className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
