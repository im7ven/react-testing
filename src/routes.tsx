import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import TodoPage from "./pages/Todo";
import { ThemeContextProvider } from "./contexts/ThemeContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "/apps/todo", element: <TodoPage /> },
    ],
  },
]);

export default router;
