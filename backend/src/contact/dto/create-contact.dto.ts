import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(120)
  name!: string;

  @IsEmail({}, { message: 'A valid email address is required.' })
  @MaxLength(180)
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Company or organization is required.' })
  @MaxLength(160)
  company!: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  phone?: string;

  @IsString()
  @MinLength(10, { message: 'Please share a few more details (10+ characters).' })
  @MaxLength(4000)
  message!: string;

  @IsOptional()
  @IsBoolean()
  scheduleConsultation?: boolean;
}
