import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { createExpense } from "../api/expenses";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

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
      <Stack direction="row" spacing={2}>
        <TextField label="Title" variant="standard" {...register("title")} />
        <TextField
          label="Total"
          variant="standard"
          type="number"
          {...register("total")}
        />
        <Button variant="contained">Add</Button>
      </Stack>
    </form>
  );
};

export default ExpenseForm;
