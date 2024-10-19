import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";

import { PostService } from "@/modules/post/post.service";

import type { CreatePostDto } from "./dto";
import type { post } from "@prisma/client";

@Controller("/post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post("/create")
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreatePostDto): Promise<post> {
    return this.postService.create(dto);
  }

  @Get("/get-all")
  @HttpCode(HttpStatus.OK)
  public async getAll(): Promise<Array<post>> {
    return this.postService.getAll();
  }

  @Post("/response")
  @HttpCode(HttpStatus.OK)
  public async response() {}
}
