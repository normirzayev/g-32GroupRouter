import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ContextData } from "../config/Context";
import { Button } from "@mui/material";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LocalTable() {
  let link = useNavigate();
  // const { setInputData } = useContext(ContextData);
  const { data, refreshData } = useContext(ContextData);
  const handleEdit = (id) => {
    // setInputData(item);
    link(`/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem(
          "data",
          JSON.stringify(data.filter((elem) => elem.id !== id))
        );
        refreshData();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const rows = data;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>name</TableCell>
            <TableCell>userName</TableCell>
            <TableCell>email</TableCell>
            <TableCell>password</TableCell>
            <TableCell colSpan={2}> action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleEdit(row.id)}
                  >
                    <BiSolidEditAlt />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(row.id)}
                  >
                    <MdDelete />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <h2>malumot yo'q</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
