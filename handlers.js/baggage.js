import { Router } from "express";
import { create } from "../../../services/baggage.js";
import{ createBaggageValidator } from "../validators/baggage.js";

const BAGGAGE_ROUTER = Router();

BAGGAGE_ROUTER.post("/", createBaggageValidator, async (req,resizeBy,next) => {
    try {
    const baggage = await create (req.body);

    res.status(201).json({ data: baggage});
    }catch(error){
        next(error);
    }
});

export default BAGGAGE_ROUTER;