import { useState } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import "./App.css";

function getRandomId() {
	return Math.floor(Math.random() * 10000);
}

function App() {
	const [todos, setTodos] = useState([]);
	const [todoIdToEdit, setTodoIdToEdit] = useState();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [searchQuery, setSearchQuery] = useState();

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
		setTitle("");
		setDescription("");
	};
	console.log(todos);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const todoName = formDate.get("newTodoName");
		const todoDesc = formDate.get("description");
		if (todoIdToEdit) {
			editTodo(todoName, todoDesc);
		} else {
			addTodo(todoName, todoDesc);
		}
	};

	const handleDeleteTodo = (id) => {
		const deletedTodo = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(deletedTodo);
	};

	const editTodo = (newText, newDesc) => {
		const editedTodo = todos.map((todo) => {
			if (todo.id === todoIdToEdit) {
				return {
					...todo,
					text: newText,
					description: newDesc,
				};
			}
			return todo;
		});
		setTodos(editedTodo);
		setTodoIdToEdit();
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

	const handleDoneTodo = (id) => {
		const todoToBeUpdated = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, status: !todo.status };
			}
			return todo;
		});
		console.log("todoToBeUpdated", todoToBeUpdated);
		setTodos(todoToBeUpdated);
	};

	const handleSearch = (q) => {
		setSearchQuery(q);
	};
	console.log(searchQuery);

	return (
		<div className="App">
			<CreateTodo
				handleSubmit={handleSubmit}
				title={title}
				setTitle={setTitle}
				todoIdToEdit={todoIdToEdit}
				description={description}
				setDescription={setDescription}
				onChange={handleSearch}
			/>

			<TodoList
				todos={
					searchQuery
						? todos.filter((todo) => {
								return todo.text
									.toLowerCase()
									.includes(searchQuery.toLowerCase());
						  })
						: todos
				}
				handleDeleteTodo={handleDeleteTodo}
				handleEditTodo={handleEditTodo}
				handleDoneTodo={handleDoneTodo}
			/>
		</div>
	);
}

export default App;
