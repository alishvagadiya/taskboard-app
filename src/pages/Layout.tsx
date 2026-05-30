import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "border-b-2 p-2 text-sm font-medium",
      isActive
        ? "border-primary text-primary"
        : "border-transparent text-text-muted",
    ].join(" ");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-text">
            Team Workflow Board
          </h1>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/Components" className={navLinkClass}>
              Components
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
}