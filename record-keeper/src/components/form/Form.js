import "./form.scss";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeData = (index) => {
    let tempArr = data;
    tempArr.splice(index, 1);
    setData([...tempArr]);
  };

  return (
    <div className="form">
      <Stack spacing={2} direction="row">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button onClick={addData} color="secondary" variant="contained">
          <AddIcon />
        </Button>
      </Stack>

      {/* Data Showcase */}
      <div className="data">
        <div className="data_value">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_value">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeData(index)}
                  color="error"
                  variant="contained"
                >
                  <BackspaceIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
