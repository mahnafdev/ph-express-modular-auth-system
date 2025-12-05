import { db } from "../../utils/db";

//* Insert User
const insertUser = async (payload: Record<string, unknown>) => {
	// Get user data
	const { name, email, password, gen, isSingle } = payload;
	// Insert user into DB
	const result = await db.query(
		"INSERT INTO users(name,email,password,gen,is_single) VALUES($1,$2,$3,$4,$5) RETURNING *",
		[name, email, password, gen, isSingle],
	);
	return result;
};

export const usersService = { insertUser };
