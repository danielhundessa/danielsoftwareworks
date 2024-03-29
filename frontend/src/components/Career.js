import { Button, Container, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function Career() {
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [careers, setCareers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const career = { description, address };
    console.log(career);

    fetch("http://employee-track-env.eba-mbkfsp9n.us-east-1.elasticbeanstalk.com/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(career)

  }).then(()=>{
    console.log("New career added")
  })
  };

  useEffect(() => {
   fetch("http://employee-track-env.eba-mbkfsp9n.us-east-1.elasticbeanstalk.com/student/getAll")
   .then(res=>res.json())
   .then((result)=>{
     setCareers(result);
   }
 )
  }, []);

  return (
    <Container>
      <h1>Remaining Applications</h1>
      <Paper elevation={6}>
        {careers.map((career) => (
          <Paper key={career.id} style={{margin: "10px", padding:"15px", textAlign: "left"}}>
            Number: {career.id} <br />
            Description: {career.description} <br />
            Link: {career.address}
          </Paper>
        ))}
      </Paper>
      

      <Paper>
        <h1>Add Career</h1>
        <form>
          <TextField
            label="company and position"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="link to the job"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
export default Career;
