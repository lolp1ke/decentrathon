import { WebApp } from "@twa-dev/types";

import { Layout } from "@/components/Layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TUserProfile, useUserData } from "@/hooks/userData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface Props {
  webApp: WebApp;
}

export function Profile({ webApp }: Props) {
  const [user, setUser] = useState<TUserProfile | null>(null);
  const { userData, getUserInitials, getUser } = useUserData(webApp);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Layout webApp={webApp}>
      <Card>
        <CardHeader>
          <div className={"flex gap-3 items-start"}>
            <div className={"flex flex-col gap-4 max-w-[100px]"}>
              <Avatar className={`w-[96px] h-[96px]`}>
                <AvatarImage src={userData?.photo_url} />
                <AvatarFallback>{getUserInitials()}</AvatarFallback>
              </Avatar>
              <div
                className={"flex flex-wrap gap-3 items-center justify-evenly"}
              >
                {user &&
                  user.profile &&
                  user.profile.tags?.map((tag, i) => {
                    if (i + 1 > 5) return;

                    return (
                      <Badge key={`${tag}-${i}`} className={"text-center"}>
                        {tag}
                      </Badge>
                    );
                  })}
              </div>
            </div>

            <div className={"flex flex-col gap-2"}>
              <CardTitle className={"mb-4"}>Profile</CardTitle>
              <CardDescription>
                Full name: {user?.first_name} {user?.last_name}
              </CardDescription>
              <CardDescription>
                Email: {user?.email || "not provided"}
              </CardDescription>
              <CardDescription>
                Specialization:{" "}
                {user?.profile?.specialization || "not provided"}
              </CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Layout>
  );
}
