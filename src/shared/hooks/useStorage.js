const setJsonItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getJsonIten = (key) => JSON.parse(localStorage.getItem(key));

const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = (key) => localStorage.getItem(key);

const useSrorage = () => ({
  setJsonItem,
  getJsonIten,
  getItem,
  setItem,
});

export default useSrorage;
