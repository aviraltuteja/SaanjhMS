"use client";

import { useRouter } from "next/navigation";
import { Home, Users, Settings, UserRoundPlus, UserCog } from "lucide-react";

// const restrictedRoutes: Record<UserRole, string[]> = {
//   [Roles.ADMIN]: [],
//   [Roles.MANAGER]: ["manage-patients"],
//   [Roles.USER]: ["users", "settings", "manage-patients"],
// };

export default function Navbar({
  location,
  role,
}: {
  location: string;
  role: string;
}) {
  const router = useRouter();

  // const validRole = (role: string): UserRole => {
  //   return Object.values(Roles).includes(role as Roles)
  //     ? (role as UserRole)
  //     : Roles.USER;
  // };

  // const userRole = validRole(role);

  const handleNavigate = (route: string) => () => {
    router.push(`/${location}/${role}/dashboard/${route}`);
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
  // const allowedNavItems = navItems.filter(
  //   (item) => !restrictedRoutes[userRole].includes(item.route)
  // );

  return (
    <div className="h-full bg-gradient-to-b from-primary to bg-red-950 flex flex-col items-center py-6 px-2 gap-4 text-whiteshade">
      {navItems.map((item) => (
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
