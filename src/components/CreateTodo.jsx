function CreateTodo({
	handleSubmit,
	title,
	setTitle,
	todoIdToEdit,
	description,
	setDescription,
	onChange,
}) {
	return (
		<form className="m-5" onSubmit={handleSubmit}>
			<label className="text-left font-medium" htmlFor="newTodoName">
				Title
			</label>
			<br />
			<input
				className="rounded-lg border-2 border-[#e4d5c7] my-4 w-full py-2 text-center"
				type="text"
				name="newTodoName"
				id="newTodoName"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<label className="text-left font-medium" htmlFor="description">
				Description
			</label>
			<br />

			<input
				className="rounded-lg border-2 border-[#e4d5c7] my-4 w-full py-2 text-center"
				type="text"
				name="description"
				id="description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<button
				className="rounded-lg border-2 bg-[#247158] my-4 w-full py-2 text-center text-slate-50"
				type="submit"
			>
				{todoIdToEdit ? "Edit Todo" : "Add Todo"}
			</button>
			<br />
			<label className="text-left font-medium" htmlFor="search">
				Search
			</label>
			<br />
			<input
				onChange={(e) => onChange(e.target.value)}
				className="rounded-lg border-2 border-[#e4d5c7] my-4 w-full py-2 text-center"
				type="text"
				name="search"
			/>
		</form>
	);
}

export default CreateTodo;
