import TodoForm from "components/TodoForm";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import useFetchError from "hooks/useFetchError";

const App = () => {
  const { errorOnFetch, displayToastError } = useFetchError();
  if (errorOnFetch !== null) displayToastError(errorOnFetch);
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <ToastContainer />
    </div>
  );
};

export default App;
