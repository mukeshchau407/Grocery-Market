import Product from "../models/Product";

// Add product : /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = json.parse(req.body.productData);

    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    await Product.create({ ...productData, images: imagesUrl });

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get product list : /api/product/list

export const productList = async (req, res) => {};

// Get single product : /api/product/:id

export const productId = async (req, res) => {};

// Get product inStock : /api/product/stock

export const changeStock = async (req, res) => {};
