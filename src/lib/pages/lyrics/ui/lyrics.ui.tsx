import { Button, Icon } from "@/shared/ui";
import { LyricsList } from "@/widgets/lyrics-list/ui/lyrics-list";
import Link from "next/link";

export const LyricsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center gap-4">
        <h2>Lyrics Page List</h2>
        <Button variant="outline" size="icon" asChild>
          <Link href="/lyrics/add">
            <Icon icon="plus" />
          </Link>
        </Button>
      </div>

      <LyricsList />
    </div>
  );
};
