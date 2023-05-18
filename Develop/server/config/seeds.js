const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Sporting Goods',
    },
    {
      name: 'Electronics',
    },
    {
      name: 'Apparel',
    },
    {
      name: 'Accessories',
    },
    {
      name: 'Shoes',
    },
    {
      name: 'Motors',
    },
    {
      name: 'Collectibles',
    },
    {
      name: 'Toys',
    },
    {
      name: 'Home & Garden',
    },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // this is the example format for all of the products carried over from previous Thingamabobs
    // {
    //   name: 'Tin of Cookies',
    //   description:
    //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    //   image: 'cookie-tin.jpg',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },

    {
      name: 'Plain T-Shirt',
      description: 'This is your plain white t shirt',
      image: 'plaintshirt.jpg',
      category: categories[3]._id,
      price: 14.99,
      quantity: 14,
    },

    {
      name: "Snoop Dogg's Blue Track Suit",
      description:
        'Original Sweat Suit worn by uncle Snoop as seen on the Super Bowl Halftime show',
      image: 'tracksuit.jpg',
      category: categories[3]._id,
      price: 3999999.99,
      quantity: 1,      
    },

    {
      name: 'Edible Crayons',
      image: 'ediblecrayons.jpg',
      description:
        'Paint your mouth by chewing bubble yum',
      price: 49.99,
      quantity: 400,
      category: categories[8]._id,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },

    {
      name: '',
      description: '',
      image: '',
      category: categories[]._id,
      price: ,
      quantity: ,
    },


  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.insertMany([
    {
      firstName: 'Amrita',
      lastName: 'Raja',
      email: 'amrita@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Daniel',
      lastName: 'Bradley',
      email: 'daniel@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Matthew',
      lastName: 'Nguyen',
      email: 'matthew@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Theresa',
      lastName: 'Cao',
      email: 'theresa@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'George',
      lastName: 'Jordan',
      email: 'george@gmail.com',
      password: 'password12345',
    },
  ]);

  console.log('users seeded');

  process.exit();
});
