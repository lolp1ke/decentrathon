import { WebApp } from "@twa-dev/types";

import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { config } from "@/config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TProfile } from "@/hooks/userData";
import { Badge } from "@/components/ui/badge";

interface Props {
  webApp: WebApp;
}

export type Post = {
  id: number;
  profileId: number;

  title: string;
  description: string;
  position: string;
  salary: number;

  profile: TProfile;
};

export function Main({ webApp }: Props) {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch(`${config.BACKEND_PREFIX}/post/get-all`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((posts) => {
        console.log(posts);

        setPosts(posts);
      });
  }, []);

  return (
    <Layout webApp={webApp} className={"justify-center items-center h-full"}>
      <Carousel>
        <CarouselContent>
          {posts.map((post, _) => {
            return (
              <CarouselItem key={post.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={"flex flex-col gap-2"}>
                    <CardDescription>Position: {post.position}</CardDescription>
                    <CardDescription>
                      Specialization: {post.profile.specialization}
                    </CardDescription>
                    <div
                      className={
                        "flex flex-wrap gap-2 justify-start items-center"
                      }
                    >
                      <CardDescription className={"mr-2"}>
                        Tags:{" "}
                      </CardDescription>

                      {post.profile.tags?.map((tag, i) => {
                        return (
                          <Badge key={`${tag}-${i}`} className={"text-center"}>
                            {tag}
                          </Badge>
                        );
                      })}
                    </div>

                    <CardDescription>Salary: {post.salary}$</CardDescription>
                    <div className={"mt-4"}>
                      <CardDescription>Description:</CardDescription>
                      <CardDescription>{post.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Layout>
  );
}
