const express = require('express');

const router = express.Router();


router.get("/blogcreate",blogControllers.create);
router.get("/blogread",blogControllers.read);
router.get("/blogdelete",blogControllers.delete);
router.get("/blogupdate",blogControllers.update);