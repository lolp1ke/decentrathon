import { Module } from "@nestjs/common";

import { UserService } from "@/modules/user/user.service";
import { UserController } from "@/modules/user/user.controller";
import { PrismaModule } from "@/modules/prisma/prisma.module";

@Module({
  providers: [UserService],
  controllers: [UserController],

  imports: [PrismaModule],
})
export class UserModule {}
