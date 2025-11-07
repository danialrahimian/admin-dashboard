import Grid from "@mui/material/Grid";
import {
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectUsers } from "../Redux/selectors";
import { addUser, updateUser } from "../Redux/reducers/userReducer";
import type { userType } from "../Types/userTypes";

type FormState = {
  firstName: string;
  lastName: string;
  age: string;
  status: userType["Status"];
};

const defaultFormState: FormState = {
  firstName: "",
  lastName: "",
  age: "",
  status: "active",
};

const STATUS_OPTIONS: userType["Status"][] = ["active", "not active"];

export default function NewUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const users = useAppSelector(selectUsers);
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const editingId = searchParams.get("edit");
  const userToEdit = useMemo(() => {
    if (!editingId) {
      return undefined;
    }
    const id = Number(editingId);
    return users.find((user) => user.id === id);
  }, [editingId, users]);

  const [formState, setFormState] = useState<FormState>(defaultFormState);

  useEffect(() => {
    if (userToEdit) {
      setFormState({
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        age: String(userToEdit.Age),
        status: userToEdit.Status,
      });
    } else {
      setFormState(defaultFormState);
    }
  }, [userToEdit]);

  const handleChange = (field: keyof FormState) => (value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ageAsNumber = Number(formState.age);
    if (
      !formState.firstName ||
      !formState.lastName ||
      Number.isNaN(ageAsNumber)
    ) {
      return;
    }

    if (userToEdit) {
      dispatch(
        updateUser({
          id: userToEdit.id,
          firstName: formState.firstName,
          lastName: formState.lastName,
          Age: ageAsNumber,
          Status: formState.status,
        })
      );
    } else {
      const newUser: userType = {
        id: Date.now(),
        firstName: formState.firstName,
        lastName: formState.lastName,
        Age: ageAsNumber,
        Status: formState.status,
      };
      dispatch(addUser(newUser));
    }

    navigate("/users");
  };

  const handleReset = () => {
    setFormState(defaultFormState);
  };

  return (
    <PageLayout
      title={userToEdit ? "Edit User" : "Create New User"}
      description={
        userToEdit
          ? "Update existing account information to keep the directory current."
          : "Onboard a new account by providing the basic profile details."
      }
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
            Basic Information
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="First Name"
                fullWidth
                value={formState.firstName}
                onChange={(event) =>
                  handleChange("firstName")(event.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Last Name"
                fullWidth
                value={formState.lastName}
                onChange={(event) =>
                  handleChange("lastName")(event.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                label="Age"
                type="number"
                fullWidth
                value={formState.age}
                onChange={(event) => handleChange("age")(event.target.value)}
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                label="Status"
                fullWidth
                value={formState.status}
                onChange={(event) => handleChange("status")(event.target.value)}
              >
                {STATUS_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
          >
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" variant="contained">
              {userToEdit ? "Save Changes" : "Create User"}
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </PageLayout>
  );
}
