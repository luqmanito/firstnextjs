import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_HOST_KEY;

export const loginApi = (data) => {
  const URL = baseUrl + "/auth/login";
  return axios.post(URL, data);
};

export const logoutApi = (token) => {
  const URL = baseUrl + "/auth/logout";
  // console.log();
  return axios.post(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const signup = (body) => {
  const URL = baseUrl + "/auth/register";
  return axios.post(URL, body);
};

export const inputPin = (body, user_id, token) => {
  const URL = baseUrl + `/user/pin/${user_id.user_id}`;
  // console.log(body);
  return axios.patch(URL, body, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const passApi = (body, user_id, token) => {
  const URL = baseUrl + `/user/password/${user_id.user_id}`;
  return axios.patch(URL, body, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};


export const topUpApi = (body, token) => {
  const URL = baseUrl + `/transaction/top-up`;
  // console.log(body, token);
  return axios.post(URL, body, {
    headers: {
      da: console.log(`Bearer ${token.token}`),
      Authorization: `Bearer ${token.token}`,
    },
  });
};


export const transferBalance = (body, token) => {
  const URL = baseUrl + `/transaction/transfer`;
  // console.log(token, body);
  return axios.post(URL, body, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const resetPassApi = (body) => {
  const URL = baseUrl + `/auth/forgot-password`;
  // console.log(body);
  return axios.post(URL, body);
};

export const createPassApi = (body) => {
  const URL = baseUrl + `/auth/reset-password`;
  // console.log(body);
  return axios.patch(URL, body);
};

export const getUsers = (token) => {
  const URL = baseUrl + `/user?page=1&limit=150&search=ma&sort=firstName ASC`;
  // console.log(URL);
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const getUsersHistory = (token) => {
  const URL = baseUrl + `/transaction/history?page=1&limit=4&filter=MONTH`;
  // console.log(token);
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
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

export const updatePhone = (user_id, body, token) => {
  const URL = baseUrl + `/user/profile/${user_id.user_id}`;
  return axios.patch(URL, body, {
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

export const editProfile = (data, token, user_id) => {
  // console.log(user_id);
  const URL = baseUrl + `/user/image/${user_id.user_id}`
  return axios.patch(URL, data, {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  })
}