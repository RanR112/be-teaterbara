import { Router } from "express";
import {
    getCategories,
    getGalleryByCategory,
} from "../controllers/gallery.controller";

const router = Router();

router.get("/categories", getCategories);
router.get("/:folderId", getGalleryByCategory);

export default router;
