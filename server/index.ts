import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { listSolutions, searchSolutions } from "./routes/solutions";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Use Case Finder routes
  app.get("/api/solutions", listSolutions);
  app.get("/api/solutions/search", searchSolutions);
  app.post("/api/solutions/search", searchSolutions);

  return app;
}
