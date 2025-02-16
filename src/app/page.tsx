import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header>
        <div className="container mx-auto py-4 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">beats.pad.</h2>

          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link href={routes.home.path()}>{routes.home.label}</Link>
              </li>
              <li>
                <Link href={routes.editor.path()}>{routes.editor.label}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Button variant="outline">Create new song</Button>
    </div>
  );
}
