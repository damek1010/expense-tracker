import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "./api/expenses";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import { Container } from "@mui/material";

function Expenses() {
  const query = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  return (
    <Container>
      <ExpenseForm />
      <ExpensesTable expenses={query.data || []} />
    </Container>
  );
}
export default Expenses;
