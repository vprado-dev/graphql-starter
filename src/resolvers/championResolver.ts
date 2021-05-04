import { isValidObjectId } from 'mongoose';
import { Champion } from '../models/Champion';

const allChampions = () => {
  return Champion.find();
};

const champion = (_: any, { input: { ID } }: any) => {
  return isValidObjectId(ID) ? Champion.findById(ID) : null;
};

const createChampion = async (_: any, { input: { name } }: any) => {
  const champion = await Champion.create({ name });
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
  Champion: {
    ID: (champion: any) => (console.log(1) as any) || champion._id,
  },
};
