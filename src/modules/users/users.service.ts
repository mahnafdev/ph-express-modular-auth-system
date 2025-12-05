import bcrypt from "bcryptjs";
import { db } from "../../utils/db";

//* Insert User
const insertUser = async (payload: Record<string, unknown>) => {
	// Get user data
	const { name, email, password, gen, isSingle } = payload;
	// Hash password
	const hashedPassword = await bcrypt.hash(password as string, 12);
	// Insert user into DB
	const result = await db.query(
		"INSERT INTO users(name,email,password,gen,is_single) VALUES($1,$2,$3,$4,$5) RETURNING id,name,email,gen,is_single,created_at",
		[name, email, hashedPassword, gen, isSingle],
	);
	return result;
};

export const usersService = { insertUser };
