import { Request, Response } from "express";
import { getFolders, getImagesByFolder } from "../services/gallery.service";
import "dotenv/config";

export const getCategories = async (_: Request, res: Response) => {
    try {
        const rootId = process.env.GALLERY_ROOT_ID;

        if (!rootId) {
            throw new Error("GALLERY_ROOT_ID is not defined");
        }

        const folders = await getFolders(rootId);
        res.json(folders);
    } catch (err: any) {
        console.error("❌ Drive Error:", err.message || err);
        res.status(500).json({
            message: "Failed to load categories",
            error: err.message || err,
        });
    }
};

export const getGalleryByCategory = async (req: Request, res: Response) => {
    try {
        const { folderId } = req.params;
        const images = await getImagesByFolder(folderId as string);
        res.json(images);
    } catch (err) {
        res.status(500).json({ message: "Failed to load images" });
    }
};
