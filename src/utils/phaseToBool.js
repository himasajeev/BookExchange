import { PHASES } from '../constants/phases';

export const isSell = phase => {
  if (phase === PHASES.REGISTER_SELLERS || phase === PHASES.RETURN_BOOKS)
    return true;
  return false;
};

export const isBuy = phase => {
  if (phase === PHASES.REGISTER_BUYERS || phase === PHASES.ORDER_COLLECTION)
    return true;
  return false;
};
