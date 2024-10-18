import type { WebApp } from "@twa-dev/types";
import { Button } from "./ui/button";
import { ListIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { CreatePost } from "@/components/CreatePost";
import { useUserData } from "@/hooks/userData";

interface Props {
  webApp: WebApp;
}

export function Navbar({ webApp }: Props) {
  const { userData, isCompany, getUserInitials } = useUserData(webApp);

  return (
    <nav className={"flex gap-4 justify-between items-center"}>
      <Button variant={"outline"}>
        <Link to={{ pathname: "/" }}>
          <ListIcon />
        </Link>
      </Button>

      {!isCompany() && <CreatePost />}

      <Link to={{ pathname: "/profile" }}>
        <Avatar>
          <AvatarImage src={userData?.photo_url} />
          <AvatarFallback>{getUserInitials()}</AvatarFallback>
        </Avatar>
      </Link>
    </nav>
  );
}
