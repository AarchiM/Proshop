const Products = [
  {
    rating: 2.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 1,
    name: "Veg friedd Rice",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer with 100grams of fresh vegitables.",
    price: "120",
  },
  {
    rating: 3,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 2,
    name: "Paneer Tikka",
    image:
      "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D",
    price: "210",
    description:
      "Grilled paneer cubes marinated in a blend of spices and yogurt. A delicious vegetarian appetizer, served with mint chutney.",
  },
  {
    rating: 3.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 3,
    name: "Vegetable Sandwitch",
    image:
      "https://images.unsplash.com/photo-1619860860774-1e2e17343432?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FuZHdpdGNofGVufDB8fDB8fHww",
    price: 134,
    description:
      "Succulent paneer pieces wrapped in flatbread with vegetables, red sauce, and spices. A Middle Eastern classic loved by many.",
  },
  {
    rating: 3.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 0,
    _id: 4,
    name: "Veg Manchurian",
    image:
      "https://media.istockphoto.com/id/2159018819/photo/manchurian-with-gravy.jpg?s=612x612&w=is&k=20&c=5CFA68DzXt78oX6q71tHs8Hiesnj7JZBVyKwthHRQHc=",
    price: "432",
    description:
      "Deep-fried vegetable balls in a tangy, sweet, and spicy Manchurian sauce. A popular Indo-Chinese appetizer.",
  },
  {
    rating: 4.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 5,
    name: "Aloo Gobi",
    image:
      "https://media.istockphoto.com/id/505844643/photo/fish-soup.jpg?s=612x612&w=0&k=20&c=4MXIKOOpprZjEyaJfkwUqJM6MhgFY65gFGVe9PIQONA=",
    price: "342",
    description:
      "A classic North Indian dish made with potatoes and cauliflower cooked in a flavorful blend of spices.",
  },
  {
    rating: 5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 9,
    _id: 6,
    name: "Chole Bhature",
    image:
      "https://media.istockphoto.com/id/1328896670/photo/katlambe-chole.jpg?s=612x612&w=0&k=20&c=pqASzto6oi335ApT4CrJDTMniqLRi_uy0WwfigCbMFM=",
    price: "453",
    description:
      "A North Indian favorite, this dish features spicy chickpeas (chole) served with deep-fried, fluffy bread (bhature). Perfect with a side of pickles and yogurt.",
  },
  {
    rating: 4,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 7,
    name: "Aloo Paratha",
    image:
      "https://media.istockphoto.com/id/1167481258/photo/image-of-north-indian-breakfast-dish-buffet-slices-of-aloo-parathas-with-sprinkle-of.jpg?s=612x612&w=is&k=20&c=DCfouJEudrDnkqAPvBrqo_ZoE68S43AFIOet0RFrdnI=",
    price: "132",
    description:
      "Soft, stuffed flatbread filled with spiced mashed potatoes. Served with curd and pickle for an extra zing.",
  },
  {
    rating: 3.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 3,
    _id: 8,
    name: "Palak Paneer",
    image:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D",
    price: "203",
    description:
      "A smooth and creamy spinach gravy with soft cubes of paneer. Served with naan or rice for a hearty meal.",
  },
  {
    rating: 3.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 6,
    _id: 9,
    name: "Baingan Bharta",
    image:
      "https://media.istockphoto.com/id/656947220/photo/baingan-bharta.jpg?s=612x612&w=0&k=20&c=WPWf5Mkue_1RC4U8KccBi3jXQSTTB84NLOWjsT6RpSs=",
    price: "120",
    description:
      "Smoky, mashed eggplant cooked with spices and a dash of tangy tomatoes. A comforting side dish for roti or rice.",
  },
  {
    rating: 2.5,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 10,
    name: "Vegetable Korma",
    image:
      "https://media.istockphoto.com/id/1286704697/photo/close-up-image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large.jpg?s=612x612&w=0&k=20&c=MDd5GOCGOaXnUvB13_O_LDyj9kbx5rTL2irQU6P1THg=",
    price: "220",
    description:
      "A rich and creamy curry made with mixed vegetables, nuts, and a blend of aromatic spices. Perfect with naan or steamed rice.",
  },
  {
    rating: 3,
    numReviews: 5,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 0,
    _id: 11,
    name: "Dal Tadka",
    image:
      "https://media.istockphoto.com/id/1326815151/photo/indian-popular-food-dal-fry-or-traditional-dal-tadka-curry.jpg?s=612x612&w=is&k=20&c=G6JEMc-mVSY0JAB8PGcFbzifjghFGfGvUw6JuRL5RbQ=",
    price: "320",
    description:
      "Yellow lentils cooked with onions, tomatoes, and tempered with ghee and spices for a delicious, flavorful curry.",
  },
  {
    rating: 4.2,
    numReviews: 10,
    brand: "Amazon",
    category: "Food Items",
    countInStock: 2,
    _id: 12,
    name: "Dhokla",
    image:
      "https://media.istockphoto.com/id/2154971502/photo/famous-gujrati-snack-dhokla-made-with-gram-flour-and-sugar-syrup-decorated-with-mint-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=MacEDJlATPi0-ztKaDwBRJxq4k9KPKI6MhZwEoZdQeg=",
    price: "422",
    description:
      "Steamed savory cake made with fermented rice and chickpea flour, served with chutneys. A healthy and light snack.",
  },
];

export default Products;
