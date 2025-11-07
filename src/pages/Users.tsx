import Grid from "@mui/material/Grid";
import { Box, Container, Button } from "@mui/material";
import { useCallback } from "react";
import { selectUsers } from "../Redux/selectors";
import { DataGrid } from "@mui/x-data-grid";
import type { userType } from "../Types/userTypes";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { updateUser } from "../Redux/reducers/userReducer";
import { removeUser } from "../Redux/reducers/userReducer";
import { userListColumns } from "../data/userListColumns";
export default function DataGridDemo() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const handleRemoveUser = useCallback(
    (id: number) => {
      dispatch(removeUser(id));
    },
    [dispatch]
  );
  const columns = userListColumns(handleRemoveUser);
  const handleProcessRowUpdate = useCallback(
    (newRow: userType) => {
      dispatch(updateUser(newRow));
      return newRow;
    },
    [dispatch]
  );

  return (
    <Container>
      <Box sx={{ height: 400, width: "100%" }}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={5}
        >
          <Button
            sx={{
              fontFamily: " var(--font-family)",
              textAlign: "center",
              border: "2px solid var(--border-color)",
              width: "300px",
              padding: "10px",
              borderRadius: "20px",
              mb: "20px",
            }}
          >
            Users List
          </Button>
        </Grid>
        <DataGrid
          rows={users}
          columns={columns}
          processRowUpdate={handleProcessRowUpdate}
          onProcessRowUpdateError={() => null}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
