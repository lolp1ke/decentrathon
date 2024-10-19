import { Module } from "@nestjs/common";

import { PostService } from "@/modules/post/post.service";
import { PostController } from "@/modules/post/post.controller";
import { PrismaModule } from "@/modules/prisma/prisma.module";

@Module({
  providers: [PostService],
  controllers: [PostController],

  imports: [PrismaModule],
})
export class PostModule {}
