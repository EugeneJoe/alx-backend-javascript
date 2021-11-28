import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values.shift();
      const { firstName, lastName } = values.pop();
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
