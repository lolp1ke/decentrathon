import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { UserService } from "@/modules/user/user.service";

import type { CreateUserDto } from "./dto";
import type { user } from "@prisma/client";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create")
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto): Promise<user> {
    return this.userService.create(dto);
  }
}
