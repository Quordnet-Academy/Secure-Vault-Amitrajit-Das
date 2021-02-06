import express from "express";

import { getUserDocument, postUserDocument } from "../controllers/userDocumentController.js";

const router = express.Router();


// Career Routes
router.get("/userDocument", getUserDocument);
router.post("/userDocument", postUserDocument);

export default router;