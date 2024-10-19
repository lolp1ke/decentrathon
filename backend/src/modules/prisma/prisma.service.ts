import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public async onModuleDestroy() {
    await this.$connect().then(() => {
      console.log("Prisma connected to db");
    });
  }
  public async onModuleInit() {
    await this.$disconnect().then(() => {
      console.log("Prisma disconnected from db");
    });
  }
}
