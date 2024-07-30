import axios from 'axios';

const base_url = 'https://prod.saraemart.com/api/'; //we can put in env file for security

export const getOutlets = async (outlets: string) => {
  const response = await axios.get(base_url + outlets);
  return response.data;
};
