export enum Type {
  company,
  applicant,
}

export class CreateUserDto {
  telegramId: number;

  type: Type;

  name: string;
  email: string;

  specialization?: string;
  tags: Array<string>;
}
