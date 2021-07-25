// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// Products belongsTo Category
    /*
    [Product] belongs to [Category], as a category can have multiple products but a product can only belong to one category.
    */

// Categories have many Products
    /*
    [Category] has many [Product] models.
    */

// Products belongToMany Tags (through ProductTag)
    /*
    [Product] belongs to many [Tag] models. Using the [ProductTag] through model, allow products to have multiple tags and tags to have many products.
    */

// Tags belongToMany Products (through ProductTag)
    /*
    [Tag] belongs to many [Product] models.
    */

// HINT
    /*
    Make sure you set up foreign key relationships that match the column we created in the respective models.
    */


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
