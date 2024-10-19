import { Module } from "@nestjs/common";

import { PostModule } from "./modules/post/post.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [PostModule, UserModule],
})
export class AppModule {}
