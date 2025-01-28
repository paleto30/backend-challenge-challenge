import { Type } from "class-transformer";
import { IsArray, IsDate, IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { Nationality } from "src/entities/value-objects/nationality";




export class CreateUserDto {

    @IsString()
    @MinLength(1)
    name: string; 

    @IsString()
    @IsEmail()
    email: string;

    @IsDate()
    @Type(() => Date)
    birthdate: Date;

    @IsOptional()
    @IsArray()
    nationalities: Nationality[];    

}