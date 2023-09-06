const express = require('express');

const blogControllers = require("../Controllers/blogControllers");
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const productController = require("../Controllers/productController");
const profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController");
const protfolioController = require("../Controllers/protfolioController");
const serviceController = require("../Controllers/serviceController");
const titleController = require("../Controllers/titleController");

const router = express.Router();


router.get("/blogcreate",blogControllers.create);
router.get("/blogread",blogControllers.read);
router.get("/blogdelete",blogControllers.delete);
router.get("/blogupdate",blogControllers.update);


router.get("/blogDetailscreate",blogDetailsController.create);
router.get("/blogDetailsread",blogDetailsController.read);
router.get("/blogDetailsdelete",blogDetailsController.delete);
router.get("/blogDetailsupdate",blogDetailsController.update);


router.get("/commentControllercreate",commentController.create);
router.get("/commentControllerread",commentController.read);
router.get("/commentControllerdelete",commentController.delete);
router.get("/commentControllerupdate",commentController.update);


router.get("/messageControllercreate",messageController.create);
router.get("/messageControllerread",messageController.read);
router.get("/messageControllerdelete",messageController.delete);
router.get("/messageControllerupdate",messageController.update);


router.get("/productControllercreate",productController.create);
router.get("/productControllerread",productController.read);
router.get("/productControllerdelete",productController.delete);
router.get("/productControllerupdate",productController.update);


router.get("/profitControllercreate",profitController.create);
router.get("/profitControllerread",profitController.read);
router.get("/profitControllerdelete",profitController.delete);
router.get("/profitControllerupdate",profitController.update);

router.get("/projectcreate",projectController.create);
router.get("/projectread",projectController.read);
router.get("/projectdelete",projectController.delete);
router.get("/projectupdate",projectController.update);


router.get("/protfoliocreate",protfolioController.create);
router.get("/protfolioread",protfolioController.read);
router.get("/protfoliodelete",protfolioController.delete);
router.get("/protfolioupdate",protfolioController.update);


router.get("/servicecreate",serviceController.create);
router.get("/serviceread",serviceController.read);
router.get("/servicedelete",serviceController.delete);
router.get("/serviceupdate",serviceController.update);


router.get("/titlecreate",titleController.create);
router.get("/titleread",titleController.read);
router.get("/titledelete",titleController.delete);
router.get("/titleupdate",titleController.update);

module.exports=router;