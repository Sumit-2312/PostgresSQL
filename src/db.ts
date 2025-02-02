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
