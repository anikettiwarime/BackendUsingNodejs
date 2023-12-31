import { Router } from "express";
const router = Router();

import { loginUser, logoutUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

router.route("/register").post(
    upload.fields([
        {
            "name": "avatar",
            "maxCount": 1
        },
        {
            "name": "coverImage",
            "maxCount": 1
        }
    ])
    , registerUser);

router.route('/login').post(loginUser);

// Secret routes
router.route('/logout').post(verifyJWT, logoutUser);
router.route('/refresh-token').post(refreshAccessToken);


export default router;