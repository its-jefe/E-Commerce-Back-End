// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// Categories have many Products
    Category.hasMany(Product, {
        foreignKey: 'category_id' //? 
    })

// Products belongsTo Category
    Product.belongsTo(Category, {
        foreignKey: 'category_id' //?
    })

// Products belongToMany Tags (through ProductTag)
    Product.belongsToMany(Tag, {
        through: ProductTag,
        as: 'product_to_tag', // test
        foreignKey: 'product_id' // Referencing through ProductTag??
    })

// Tags belongToMany Products (through ProductTag)
    Tag.belongsToMany(Product, {
        through: ProductTag,
        as: 'tag_to_product', // test
        foreignKey: 'tag_id' // referencing ProductTag
    })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};