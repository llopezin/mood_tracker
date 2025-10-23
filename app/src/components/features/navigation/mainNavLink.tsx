import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const active = usePathname();

  return (
    <Link
      href={href}
      className={
        active === href ? "main-nav-link--active highlight" : "highlight"
      }
    >
      {children}
    </Link>
  );
};

export default MainNavLink;
