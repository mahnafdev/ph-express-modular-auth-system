import express, { Request, Response } from "express";

const app = express();

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
