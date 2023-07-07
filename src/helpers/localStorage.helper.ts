export const persistData= <T>(key:string, value: T) => {
  localStorage.setItem(key, JSON.stringify({...value}));
};

export const clearData = (key: string) => {
  localStorage.removeItem(key);
};