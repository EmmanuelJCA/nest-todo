import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, {
    description: 'Id of the todo',
  })
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, {
    description: 'Title of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  title?: string;

  @Field(() => String, {
    description: 'Description of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, {
    description: 'State of the todo',
    nullable: true,
  })
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
