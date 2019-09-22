import { PHASES } from '../constants/phases';

export const isSell = phase => {
  return phase === PHASES.REGISTER_SELLERS || phase === PHASES.RETURN_BOOKS;
};

export const isBuy = phase => {
  return phase === PHASES.REGISTER_BUYERS || phase === PHASES.ORDER_COLLECTION;
};
