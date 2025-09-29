"use client";

import { useRouter } from "next/navigation";
import { Home, Users, Settings, UserRoundPlus, UserCog } from "lucide-react";
import { UserRoles } from "@prisma/client";

const restrictedRoutes: Record<UserRoles, string[]> = {
  [UserRoles.admin]: [],
  [UserRoles.client]: ["users", "settings", "manage-patients"],
};

export default function Navbar({
  userId,
  role,
}: {
  userId: string;
  role: string;
}) {
  const router = useRouter();

  const validRole = (role: string): UserRoles => {
    return Object.values(role).includes(role as UserRoles)
      ? (role as UserRoles)
      : UserRoles.client;
  };

  const userRole = validRole(role);

  const handleNavigate = (route: string) => () => {
    router.push(`/${userId}/${role}/dashboard/${route}`);
  };

  // Define navigation items
  const navItems = [
    { icon: <Home size={20} />, label: "Dashboard", route: "" },
    { icon: <Users size={20} />, label: "Users", route: "users" },
    { icon: <Settings size={20} />, label: "Settings", route: "settings" },
    {
      icon: <UserRoundPlus size={20} />,
      label: "Add Patients",
      route: "add-patients",
    },
    {
      icon: <UserCog size={20} />,
      label: "Manage Patients",
      route: "manage-patients",
    },
  ];

  // Filter navigation items based on role restrictions
  const allowedNavItems = navItems.filter(
    (item) => !restrictedRoutes[userRole].includes(item.route)
  );

  return (
    <div className="h-full bg-gradient-to-b from-primary to bg-red-950 flex flex-col items-center py-6 px-2 gap-4 text-whiteshade">
      {allowedNavItems.map((item) => (
        <NavItem
          key={item.route}
          icon={item.icon}
          label={item.label}
          onClick={handleNavigate(item.route)}
        />
      ))}
    </div>
  );
}

function NavItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full rounded-md items-center px-4 py-2 gap-2 text-whiteshade hover:text-primary transition hover:bg-whiteshade cursor-pointer">
      {icon}
      <span>{label}</span>
    </button>
  );
}
