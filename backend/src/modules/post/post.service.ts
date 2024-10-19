import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";

import type { CreatePostDto } from "./dto";
import type { post, profile } from "@prisma/client";

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreatePostDto): Promise<post> {
    const profileId = parseInt(dto.profileId);
    const salary = parseFloat(dto.salary);

    const profile: profile = await this.prismaService.profile.findUnique({
      where: { id: profileId },
    });
    if (!profile) throw new BadRequestException("Failed to find profile");

    return this.prismaService.post.create({
      data: {
        profile: {
          connect: {
            id: profileId,
          },
        },

        title: dto.title,
        description: dto.description,
        salary,
        position: dto.position,
      },
    });
  }

  // TODO: implement filter, skip and take
  public async getAll(): Promise<Array<post>> {
    return this.prismaService.post.findMany({
      include: {
        profile: true,
      },
    });
  }
}
