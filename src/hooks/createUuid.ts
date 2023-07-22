export const createUuid = () => {
  return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[x]/g, (a) => {
    let r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
    let v = a == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
