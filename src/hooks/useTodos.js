import { useContext } from "react";
import TodosContext from "../context/todos";

function useTodos() {
	return useContext(TodosContext);
}

export default useTodos;
