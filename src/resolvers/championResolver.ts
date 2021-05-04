const champions = [
  {
    ID: '1',
    name: 'Draven',
  },
  {
    ID: '2',
    name: 'Lee Sin',
  },
];

const allChampions = () => {
  return champions;
};

const champion = (_: any, { input: { ID } }: any) => {
  return champions.find((item) => item.ID === ID);
};

const createChampion = (_: any, { input: { name } }: any) => {
  const champion = {
    ID: String(Date.now()),
    name,
  };
  champions.push(champion);
  return champion;
};

export const resolvers = {
  Query: {
    allChampions,
    champion,
  },
  Mutation: {
    createChampion,
  },
};
