import Products from "../models/ProductModel.js";
import Transactions from "../models/TransactionModel.js";
import Sequelize from "sequelize";

export const addTransaction = async (req, res) => {
  const data = req.body;

  await Transactions.bulkCreate(data)
    .then((result1) => {
      if (result1) {
        data.map((item, index) => {
          Products.findAll({
            where: {
              id: item.id_product,
              id_user: item.id_user,
            },
          })
            .then((result) => {
              const currentStock = result[0].stock;
              let updatedStock = +currentStock - +item.quantity;
              if (updatedStock > 0) {
                Products.update(
                  { stock: updatedStock },
                  {
                    where: {
                      id: item.id_product,
                      id_user: item.id_user,
                    },
                  }
                )
                  .then((result2) => {
                    res.json({ data: result2, message: "success" });
                  })
                  .catch((err) => {
                    res.json(err);
                  });
              }
            })
            .catch((error) => {
              res.json(error);
            });
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getSales = async (req, res) => {
  await Transactions.findAll({
    attributes: [
      [
        Sequelize.fn(
          "SUM",
          Sequelize.cast(Sequelize.col("nominal_transaction"), "integer")
        ),
        "nominalTransaction",
      ],
      [
        Sequelize.fn(
          "SUM",
          Sequelize.cast(Sequelize.col("quantity"), "integer")
        ),
        "productSold",
      ],
    ],
    where: {
      id_user: req.body.id_user,
    },
  })
    .then((result) => {
      res.json({ status: 200, message: result });
    })
    .catch((err) => {
      res.json(err);
    });
};
