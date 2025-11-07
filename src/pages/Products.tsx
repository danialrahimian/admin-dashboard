import Grid from "@mui/material/Grid";
import { Box, Container, Button } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import type { productType } from "../Types/productsType";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectProducts } from "../Redux/selectors";
import {
  removeProduct,
  updateProduct,
} from "../Redux/reducers/productsReducer";
import { useCallback } from "react";

export default function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  const handleRemoveProduct = useCallback(
    (id: number) => {
      dispatch(removeProduct(id));
    },
    [dispatch]
  );

  const handleProcessRowUpdate = useCallback(
    (newRow: productType) => {
      dispatch(updateProduct(newRow));
      return newRow;
    },
    [dispatch]
  );

  const columns: GridColDef<productType>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "ProductName",
      headerName: "Product Name",
      width: 150,
      editable: true,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Category",
      headerName: "Category",
      sortable: false,
      width: 160,
    },
    {
      field: "Actions",
      headerName: "Actions",
      sortable: false,
      width: 160,

      renderCell: (params) => {
        return (
          <>
            <DeleteIcon
              onClick={() => handleRemoveProduct(params.row.id)}
              sx={{ cursor: " pointer", color: "#D2122E", mr: 2 }}
            />
            <Link to={`/Product/${params.row.id}`}>
              <EditIcon
                sx={{
                  color: "#318CE7",
                }}
              />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <Box sx={{ height: 400, maxWidth: "100%" }}>
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
            Products List
          </Button>
        </Grid>
        <DataGrid
          rows={products}
          columns={columns}
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
          processRowUpdate={handleProcessRowUpdate}
          onProcessRowUpdateError={() => null}
        />
      </Box>
    </Container>
  );
}



