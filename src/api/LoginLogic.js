import axios from 'axios'

export const loginService = async (email, password) => {
  let res = await axios({
    method: 'post',
    url: 'api/login',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify({
      email,
      password,
    }),
  })
  return res
}
