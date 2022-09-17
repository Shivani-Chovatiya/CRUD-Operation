import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableBody)`
  & > td {
    font-size: 20px;
  }
`;

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUsers = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          {/* <TableCell>id</TableCell> */}
          <TableCell>Employee ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Date Of Birth</TableCell>
          <TableCell>Designation</TableCell>
          <TableCell>Organization</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Photo</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            {/* <TableCell>{user.empid}</TableCell> */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.dob}</TableCell>
            <TableCell>{user.desg}</TableCell>
            <TableCell>{user.org}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>
              <img src={user.photo} alt="logo" width="50px" height="50px" />
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                EDIT
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUsers(user._id)}
              >
                DELETE
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TBody>
    </StyledTable>
  );
};

export default AllUser;
