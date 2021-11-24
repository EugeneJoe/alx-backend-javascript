export default function returnHowManyArguments(...args) {
  let argnum = 0;
  for (const arg of args) argnum += 1;
  return argnum;
}
