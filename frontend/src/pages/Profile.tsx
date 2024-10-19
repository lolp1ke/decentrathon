import { WebApp } from "@twa-dev/types";

import { Layout } from "@/components/Layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserData } from "@/hooks/userData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Props {
  webApp: WebApp;
}

export function Profile({ webApp }: Props) {
  const { userData, getUserInitials, getUserTags } = useUserData(webApp);

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
                {getUserTags().map((tag, i) => {
                  if (i + 1 > 5) return;

                  return <Badge key={`${tag}-${i}`}>{tag}</Badge>;
                })}
              </div>
            </div>

            <div className={"flex flex-col gap-2"}>
              <CardTitle className={"mb-4"}>Profile</CardTitle>
              <CardDescription>
                Full name: {userData?.first_name} {userData?.last_name}
              </CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
              <CardDescription>Other details // TODO</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Layout>
  );
}
