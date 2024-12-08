import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { createExpense } from "../api/expenses";

type ExpenseInputs = {
  title: string;
  total: number;
};

const ExpenseForm = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<ExpenseInputs>();
  const mutation = useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  const onSubmit: SubmitHandler<ExpenseInputs> = (data) => {
    mutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <input {...register("total")} />
      <button>Add</button>
    </form>
  );
};

export default ExpenseForm;
