import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import type { lastTransactions } from "../Types/lastTransactions";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData({ name, date, amount, status }: lastTransactions) {
  return { name, date, amount, status };
}

const rows = [
  createData({
    name: "Ali Connors",
    date: "2025-05-12",
    amount: 6.0,
    status: {
      type: "success",
      text: "success",
    },
  }),
  createData({
    name: "Ali Connors",
    date: "2025-05-12",
    amount: 6.0,
    status: {
      type: "success",
      text: "success",
    },
  }),
  createData({
    name: "Ali Connors",
    date: "2025-05-12",
    amount: 6.0,
    status: {
      type: "success",
      text: "success",
    },
  }),
];

export default function LastTransactions() {
  return (
    <TableContainer
      sx={{ minWidth: 650, borderRadius: "20px" }}
      component={Paper}
    >
      <Table saria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{
                fontFamily: " var(--font-family)",
                fontSize: "15px",
              }}
            >
              Costumer
            </StyledTableCell>
            <StyledTableCell
              sx={{
                fontFamily: " var(--font-family)",
              }}
              align="center"
            >
              Date
            </StyledTableCell>
            <StyledTableCell
              sx={{
                fontFamily: " var(--font-family)",
              }}
              align="center"
            >
              Amount
            </StyledTableCell>
            <StyledTableCell
              sx={{
                fontFamily: " var(--font-family)",
              }}
              align="center"
            >
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                sx={{ alignItems: "center" }}
                scope="row"
              >
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  sx={{
                    fontFamily: " var(--font-family)",
                    fontSize: "15px",
                  }}
                >
                  <Avatar sx={{ mr: 2 }} />
                  {row.name}
                </Typography>
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  fontFamily: " var(--font-family)",
                  fontSize: "15px",
                }}
                align="center"
              >
                {row.date}
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  fontFamily: " var(--font-family)",
                  fontSize: "15px",
                }}
                align="center"
              >
                {row.amount}
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  fontFamily: " var(--font-family)",
                  fontSize: "15px",
                }}
                align="center"
              >
                <Alert severity={row.status.type}>{row.status.text}</Alert>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
