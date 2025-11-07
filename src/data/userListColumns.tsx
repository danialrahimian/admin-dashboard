import type { GridColDef } from "@mui/x-data-grid";
import type { userType } from "../Types/userTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
export const userListColumns = (handleRemoveUser: (id: number) => void) => {
  const columns: GridColDef<userType>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "FullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "UserName",
      headerName: "User Name",
      width: 150,
      editable: false,
      valueGetter: (_, row) => `${row.firstName || ""} ${row.Age || ""}`,
    },
    {
      field: "Avatar",
      headerName: "Avatar",
      width: 150,
      editable: false,
    },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "Status",
      headerName: "Status",
      type: "singleSelect",
      width: 110,
      editable: true,
      valueOptions: ["active", "not active"],
    },
    {
      field: "Actions",
      headerName: "Actions",

      width: 150,

      renderCell: (params) => {
        return (
          <>
            <DeleteIcon
              onClick={() => handleRemoveUser(params.row.id)}
              sx={{ cursor: " pointer", color: "#D2122E", mr: 2 }}
            />

            <Link to={`/newUser?edit=${params.row.id}`}>
              <EditIcon sx={{ color: "#318CE7" }} />
            </Link>
          </>
        );
      },
    },
  ];

  return columns;
};
