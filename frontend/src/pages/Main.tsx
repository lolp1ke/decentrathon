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
        setPosts(posts);
      });
  }, []);

  return (
    <Layout webApp={webApp}>
      <Carousel className={"flex"}>
        <CarouselContent className={"flex justify-center items-center"}>
          {posts.map((post, _) => {
            return (
              <CarouselItem key={post.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Position: {post.position}</CardDescription>
                    <CardDescription>Salary: {post.salary}</CardDescription>
                    <CardDescription className={"mt-4"}>
                      {post.description}
                    </CardDescription>
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
