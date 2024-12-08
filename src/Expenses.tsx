import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createExpense, getExpenses } from "./api/expenses";

function Expenses() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const mutation = useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      title: "test",
      total: 12.34,
    });
  };

  return (
    <div>
      <form>
        <input />
        <input type="number" />
        <button onClick={handleSubmit}>Add</button>
      </form>
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
