let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const getToken = () => {
  return token;
};

module.exports = {
  setToken,
  getToken
};
