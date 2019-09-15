// eslint-disable-next-line import/prefer-default-export
export const ADD_INPUTS = [
  {
    name: 'isbn',
    title: 'ISBN:',
    type: 'text',
  },
  {
    name: 'author',
    title: 'Autor:',
    type: 'text',
  },
  {
    name: 'publisher',
    title: 'Wydawnictwo:',
    type: 'text',
  },
  {
    name: 'title',
    title: 'Tytuł:',
    type: 'text',
  },
];

export const RESPONSES = {
  ERROR: { text: 'Wypełnij wszystkie pola!', isSucces: false },
  SUCCESS: { text: 'Ksiażka dodana pomyślnie!', isSuccess: true },
  SERVER_ERROR: { text: 'Błąd serwera!', isSucces: false },
};
