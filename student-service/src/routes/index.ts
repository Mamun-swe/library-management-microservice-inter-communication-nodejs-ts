import { Router } from "express"
import { authRouter } from "./auth.route"
import { profileRouter } from "./profile.route"
import { bookRouter } from "./book.route"
import { isAuthentic } from "../middleware/permission.middleware"

export const router: Router = Router()

router.use("/auth", authRouter)
router.use("/profile", isAuthentic, profileRouter)
router.use("/books", isAuthentic, bookRouter)