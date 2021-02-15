import express from "express";

import { getUserDocument, postUserDocument, putUserDocument, postUserDocumentPassword, deleteUserDocument } from "../controllers/userDocumentController.js";

const router = express.Router();


// Career Routes
router.get("/userDocument", getUserDocument);
router.post("/userDocument", postUserDocument);
router.post("/userDocument/login", postUserDocumentPassword);
router.put("/userDocument/:id", putUserDocument);
router.delete("/userDocument/:id", deleteUserDocument);

export default router;