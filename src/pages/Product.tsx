import Grid from "@mui/material/Grid";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { updateProduct } from "../Redux/reducers/productsReducer";

type ProductFormState = {
  ProductName: string;
  Price: string;
  Stock: string;
  Category: string;
};

const defaultProductForm: ProductFormState = {
  ProductName: "",
  Price: "",
  Stock: "",
  Category: "",
};

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const product = useMemo(() => {
    if (!id) {
      return undefined;
    }
    const numericId = Number(id);
    return products.find((item) => item.id === numericId);
  }, [id, products]);

  const [formState, setFormState] =
    useState<ProductFormState>(defaultProductForm);

  useEffect(() => {
    if (product) {
      setFormState({
        ProductName: product.ProductName,
        Price: product.Price,
        Stock: String(product.Stock),
        Category: product.Category,
      });
    }
  }, [product]);

  const handleChange = useCallback(
    (field: keyof ProductFormState) => (value: string) => {
      setFormState((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!product) {
      return;
    }

    dispatch(
      updateProduct({
        id: product.id,
        ProductName: formState.ProductName,
        Price: formState.Price,
        Stock: Number(formState.Stock),
        Category: formState.Category,
      })
    );
    navigate("/products");
  };

  if (!product) {
    return (
      <PageLayout
        title="Product Not Found"
        description="The product you are trying to access does not exist or was removed."
      >
        <EmptyState
          title="No product data available"
          description="Return to the product list to choose a different item."
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={product.ProductName}
      description="Review the current details and make updates as necessary."
    >
      <Paper
        component="form"
        elevation={0}
        onSubmit={handleSubmit}
        sx={{
          border: "2px solid var(--border-color)",
          borderRadius: "20px",
          p: 4,
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant="h6"
            component="h2"
            fontFamily="var(--font-family)"
            fontWeight={600}
          >
            Product Information
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Product Name"
                fullWidth
                value={formState.ProductName}
                onChange={(event) =>
                  handleChange("ProductName")(event.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Price"
                fullWidth
                value={formState.Price}
                onChange={(event) =>
                  handleChange("Price")(event.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Stock"
                type="number"
                fullWidth
                inputProps={{ min: 0 }}
                value={formState.Stock}
                onChange={(event) =>
                  handleChange("Stock")(event.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Category"
                fullWidth
                value={formState.Category}
                onChange={(event) =>
                  handleChange("Category")(event.target.value)
                }
              />
            </Grid>
          </Grid>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
          >
            <Button variant="outlined" onClick={() => navigate("/products")}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </PageLayout>
  );
}


