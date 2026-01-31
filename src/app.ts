import express from "express";
import cors from "cors";
import galleryRoutes from "./routes/gallery.routes";

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://teaterbara.my.id",
    "https://www.teaterbara.my.id",
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);

app.use(express.json());

app.use("/api/gallery", galleryRoutes);

export default app;
