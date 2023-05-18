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
      name: 'Melodikon',
      description: 'A very rare electronic music box made in the former East Germany. You know you need it.',
      image: 'melodikon.jpg',
      category: categories[7]._id,
      price: 49999.99,
      quantity: 1,
    },

    {
      name: 'Wildebeest',
      description: 'The pet you never knew you needed.',
      image: 'wildebeest.jpg',
      category: categories[9]._id,
      price: 249999.99,
      quantity: 1,
    },

    {
      name: 'The Original Thingamabobs',
      description: 'These thingamabobs will leave you wanting more',
      image: 'arielthingamabobs.jpg',
      category: categories[7]._id,
      price: 29.99,
      quantity: 20,
    },

    {
      name: 'Soccer Ball',
      description: 'Kids Soccer Ball',
      image: 'soccerball.png',
      category: categories[1]._id,
      price: 14.99,
      quantity: 34,
    },

    {
      name: 'Printer',
      description: 'A very nice Laser Printer',
      image: 'printer.jpg',
      category: categories[2]._id,
      price: 119.99,
      quantity: 40,
    },

    {
      name: 'Boba Sweatshirt',
      description: 'A sweatershirt for all you boba lovers...',
      image: 'bobasweater.jpeg',
      category: categories[4]._id,
      price: 125.99,
      quantity: 34,
    },

    {
      name: 'Big Red Boots',
      description: 'Inspired by Boots from Dora the Explorer',
      image: 'redboots.jpg',
      category: categories[4]._id,
      price: 125.99,
      quantity: 34,
    },

    {
      name: 'Machete',
      description: 'Great for dicing up veggies, shaving, or cutting steak. Did someone say Friday the 13th?',
      image: 'machete.jpg',
      category: categories[9]._id,
      price: 12.99,
      quantity: 13,
    },

    {
      name: 'Teddy Bear',
      description: 'Classic brown teddy bear that is soft and fun to cuddle with',
      image: 'teddybear.jpg',
      category: categories[8]._id,
      price: 16.99,
      quantity: 11,
    },

    {
      name: 'High heels',
      description: '6 inch high heels',
      image: 'highheels.jpg',
      category: categories[5]._id,
      price: 42.99,
      quantity: 21,
    },

    {
      name: 'Lava Lamp',
      description: 'Lava lamp with golden shiny dust',
      image: 'lavalamp.jpg',
      category: categories[8]._id,
      price: 21.99,
      quantity: 14,
    },

    {
      name: 'Basketball',
      description: 'Orange classic basketball',
      image: 'basketball.png',
      category: categories[1]._id,
      price: 14.99,
      quantity: 8,
    },

    {
      name: 'Hairbrush',
      description: 'Hairbrush to get your hair silky and smooth',
      image: 'hairbrush.jpg',
      category: categories[4]._id,
      price: 8.99,
      quantity: 12,
    },

    {
      name: 'Lamborghini Gallardo SuperLeggera',
      description: 'This thing is fast',
      image: 'lambo.jpg',
      category: categories[6]._id,
      price: 35000000.0,
      quantity: 2,
    },

    {
      name: '1992 Bentley Turbo R',
      description: 'The ultimate classic',
      image: 'bentley.jpg',
      category: categories[6]._id,
      price: 1500000.0,
      quantity: 1,
    },

    {
      name: 'Tires',
      description: 'These things roll.',
      image: 'tires.jpg',
      category: categories[6]._id,
      price: 350.0,
      quantity: 4,
    },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },

    // {
    //   name: '',
    //   description: '',
    //   image: '',
    //   category: categories[]._id,
    //   price: ,
    //   quantity: ,
    // },


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
