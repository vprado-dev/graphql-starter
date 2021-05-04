import { createModel, createSchema } from '@ev-fns/mongo';

interface ChampionProps {
  name: string;
}

export const Champion = createModel<ChampionProps>(
  'Champion',
  createSchema({
    name: {
      type: String,
      required: true,
    },
  }),
  'champions',
);
