require('dotenv').config();
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

console.log(process.env.GOOGLE_MAPS_API_KEY);
