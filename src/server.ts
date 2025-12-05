import express, { Request, Response } from "express";
import { Pool } from "pg";

//* Express application
const app = express();

//* Middlewares
app.use(express.json());

//* DB connection
const pool = new Pool({
	connectionString:
		"postgresql://neondb_owner:npg_nRM4igHAuvL8@ep-calm-hat-a8teo9ao-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
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
