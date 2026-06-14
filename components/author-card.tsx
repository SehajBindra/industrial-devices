import Image from "next/image";

import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <Image
        src={author.avatar}
        alt={author.name}
        width={32}
        height={32}
        className="h-8 w-8 rounded-full border border-border object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold tracking-tight text-balance">
          {author.name}
        </h3>
        <p className="text-xs text-muted-foreground text-balance">
          {author.position}
        </p>
      </div>
    </div>
  );
}
