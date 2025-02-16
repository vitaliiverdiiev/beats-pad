import { Button, Icon } from "@/shared/ui";
import Link from "next/link";

export const LyricsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center gap-4">
        <h2>Lyrics Page List</h2>
        <Button variant="outline"  size="icon" asChild>
          <Link href="/lyrics/add">
            <Icon icon="plus" />
          </Link>
        </Button>
      </div>

      <ul className="mt-8 space-y-4 list-disc pl-4">
        <li>
          <Link href="/lyrics/1">Far East</Link>
        </li>
        <li>
          <Link href="/lyrics/2">Valhalla</Link>
        </li>
      </ul>
    </div>
  );
};
