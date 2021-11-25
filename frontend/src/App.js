import { useState,useEffect } from 'react'
import axios from "axios";

const baseURL = "http://localhost:8400";

function App() {

  const [obj, setObj] = useState({})
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  useEffect(() => {
    axios.get(`${baseURL}/data`).then((res) => {
      console.log(res.data);
      setObj(res.data);
    });
  }, [])

    const frmSubmit = (e) => {
      e.preventDefault();
      // console.log(e);
          axios
            .post(`${baseURL}/getData`, {
              body: {email,password},
            })
            .then((res) => {
              console.log(res.data)
            });
    };

  return (
    <div>
      <h1>React App</h1>
      {/* <h2>Message from backend: {msg}</h2> */}

      <form onSubmit={frmSubmit}>
        <p>Enter Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <p>Enter Password</p>
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <p>Name : {obj.name }</p>
      <p>Age : {obj.age }</p>
      <p>Salary : {obj.salary }</p>
    </div>
  );
}

export default App;
