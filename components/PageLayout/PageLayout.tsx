import { SidePanel } from "@/components/SidePanel/SidePanel";

export default function PageLayout({ children }) {
  return (
    <main className="page-wrapper">
      <SidePanel />
      {children}
    </main>
  );
}
