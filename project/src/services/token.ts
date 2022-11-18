const TOKEN_NAME = 'cities-token';

const getToken = (): string => {
  const token = localStorage.getItem(TOKEN_NAME);
  return token ?? '';
};

const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_NAME, token);
};


export {getToken, saveToken};
