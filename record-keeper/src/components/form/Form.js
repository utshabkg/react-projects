import "./form.scss";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({ name: "", email: "" });
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
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
          onKeyPress={(e) => handlePress(e)} 
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          onKeyPress={(e) => handlePress(e)} 
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
