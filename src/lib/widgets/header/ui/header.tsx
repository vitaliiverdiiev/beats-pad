import Link from "next/link";
import { routes } from "@/shared/config/routes";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold">beats.pad.</h2>

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
