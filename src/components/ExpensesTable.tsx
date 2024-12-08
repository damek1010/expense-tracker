import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import { Expense } from "../models/Expense";

interface ExpensesTableProps {
  expenses: Expense[];
}

const ExpensesTable = ({ expenses }: ExpensesTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map(({ title, total }) => (
          <TableRow>
            <TableCell>{title}</TableCell>
            <TableCell>{total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpensesTable;
