export enum Type {
  company,
  chel,
}

export class CreateUserDto {
  telegramId: number;

  type: Type;

  name: string;
  email: string;

  specialization?: string;
  tags: Array<string>;
}
