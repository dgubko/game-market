import Link from "next/link";
import { useRouter } from "next/router";
// import storeIcon from "@/lib/assets/store.svg";
import { LibraryIcon, StoreIcon } from "@/components/assets";

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
    },
  ];

  return (
    <div className="side-panel">
      <h1 className="logo">GAME MARKET</h1>
      <div className="user-info">
        <div className="avatar-placeholder"></div>
        <p>Wheel29</p>
        <Link href="/">{">"}</Link>
      </div>
      <nav>
        {sideLinks.map(({ icon, link, name }) => (
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
        ))}
      </nav>
    </div>
  );
};
