import Link from "next/link";
import { routes } from "@/shared/config/routes";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <Logo />

        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href={routes.home.path()}>{routes.home.label}</Link>
            </li>
            <li>
              <Link href={routes.lyrics.path()}>{routes.lyrics.label}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
