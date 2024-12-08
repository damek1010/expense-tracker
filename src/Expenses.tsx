import { useQuery } from "@tanstack/react-query";

const getExpenses = () =>
  fetch("/api/expenses/").then((response) => response.json());

function Expenses() {
  //   const queryClient = useQueryClient();

  const query = useQuery<{ title: string; total: number }[]>({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  return (
    <div>
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
