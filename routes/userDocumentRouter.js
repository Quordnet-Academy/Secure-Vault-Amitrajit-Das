import express from "express";

import { getUserDocument, postUserDocument, putUserDocument, deleteUserDocument } from "../controllers/userDocumentController.js";

const router = express.Router();


// Career Routes
router.get("/userDocument", getUserDocument);
router.post("/userDocument", postUserDocument);
router.post("/userDocument/:id", putUserDocument);
router.post("/userDocument/:id", deleteUserDocument);

export default router;