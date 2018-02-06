import pizzas from './pizzas.json';

const getAllPizzas = () => pizzas;

const getPizzaById = id => pizzas.find(p => p.id === Number(id));

export {
  getAllPizzas,
  getPizzaById,
};
