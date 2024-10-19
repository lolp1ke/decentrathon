import { ProfileType } from "@prisma/client";

export enum Type {
  company,
  applicant,
}

export class CreateUserDto {
  telegramId: string;

  type: ProfileType;

  name: string;
  email: string;

  specialization?: string;
  tags: Array<string>;
}

export class GetUserDto {
  telegramId: string;
}
