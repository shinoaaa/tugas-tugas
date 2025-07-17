import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";


const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        })
        console.log(response.data.data);
        setUser(response.data.data)
      } catch (error) {
          console.error('error',error.response)
      }
    }

    getData();
  },[id])

  return (
    <div>
      <h1>Detail Pengguna</h1>
      <h1>Ini adalah data ke-{id}</h1>
      <h1>{user.last_name}</h1>
    </div>
  );
}

export default DetailUser;