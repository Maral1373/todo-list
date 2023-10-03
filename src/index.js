import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosProvider } from "./context/todos";
import { ThemeProvider } from "./context/theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<TodosProvider>
				<App />
			</TodosProvider>
		</ThemeProvider>
	</React.StrictMode>
);
