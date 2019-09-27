export const ADD_INPUTS = [
  {
    name: 'isbn',
    label: 'ISBN',
  },
  {
    name: 'author',
    label: 'Autor',
  },
  {
    name: 'publisher',
    label: 'Wydawnictwo',
  },
  {
    name: 'title',
    label: 'Tytuł',
  },
];

export const RESPONSES = {
  ERROR: { text: 'Wypełnij wszystkie pola!', isSucces: false },
  SUCCESS: { text: 'Ksiażka dodana pomyślnie!', isSuccess: true },
  SERVER_ERROR: { text: 'Błąd serwera!', isSucces: false },
};
