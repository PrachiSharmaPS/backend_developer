import React, { useEffect, useState } from "react"
import axios from "axios";
function TableForEdit() {
  const [Title, setTitle] = useState([])

  const fetchData = async function (event) {
    event.preventDefault();
    await axios.get("http://localhost:8000/getTask").then((res) => {
      setTitle(res.data.data.Title)
    }).catch((err) => { alert(err.response.data.message + err.response.status + " Error") })
}

  useEffect(() => {
    fetchData()
  }, [])

    return(
        <>
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tasks</th>
            <th scope="col">Open</th>
            <th scope="col">In-Progess</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{Title}</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>done</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>done</td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>done</td>

          </tr>
          
        </tbody>
      </table>
      
     
      </>
    );
  }

  export default TableForEdit