import axios from "axios";

export const LoginLogic = async (email, password) => {
  let res = await axios({
    method: "post",
    url: "https://reqres.in/api/login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
};
