export enum Type {
  company,
  applicant,
}

export class CreateUserDto {
  telegramId: string;

  type: Type;

  name: string;
  email: string;

  specialization?: string;
  tags: Array<string>;
}

export class GetUserDto {
  telegramId: string;
}
