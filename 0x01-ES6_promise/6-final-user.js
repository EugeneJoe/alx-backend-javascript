import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.forEach((result) => res.push({ status: 'fulfilled', value: result })))
    .catch((err) => res.push({ status: 'rejected', value: err.toString() }));
}
