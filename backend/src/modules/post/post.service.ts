import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "@/modules/prisma/prisma.service";

import type { CreatePostDto } from "./dto";
import type { post, profile } from "@prisma/client";

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreatePostDto): Promise<post> {
    const profile: profile = await this.prismaService.profile.findUnique({
      where: { id: dto.profileId },
    });
    if (!profile) throw new BadRequestException("Failed to find profile");

    return this.prismaService.post.create({
      data: {
        profile: {
          connect: {
            id: dto.profileId,
          },
        },

        title: dto.title,
        description: dto.description,
        salary: dto.salary,
        position: dto.position,
      },
    });
  }

  // TODO: implement filter, skip and take
  public async getAll(): Promise<Array<post>> {
    return this.prismaService.post.findMany();
  }
}
