import express, { Request, Response } from "express";
import { initializeTables } from "./utils/database";

//* Express application
const app = express();

//* Middlewares
app.use(express.json());

//* Initialize Tables
initializeTables();

//? GET / : API root route
app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: "API root",
		status: 200,
		statusText: "OK",
	});
});

app.listen(5000, () => {
	console.log("The server is running on port 5000");
});
