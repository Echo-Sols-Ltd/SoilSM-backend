import {
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  IsEnum,
  IsPhoneNumber,
} from 'class-validator';

import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsOptional()
  @IsPhoneNumber('RW') // change based on country
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role; // defaults to FARMER in Prisma
}