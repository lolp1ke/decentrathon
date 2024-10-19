import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @IsNumberString()
  profileId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  salary: string;

  @IsNotEmpty()
  position: string;
}
