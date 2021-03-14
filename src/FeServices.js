import { ajax } from '@lion/ajax';

const baseUrl = 'https://felearning-api.herokuapp.com';
const getRequest = ({ url }) => {
  const requestURL = `${baseUrl}${url}`;
  return ajax
    .request(requestURL)
    .then(response => response.json())
    .then(result => result);
};

const postRequest = ({ url, data }) => {
  const requestURL = `${baseUrl}${url}`;
  return ajax
    .requestJson(requestURL, {
      method: 'POST',
      body: data,
    })
    .then(result => result.body);
};
export const FeServices = {
  getRequest,
  postRequest,
};
