"use client"; 

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { removeBookmark } from "@/lib/actions/companion.actions";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
  isBookmarkList?: boolean;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
  isBookmarkList = false,
}: CompanionsListProps) => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleRemoveBookmark = (companionId: string) => {
    startTransition(async () => {
      await removeBookmark(companionId, pathname);
    });
  };

  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration },index) => (
               <TableRow key={`${id}-${index}`}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link href={`/companions/${id}`} className="flex-grow">
                    <div className="flex items-center gap-2">
                      <div
                        className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(subject) }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={35}
                          height={35}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">{name}</p>
                        <p className="text-lg">{topic}</p>
                      </div>
                    </div>
                  </Link>

                  {isBookmarkList && (
                    <button
                      onClick={() => handleRemoveBookmark(id)}
                      disabled={isPending}
                      title="Remove Bookmark"
                      className="ml-2 hover:opacity-80"
                    >
                      <Image
                        src="/icons/bookmark-filled.svg"
                        alt="Remove bookmark"
                        width={18}
                        height={18}
                      />
                    </button>
                  )}
                </div>
              </TableCell>

              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-2xl">
                    {duration} <span className="max-md:hidden">mins</span>
                  </p>
                  <Image
                    src="/icons/clock.svg"
                    alt="minutes"
                    width={14}
                    height={14}
                    className="md:hidden"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
