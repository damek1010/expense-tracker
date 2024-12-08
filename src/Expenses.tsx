import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "./api/expenses";
import ExpenseForm from "./components/ExpenseForm";

function Expenses() {
  const query = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  return (
    <div>
      <ExpenseForm />
      {query.data?.map(({ title, total }) => (
        <div>
          <span>{title}</span>
          <span>{total}</span>
        </div>
      ))}
    </div>
  );
}
export default Expenses;
