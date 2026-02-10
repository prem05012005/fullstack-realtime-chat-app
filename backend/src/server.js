import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import fs from "fs";


import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body
app.use(
  cors({
    origin:
      ENV.NODE_ENV === "production"
        ? true
        : ENV.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

console.log("process.cwd() =", process.cwd());
console.log("process.env.NODE_ENV =", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  const ROOT_DIR = path.resolve(process.cwd(), "..");
  const frontendPath = path.join(ROOT_DIR, "frontend", "dist");

  console.log("ROOT DIR:", ROOT_DIR);
  console.log("SERVING FRONTEND FROM:", frontendPath);
  console.log("FRONTEND EXISTS:", fs.existsSync(frontendPath));

  app.use(express.static(frontendPath));

  app.get("*", (_, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
