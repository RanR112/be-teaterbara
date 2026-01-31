import express from "express";
import cors from "cors";
import galleryRoutes from "./routes/gallery.routes";

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

app.use(express.json());

app.use("/api/gallery", galleryRoutes);

export default app;
