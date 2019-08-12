import axios from 'axios';
import env from './environments';

export default axios.create({
  headers: {
    Authorization: env.GITHUB_TOKEN,
  },
});
