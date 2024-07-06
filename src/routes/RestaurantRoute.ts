import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get("/search/:city" , param("city").isString().trim().notEmpty().withMessage("city Parameter must be valid"), RestaurantController.searchRestaurant);

export default router;