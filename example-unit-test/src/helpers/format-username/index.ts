export const formatUserName = (username: string) => {
  return username.startsWith('@') ? username : '@' + username;
};
