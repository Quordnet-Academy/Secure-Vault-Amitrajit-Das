import express from "express";

import { getUserDocument, postUserDocument, putUserDocument, postUserDocumentById, deleteUserDocument } from "../controllers/userDocumentController.js";

const router = express.Router();


// Career Routes
router.get("/userDocument", getUserDocument);
router.post("/userDocument", postUserDocument);
router.post("/userDocument/:id", postUserDocumentById);
router.put("/userDocument/:id", putUserDocument);
router.delete("/userDocument/:id", deleteUserDocument);

export default router;