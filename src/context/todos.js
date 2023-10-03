import { useState, createContext } from "react";

const TodosContext = createContext();

function getRandomId() {
	return Math.floor(Math.random() * 10000);
}

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [searchQuery, setSearchQuery] = useState();

	const editTodo = (id, text, description) => {
		const editedTodo = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					text,
					description,
				};
			}
			return todo;
		});
		setTodos(editedTodo);
	};

	const deleteTodo = (id) => {
		const newTodos = todos.filter((t) => t.id !== id);
		setTodos(newTodos);
	};

	const doneTodo = (id) => {
		const todoToBeUpdated = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, status: !todo.status };
			}
			return todo;
		});
		console.log("todoToBeUpdated", todoToBeUpdated);
		setTodos(todoToBeUpdated);
	};

	const addTodo = (todo, description) => {
		setTodos([
			...todos,
			{
				id: getRandomId(),
				text: todo,
				status: false,
				description,
			},
		]);
	};

	const getTodos = () => {
		return searchQuery
			? todos.filter((todo) => {
					return todo.text
						.toLowerCase()
						.includes(searchQuery.toLowerCase());
			  })
			: todos;
	};

	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				deleteTodo,
				doneTodo,
				editTodo,
				addTodo,
				setSearchQuery,
				getTodos,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContext;
