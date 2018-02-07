import extras from './extras.json';

const getAllExtras = () => extras;

const getExtrasByName = name => extras.find(p => p.name === name);

export {
  getAllExtras,
  getExtrasByName,
};
