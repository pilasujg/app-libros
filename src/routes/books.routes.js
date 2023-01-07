import { Router } from "express";
const router = Router();

import {renderFormAdd, renderListado, renderCreateBook, renderEditBook, renderUpdateBook, deleteBook } from "../controllers/books.controllers";

router.get("/add", renderFormAdd);
router.post("/books/add", renderCreateBook);
router.get("/listado", renderListado);
router.get("/books/edit-form/:id", renderEditBook)
router.put("/books/edit/:id", renderUpdateBook)
router.delete("/books/delete/:id", deleteBook)

module.exports = router;