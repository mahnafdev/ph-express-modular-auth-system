import express, { Request, Response } from "express";
import { db, initializeTables } from "./utils/db";
import { usersRoute } from "./modules/users/users.route";

//* Express application
const app = express();

//* Middlewares
app.use(express.json());

//* Initialize Tables
initializeTables();

//* Users API Routes

//? Users Module: /api/v1/users
app.use("/api/v1/users", usersRoute);

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
