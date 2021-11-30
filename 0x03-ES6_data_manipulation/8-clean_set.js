export default function cleanSet(set, startString) {
  let res = '';
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      res = `${res + element.substr(startString.length)}-`;
    }
    return res;
  });
  return res.substring(0, res.length - 1);
}
