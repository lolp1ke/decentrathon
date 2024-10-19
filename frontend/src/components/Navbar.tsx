import type { WebApp } from "@twa-dev/types";
import { Button } from "./ui/button";
import { ListIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { CreatePost } from "@/components/CreatePost";
import { TUserProfile, useUserData } from "@/hooks/userData";
import { useEffect, useState } from "react";

interface Props {
  webApp: WebApp;
}

export function Navbar({ webApp }: Props) {
  const [user, setUser] = useState<TUserProfile | null>(null);
  const { userData, getUserInitials, getUser } = useUserData(webApp);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <nav className={"flex gap-4 justify-between items-center"}>
      <Button variant={"outline"}>
        <Link to={{ pathname: "/" }}>
          <ListIcon />
        </Link>
      </Button>

      {user?.profile?.type !== "applicant" && <CreatePost />}

      <Link to={{ pathname: "/profile" }}>
        <Avatar>
          <AvatarImage src={userData?.photo_url} />
          <AvatarFallback>{getUserInitials()}</AvatarFallback>
        </Avatar>
      </Link>
    </nav>
  );
}
