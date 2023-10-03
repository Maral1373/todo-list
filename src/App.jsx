import { useState } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import useTodos from "./hooks/useTodos";
import "./App.css";

function App() {
	const { todos, editTodo, addTodo, getTodos } = useTodos();
	const [todoIdToEdit, setTodoIdToEdit] = useState();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const todoName = formDate.get("newTodoName");
		const todoDesc = formDate.get("description");
		if (todoIdToEdit) {
			editTodo(todoIdToEdit, todoName, todoDesc);
			setTodoIdToEdit();
		} else {
			addTodo(todoName, todoDesc);
		}
		setTitle("");
		setDescription("");
	};

	const handleEditTodo = (id) => {
		setTodoIdToEdit(id);
		const oldTodo = todos.find((todo) => {
			return todo.id === id;
		});
		setTitle(oldTodo.text);
		setDescription(oldTodo.description);
	};

	return (
		<div className="App">
			<CreateTodo
				handleSubmit={handleSubmit}
				title={title}
				setTitle={setTitle}
				todoIdToEdit={todoIdToEdit}
				description={description}
				setDescription={setDescription}
			/>

			<TodoList todos={getTodos()} handleEditTodo={handleEditTodo} />
		</div>
	);
}

export default App;
