// Steps to work with postgresSQL database
// 1. Create a Schema on the database like neondb
// 2. import the pg module
// 3. Create a new instance of the Client class from the pg module which will be used to send the queries to the database

// in mongoose we connect and provide the string in one line but in postrgres we first create a new client with the connection string and then connect to the database
import { Client } from "pg";
const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_h0wsBWDbaIu4@ep-cold-shape-a8nxw57u-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
});

pgClient
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error:", err));

export default pgClient;
