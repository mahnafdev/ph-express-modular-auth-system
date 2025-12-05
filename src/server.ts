import express, { Request, Response } from "express";
import { db, initializeTables } from "./utils/database";

//* Express application
const app = express();

//* Middlewares
app.use(express.json());

//* Initialize Tables
initializeTables();

//* Users API Routes

//? POST /users/signup: Create an user
app.post("/users/signup", async (req: Request, res: Response) => {
	// Get new user data
	const { name, email, password, gen, isSingle } = req.body;
	try {
		// Insert user to DB
		const result = await db.query(
			"INSERT INTO users(name,email,password,gen,is_single) VALUES($1,$2,$3,$4,$5) RETURNING *",
			[name, email, password, gen, isSingle],
		);
		// Return response for 201
		return res.status(201).json({
			success: true,
			message: "User signed up successfully",
			status: 201,
			status_text: "Created",
			data: result.rows[0],
		});
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			error: "Server or database error",
			status: 500,
			status_text: "Internal Server Error",
			db_error_code: error.code || null,
		});
	}
});

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
