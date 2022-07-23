import Products from "../models/ProductModel.js";

export const getProducts = async (req, res, next) => {
  await Products.findAll()
    .then((result) => {
      res.json({ status: 200, message: result });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getProduct = async (req, res) => {
  const email = req.body.email;
  await Products.findAll({ where: { id_user: email } })
    .then((result) => {
      res.json({ status: 200, message: result });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getProductForUpdate = async (req, res) => {
  const product_code = req.body.product_code;
  const id_user = req.body.id_user;
  await Products.findAll({ where: { code: product_code, id_user: id_user } })
    .then((result) => {
      res.json({ status: 200, message: result });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const addProduct = async (req, res) => {
  const data = req.body;
  const productData = {
    title: data.title,
    code: data.code,
    image: data.image,
    price: data.price,
    stock: data.stock,
    category: data.category,
    id_user: data.id_user,
    discount: data.discount,
    status: data.status,
  };

  await Products.create(productData)
    .then((response) => {
      res.json({ data: response, message: "success" });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const editProduct = async (req, res) => {
  const data = req.body;
  const code = req.params.code;
  let productData = {
    title: req.body.title,
    code: req.body.code,
    image: req.body.image,
    price: req.body.price,
    stock: req.body.stock,
    category: parseInt(req.body.category),
    id_user: req.body.id_user,
    discount: 0,
    status: 1,
  };

  await Products.update(productData, {
    where: { code: code, id_user: productData.id_user },
  })
    .then((response) => {
      res.json({ status: 200, message: response });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const deleteProduct = async (req, res) => {
  const id_product = req.params.id_product;
  const id_user = req.params.id_user;

  await Products.destroy({ where: { id: id_product, id_user: id_user } })
    .then((response) => {
      Products.findAll({ where: { id_user: id_user } })
        .then((result) => {
          res.json({ status: 200, message: result });
        })
        .catch((error) => {
          res.json(error);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};
