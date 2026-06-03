import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class ContactDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[\d\s\-().]{7,20}$/, { message: 'Invalid phone number' })
  @Transform(({ value }) => value?.trim())
  phone: string;

  @IsEmail()
  @MaxLength(254)
  @Transform(({ value }) => value?.trim().toLowerCase())
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  @Transform(({ value }) => value?.trim())
  message: string;
}
