import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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

import { useNavigate, useParams } from "react-router-dom";

import { editUser, getUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  marging: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultvalue = {
  id: "",
  name: "",
  dob: "",
  desg: "",
  org: "",
  gender: "",
  image: "",
};
const EditUser = () => {
  const [user, setUser] = useState(defaultvalue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit EMPLOYEE</Typography>
      {/* <FormControl>
        <InputLabel>Employee ID</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="empid"
          value={user.id}
        />
      </FormControl> */}
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
          // value="shivani"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Date Of Birth</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="dob" value={user.dob} />
      </FormControl>
      <FormControl>
        <InputLabel>Designation</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="desg"
          value={user.desg}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Organization</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="org" value={user.org} />
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
            value={user.photo}
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
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit Employee
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditUser;
