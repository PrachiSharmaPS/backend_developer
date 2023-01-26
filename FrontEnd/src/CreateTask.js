import { useState } from 'react'
import axios from 'axios'

function CreateTask() {
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")


  const registerTask = async function (event) {
    event.preventDefault();
    await axios.post("http://localhost:8000/createTask", {
      Title,Description
    }).then((res) => {
        alert(` YourTask Created Succesfully
        Your One Time Task Id is ${res.data.data._id} 
        `
        )
        console.log(res.data.data)

    }).catch((err) => { alert(err.response.data.message + err.response.status + " Error") })
}

    return(
 <div className="Body">
    <h1>Create Task</h1>
<form onSubmit={registerTask} >
  <div className="mb-3">
    <label className="form-label">Title</label>
    <br/>
    <input type="text" maxLength={20} size="60"  placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <br/>
    <input type="text" size="60"  placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    );
  }

  export default CreateTask
