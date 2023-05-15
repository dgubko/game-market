import React from "react";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";
// import storeIcon from "@/lib/assets/store.svg";
import { LibraryIcon, StoreIcon } from "@/components/assets";
import { User } from "@/types/api";

export const SidePanel = () => {
  const router = useRouter();

  const sideLinks = [
    {
      link: "/",
      name: "Store",
      icon: <StoreIcon />,
    },
    {
      link: "/library",
      name: "Library",
      icon: <LibraryIcon />,
      requiresUser: true,
    },
  ];

  const [user, setUser] = React.useState<User>(undefined);
  const {} = useSWR<{ user: User }>(`/api/user/Wheel29`, fetcher, {
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  return (
    <div className="side-panel">
      <h1 className="logo">GAME MARKET</h1>
      {user && (
        <div className="user-info">
          <div className="avatar-placeholder"></div>
          <p>{user.username}</p>
          <Link href={`/profile/${user.username}`}>{">"}</Link>
        </div>
      )}
      <nav>
        {sideLinks.map(
          ({ icon, link, name, requiresUser }) =>
            (!requiresUser || user) && (
              <Link
                key={name}
                className={
                  router.pathname === link ? "active side-link" : "side-link"
                }
                href={link}
              >
                {icon}
                {name}
              </Link>
            )
        )}
      </nav>
    </div>
  );
};
