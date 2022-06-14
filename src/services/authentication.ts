export const authToken: string = "@gameby-token";
export const isAuthenticated = () => localStorage.getItem(authToken) !== null;
export const getToken = () => localStorage.getItem(authToken);
export const login = (token: string) => {
  localStorage.setItem(authToken, token);
};
