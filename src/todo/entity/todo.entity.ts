import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { description: 'Unique identifier for the Todo' })
  id: number;

  @Field(() => String, { description: 'Title of the Todo' })
  title: string;

  @Field(() => String, { description: 'Description of the Todo' })
  description: string;

  @Field(() => Boolean, { description: 'Whether or not the Todo is done' })
  done: boolean = false;
}
