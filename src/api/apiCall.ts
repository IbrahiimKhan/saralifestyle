import axios from 'axios';

const base_url = 'https://prod.saraemart.com/api/';
const Image_base_url = 'https://prod.saraemart.com';

export const getOutlets = async (outlets: string) => {
  const response = await axios.get(base_url + outlets);
  return response.data;
};

export const getOutletImage = async (url: string) => {
  try {
    const response = await axios.get(Image_base_url + url);
    console.log(response, 'what is response');
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
