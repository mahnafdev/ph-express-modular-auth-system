import { Pool } from "pg";

//* DB connection
const db = new Pool({
	connectionString:
		"postgresql://neondb_owner:npg_nRM4igHAuvL8@ep-calm-hat-a8teo9ao-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

//* DB schema
const initializeTables = async () => {
	await db.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INT,
            gen TEXT NOT NULL,
            is_single BOOLEAN NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
	console.log("DB Tables Created");
};

export { db, initializeTables };
