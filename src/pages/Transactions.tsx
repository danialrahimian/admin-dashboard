import {
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Alert, { type AlertColor } from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectTransactions } from "../Redux/selectors";
import {
  removeTransaction,
  updateTransaction,
} from "../Redux/reducers/transactionsReducer";
import type { lastTransactions } from "../Types/lastTransactions";

const STATUS_PRESETS: Record<
  "complete" | "failed",
  lastTransactions["status"]
> = {
  complete: {
    type: "success",
    text: "Completed",
  },
  failed: {
    type: "error",
    text: "Failed",
  },
};

export default function Transactions() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);

  const handleStatusChange = (
    id: number,
    status: lastTransactions["status"]
  ) => {
    dispatch(updateTransaction({ id, status }));
  };

  const handleRemoveTransaction = (id: number) => {
    dispatch(removeTransaction(id));
  };

  return (
    <PageLayout
      title="Transactions"
      description="Review recent customer transactions and take action where needed."
    >
      {transactions.length === 0 ? (
        <EmptyState
          title="No transactions recorded"
          description="Once transactions are created they will appear in this list."
        />
      ) : (
        <Paper
          elevation={0}
          sx={{
            border: "2px solid var(--border-color)",
            borderRadius: "20px",
            p: 3,
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography fontFamily="var(--font-family)" fontWeight={600}>
                      Customer
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontFamily="var(--font-family)" fontWeight={600}>
                      Date
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontFamily="var(--font-family)" fontWeight={600}>
                      Amount
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontFamily="var(--font-family)" fontWeight={600}>
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontFamily="var(--font-family)" fontWeight={600}>
                      Actions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction: lastTransactions) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Typography fontFamily="var(--font-family)">
                        {transaction.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        fontFamily="var(--font-family)"
                        color="text.secondary"
                      >
                        {transaction.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontFamily="var(--font-family)">
                        ${transaction.amount.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Alert
                        severity={transaction.status.type as AlertColor}
                      >
                        {transaction.status.text}
                      </Alert>
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                      >
                        <Button
                          size="small"
                          startIcon={<DoneIcon />}
                          onClick={() =>
                            handleStatusChange(
                              transaction.id,
                              STATUS_PRESETS.complete
                            )
                          }
                        >
                          Mark Complete
                        </Button>
                        <Button
                          size="small"
                          color="error"
                          startIcon={<ErrorOutlineIcon />}
                          onClick={() =>
                            handleStatusChange(
                              transaction.id,
                              STATUS_PRESETS.failed
                            )
                          }
                        >
                          Flag Issue
                        </Button>
                        <IconButton
                          color="error"
                          onClick={() => handleRemoveTransaction(transaction.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </PageLayout>
  );
}
