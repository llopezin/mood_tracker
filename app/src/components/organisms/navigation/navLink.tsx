import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  activeClass,
}: {
  href: string;
  children: React.ReactNode;
  activeClass?: string;
}) => {
  const active = usePathname();

  return (
    <Link href={href} className={active === href ? activeClass : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
