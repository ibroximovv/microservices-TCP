import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'kimdir' })
    @IsString()
    name: string

    @ApiProperty({ example: 1923 })
    @IsInt()
    @Type(() => Number)
    year: number
}