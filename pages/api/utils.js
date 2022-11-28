import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export const baseUrl = process.env.NEXT_PUBLIC_HOST_KEY;

export const loginApi = (data) => {
  const URL = baseUrl + "/auth/login";
  return axios.post(URL, data);
};

export const signup = (body) => {
  const URL = baseUrl + "/auth/register";
  return axios.post(URL, body);
};

export const inputPin = (body, user_id, token) => {
  const URL = baseUrl + `/user/pin/${user_id.user_id}`;
  return axios.patch(URL, body, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const topUpApi = (body, token) => {
  const URL = baseUrl + `/transaction/top-up`;
  console.log(body, token);
  return axios.post(URL, body, {
    headers: {
      da: console.log(`Bearer ${token.token}`),
      Authorization: `Bearer ${token.token}`,
    },
  });
};

// export const transferBalance = (id, body, token) => {
//   const URL = baseUrl + `/transaction/transfer`;
//   console.log(id, body, token);
//   return axios.post(URL, id, body, {
//     headers: {
//       Authorization: `Bearer ${token.token}`,
//     },
//   });
// };

export const transferBalance = (body, token) => {
  const URL = baseUrl + `/transaction/transfer`;
  console.log(token, body);
  return axios.post(URL, body, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const getUsers = (token) => {
  const URL = baseUrl + `/user?page=1&limit=4&search=ma&sort=firstName ASC`;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const getProfile = (user_id, token) => {
  const URL = baseUrl + `/user/profile/${user_id.user_id}`;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const getProfile2 = (user_id, token) => {
  const URL = baseUrl + `/user/profile/${user_id}`;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const checkPinUser = (body, token) => {
  const URL = baseUrl + `/user/pin/${body}`;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};


