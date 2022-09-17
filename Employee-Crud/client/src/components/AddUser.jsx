import styled from "@emotion/styled";
import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  IconButton,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  marging: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultvalue = {
  name: "",
  dob: "",
  desg: "",
  org: "",
  gender: "",
  image: "",
};
const AddUser = () => {
  const [user, setUser] = useState(defaultvalue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">ADD EMPLOYEE</Typography>
      {/* <FormControl>
        <InputLabel>Employee ID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="empid" />
      </FormControl> */}
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Date Of Birth</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="dob" />
      </FormControl>
      <FormControl>
        <InputLabel>Designation</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="desg" />
      </FormControl>
      <FormControl>
        <InputLabel>Organization</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="org" />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="gender"
          onChange={(e) => onValueChange(e)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      {/* <FormControl>
        <InputLabel>Time of entry</InputLabel>
        <Time />
      </FormControl> */}
      <FormControl>
        <Button variant="contained" component="label">
          Upload Photo
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => onValueChange(e)}
            name="photo"
          />
          {/* <Form.Control type="url" value={image} onChange={(e) => setimage(e.target.value)}  placeholder="Add Image URL" /> */}
        </Button>
        {/* <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          name="photo"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton> */}
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add Employee
        </Button>
      </FormControl>
    </Container>
  );
};
export default AddUser;
