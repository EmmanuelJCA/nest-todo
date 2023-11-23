import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Todo quick aggregations' })
export class AggregationsType {
  @Field(() => Int, { description: 'Total todos' })
  total: number;

  @Field(() => Int, { description: 'Total pending todos' })
  pending: number;

  @Field(() => Int, { description: 'Total completed todos' })
  completed: number;
}
