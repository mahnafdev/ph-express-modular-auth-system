import { Request, Response } from "express";
import { usersService } from "./users.service";

//* Create an user
const createUser = async (req: Request, res: Response) => {
	try {
		// Insert user
		const result = await usersService.insertUser(req.body);
		// Return response for 201
		return res.status(201).json({
			success: true,
			message: "User signed up successfully",
			status: 201,
			status_text: "Created",
			data: result.rows[0],
		});
	} catch (error: any) {
		// Return response for 500
		return res.status(500).json({
			success: false,
			message: "Server or database error",
			status: 500,
			status_text: "Internal Server Error",
			db_error_code: error.code || null,
		});
	}
};

export const usersController = { createUser };
