const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { addSchema, updateFavoriteScheme } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(addSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavoriteScheme),
  ctrl.updateStatusContact
);

module.exports = router;
