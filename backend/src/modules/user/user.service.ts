import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "@/modules/prisma/prisma.service";

import type { CreateUserDto } from "./dto";
import type { user } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateUserDto): Promise<user> {
    const tgId = parseInt(dto.telegramId);
    const user: user = await this.prismaService.user.findUnique({
      where: { id: tgId },
    });
    if (user) throw new BadRequestException("User already exist");

    return this.prismaService.user.create({
      data: {
        id: tgId,

        first_name: dto.name,
        email: dto.email,

        profile: {
          create: {
            specialization: dto.specialization || "",
            tags: dto.tags,
          },
        },
      },
    });
  }
}
