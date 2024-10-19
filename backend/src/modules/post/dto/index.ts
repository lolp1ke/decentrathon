import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @IsNumber()
  profileId: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @IsNotEmpty()
  position: string;
}
