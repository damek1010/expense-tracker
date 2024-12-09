import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Expenses from "./pages/Expenses";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/expenses" element={<Expenses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
