const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
  .get(ordersController.findAll)
  .post(ordersController.create);

// Matches with "/api/orders/:id"
router
  .route("/:id")
  .get(ordersController.findById)
  .put(ordersController.update)
  .delete(ordersController.remove);

// Matches with "/api/orders/usertotal/:userid/"
router.route("/usertotal/:userid/:dayone/:daytwo").get(ordersController.getUserOrderTotal);

// Matches with "/api/orders/clienttotal/:clientid"
router.route("/clienttotal/:clientid").get(ordersController.getClientOrderTotal);

module.exports = router;