import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { NavLink, useHistory } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { LoginLogic } from '../api/LoginLogic'


const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e) => {
    e.preventDefault();
    if (email, password) {
      LoginLogic(email, password)
        .then((res) => {

          localStorage.setItem("token", res.data.token);
          // <Redirect to="/adminpanel" />
          history.push('adminpanel')
          window.location.reload();


        })
        .catch(err => console.log(err))
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };


  /**css things */
  const paperStyle = { padding: 20, height: '50%', width: 280, margin: "150px auto" }
  const btnstyle = { margin: '8px 0' }
  return (
    <div style={{ paddingTop: '10%' }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Typography variant='h5'>ورود به پنل مدیریت</Typography>
          </Grid>

          <form onSubmit={handleLogin} noValidate autoComplete="off">
            <TextField label='نام کاربری' fullWidth required onChange={handleChange} value={email} name="email" autoComplete="email" />
            <TextField label='رمزعبور' type='password' fullWidth required onChange={handleChange} value={password} name="password" type="password" id="password" />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="مرا به خاطر بسپار" />
            <Button onClick={handleLogin} color='primary' variant="contained" style={btnstyle} fullWidth>ورود</Button>


            <NavLink to='/'>
              <Typography variant='h5'>بازگشت</Typography>
            </NavLink>
          </form>
        </Paper>

      </Grid>
    </div>
  )
}

export default Login