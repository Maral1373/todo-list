import useTodos from "../hooks/useTodos";

function TodoList({ todos, handleEditTodo }) {
	const { deleteTodo } = useTodos();
	const { doneTodo } = useTodos();
	return (
		<ul className="divide-y divide-[#e2d1c1] mx-3 my-5">
			{todos.map((todo) => {
				return (
					<li
						className="flex justify-between gap-x-6 py-2 w-full my-2 rounded-md bg-[#f5f3f0]"
						key={todo.id}
					>
						{todo.status ? (
							<strike>{todo.text}</strike>
						) : (
							<span className="text-xl">{todo.text}</span>
						)}
						<br />
						<span className="text-left">{todo.description}</span>
						<div className="my-1">
							<button onClick={() => deleteTodo(todo.id)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="40"
									height="40"
									viewBox="0 0 128 128"
								>
									<path
										fill="#454B54"
										d="M81.9 126H29c-1.7 0-3-1.3-3-3s1.3-3 3-3h52.9c1.7 0 3 1.3 3 3S83.6 126 81.9 126zM14 126c-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1s.3-1.6.9-2.1c1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.3.9 2.1s-.3 1.6-.9 2.1C15.6 125.7 14.8 126 14 126z"
									></path>
									<path
										fill="#E4D5C7"
										d="M44.6,115h38.8c2.1,0,3.9-1.7,4-3.8L90,62.9H38l2.6,48.3C40.7,113.3,42.4,115,44.6,115z"
									></path>
									<path
										fill="#6AB29B"
										d="M35.1,57.5L35.1,57.5c19-4.6,38.8-4.6,57.7,0l0,0v5.4H35.1V57.5z"
									></path>
									<path
										fill="#49A086"
										d="M87.2,62.9h-4.7H38l0.2,8.7h4.2c21.6,0,38.7,18.1,37.5,39.6l0,0c-0.1,2.1-1.9,3.8-4,3.8h7.5c2.1,0,3.9-1.7,4-3.8l2.2-39.6h0.3l0.2-8.7h2.8H87.2z"
									></path>
									<path
										fill="#454B54"
										d="M70 102.1c-1.7 0-3-1.3-3-3v-20c0-1.7 1.3-3 3-3s3 1.3 3 3v20C73 100.7 71.7 102.1 70 102.1zM58 102.1c-1.7 0-3-1.3-3-3v-20c0-1.7 1.3-3 3-3s3 1.3 3 3v20C61 100.7 59.7 102.1 58 102.1z"
									></path>
									<path
										fill="#454B54"
										d="M83.4,118H44.6c-3.7,0-6.8-2.9-7-6.6L35,63.1c0-0.8,0.3-1.6,0.8-2.2c0.6-0.6,1.4-0.9,2.2-0.9H90c0.8,0,1.6,0.3,2.2,0.9c0.6,0.6,0.9,1.4,0.8,2.2l-2.6,48.3C90.2,115.1,87.1,118,83.4,118z M41.1,65.9l2.4,45.1c0,0.5,0.5,1,1,1h38.8c0.5,0,1-0.4,1-1l2.4-45.1H41.1z"
									></path>
									<path
										fill="#454B54"
										d="M83.4 126c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3s3 1.3 3 3v8C86.4 124.7 85.1 126 83.4 126zM45.3 122c-1.7 0-3-1.3-3-3v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4C48.3 120.7 46.9 122 45.3 122zM92.9 65.9c-1.7 0-3-1.3-3-3v-3c-17-3.8-34.8-3.8-51.7 0v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5.4c0-1.4.9-2.6 2.3-2.9 19.4-4.7 39.8-4.7 59.2 0 1.3.3 2.3 1.5 2.3 2.9v5.4C95.9 64.6 94.5 65.9 92.9 65.9z"
									></path>
								</svg>
							</button>
							<button
								className="p-2"
								onClick={() => handleEditTodo(todo.id)}
							>
								{
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="40"
										height="30"
										viewBox="0 0 64 64"
									>
										<path
											fill="#ed7899"
											d="M50.858,5.859l6.809,6.809c1.562,1.562,1.562,4.095,0,5.657l-3.663,3.663l0,0L41.538,9.522l0,0 l3.663-3.663C46.763,4.297,49.296,4.297,50.858,5.859z"
										></path>
										<path
											fill="#c2cde7"
											d="M39.124,8.878L55.126,24.88l-6.619,6.619L32.505,15.497L39.124,8.878z"
										></path>
										<path
											fill="#f9e3ae"
											d="M34.127,16.874l12.997,12.997L18.5,58.495L5.503,45.498L34.127,16.874z"
										></path>
										<path
											fill="#f6d397"
											d="M42.626,25.375l4.497,4.497L18.5,58.496l-4.497-4.497L42.626,25.375z"
										></path>
										<path
											fill="#faefde"
											d="M5,57l1-11l7,1l1,3l2.92,1.5L19,59H7L5,57z"
										></path>
										<path
											fill="#faefde"
											d="M34.126,16.874l4.497,4.497L10,49.995l-4.497-4.497L34.126,16.874z"
										></path>
										<path
											fill="#8d6c9f"
											d="M60.59,15.9c0.001-1.061-0.42-2.079-1.17-2.83l-8.49-8.48c-1.582-1.516-4.078-1.516-5.66,0L41,8.83 c-0.781-0.781-2.047-0.782-2.828-0.002c-0.001,0.001-0.001,0.001-0.002,0.002l-5.66,5.66c-0.781,0.781-0.782,2.047-0.002,2.828 c0.001,0.001,0.001,0.001,0.002,0.002l0.05,0.05L5.52,44.4c-0.504,0.503-0.812,1.17-0.87,1.88L4,54.68L3.3,59.6 c-0.077,0.547,0.303,1.053,0.85,1.13c0.05,0.007,0.1,0.01,0.15,0.01h0.1L9.32,60l8.45-0.62c0.717-0.053,1.391-0.362,1.9-0.87 l27.08-27c0.774,0.743,1.996,0.743,2.77,0l5.66-5.66c0.781-0.781,0.782-2.047,0.002-2.828c-0.001-0.001-0.001-0.001-0.002-0.002 l4.24-4.24C60.182,18.017,60.604,16.978,60.59,15.9z M11.9,47.9l0.58,2.88c0.08,0.393,0.387,0.7,0.78,0.78l2.88,0.58l1.07,5.34 L9.59,58L6,54.41l0.61-7.6L11.9,47.9z M19,56.35l-1-4.77L34.67,35c0.359-0.419,0.31-1.051-0.109-1.41 c-0.374-0.321-0.927-0.321-1.301,0l-16.6,16.58L14.3,49.7l-0.47-2.36l13.76-13.76c0.359-0.419,0.31-1.051-0.109-1.41 c-0.374-0.321-0.927-0.321-1.301,0L12.42,45.93L7.75,45L34,18.78l11.32,11.31L19,56.35z M52.34,25.8L52.34,25.8 c-0.39-0.388-1.02-0.388-1.41,0l-1.41,1.41c-0.388,0.39-0.388,1.02,0,1.41l0,0L48.1,30l0,0L34,15.9l1.41-1.41 c0.39,0.388,1.02,0.388,1.41,0l1.41-1.41c0.388-0.39,0.388-1.02,0-1.41l1.41-1.41l0.71,0.71l12.7,12.71l0.71,0.71L52.34,25.8z M58,17.31l-4.24,4.24L42.44,10.24L46.69,6c0.781-0.781,2.047-0.782,2.828-0.002C49.519,5.999,49.519,5.999,49.52,6L58,14.49 c0.781,0.781,0.782,2.047,0.002,2.828c-0.001,0.001-0.001,0.001-0.002,0.002V17.31z"
										></path>
										<path
											fill="#8d6c9f"
											d="M40.32,15.19l-1.41,1.41c-0.431,0.345-0.501,0.974-0.156,1.406c0.345,0.431,0.974,0.501,1.406,0.156 c0.059-0.048,0.113-0.102,0.161-0.162l1.41-1.41c0.359-0.419,0.31-1.051-0.109-1.41c-0.374-0.321-0.927-0.321-1.301,0V15.19z M43.86,18.73l-1.41,1.41c-0.419,0.359-0.468,0.991-0.109,1.41s0.991,0.468,1.41,0.109c0.039-0.033,0.076-0.07,0.109-0.109 l1.41-1.41c0.359-0.419,0.31-1.051-0.109-1.41C44.787,18.409,44.234,18.409,43.86,18.73z M47.39,22.26L46,23.68 c-0.419,0.359-0.468,0.991-0.109,1.41s0.991,0.468,1.41,0.109c0.039-0.033,0.076-0.07,0.109-0.109l1.41-1.41 c0.359-0.419,0.31-1.051-0.109-1.41c-0.374-0.321-0.927-0.321-1.301,0L47.39,22.26z M31.84,26.51L29,29.33 c-0.419,0.359-0.468,0.991-0.109,1.41c0.359,0.419,0.991,0.468,1.41,0.109c0.039-0.033,0.076-0.07,0.109-0.109l2.83-2.83 c0.359-0.419,0.31-1.051-0.109-1.41c-0.374-0.321-0.927-0.321-1.301,0L31.84,26.51z"
										></path>
									</svg>
								}
							</button>
							<button
								className="mr-2"
								onClick={() => doneTodo(todo.id)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="30"
									height="30"
									viewBox="0 0 512 512"
								>
									<path
										fill="#6AB29B"
										d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
									></path>
									<path
										fill="#FFF"
										d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z"
									></path>
								</svg>
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default TodoList;
