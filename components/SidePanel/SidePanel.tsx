import Link from "next/link";

export const SidePanel = () => {
  return (
    <div className="side-panel">
      <h1 className="logo">GAME MARKET</h1>
      <Link href="/">Wheel29</Link>
      <Link href="/">Store</Link>
      <Link href="/">Library</Link>
    </div>
  );
};
