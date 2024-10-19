import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from "@nestjs/common";

import { UserService } from "./user.service";

import type { CreateUserDto, GetUserDto } from "./dto";
import type { user } from "@prisma/client";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create")
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto): Promise<user> {
    return this.userService.create(dto);
  }

  @Get("/get/:id")
  @HttpCode(HttpStatus.OK)
  public async get(@Param("id") dto: string): Promise<user> {
    return this.userService.get(dto);
  }
}
