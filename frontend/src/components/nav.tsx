import Link from "next/link";

import type { WebAppUser } from "@twa-dev/types";

import { ListIcon, PlusSquareIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface Props {
  userData: WebAppUser | null;
}

export function NavBar({ userData }: Props) {
  return (
    <nav className={"flex justify-between items-center w-full py-4 px-3"}>
      <Button variant={"outline"}>
        <Link href={{ pathname: "/posts" }}>
          <ListIcon />
        </Link>
      </Button>

      <Dialog>
        <DialogTrigger>
          <Button variant={"outline"}>
            <PlusSquareIcon />
          </Button>
        </DialogTrigger>
      </Dialog>

      <Button variant={"link"}>
        <Link href={{ pathname: "/profile" }}>
          <Avatar>
            <AvatarImage src={userData?.photo_url} />
            <AvatarFallback>
              {userData?.first_name.at(0)?.toUpperCase()}
              {userData?.last_name?.at(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Link>
      </Button>
    </nav>
  );
}
