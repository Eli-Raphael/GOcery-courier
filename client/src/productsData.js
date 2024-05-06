const products = [
    {
       name: "Organic Spinach",
       variants: ["Bag", "Loose"],
       prices: [
         {
           small: 1.99,
           medium: 3.99,
           large: 5.99,
         },
       ],
       category: "Vegetables",
       image: "https://static01.nyt.com/images/2010/03/09/science/09obspinach_ready/09obspinach_ready-articleLarge.jpg",
       description: "Fresh, organic spinach, perfect for salads and stir-fries.",
    },
    {
       name: "Bread",
       variants: ["Whole wheat, Whole grain, Rye bread"],
       prices: [
         {
           small: 3.49,
           medium: 6.99,
           large: 9.99,
         },
       ],
       category: "Bakery",
       image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg/whole-wheat-bread.jpg",
       description: "Whole wheat bread, great for sandwiches and toast.",
    },
    {
       name: "Almond Milk",
       variants: ["Carton"],
       prices: [
         {
           small: 2.99,
           medium: 5.99,
           large: 8.99,
         },
       ],
       category: "Dairy",
       image: "https://thegreengrocermanila.com/wp-content/uploads/2017/10/organic-unsweetened-almond-milk-vanilla-946-ml.jpg",
       description: "Nutritious almond milk, suitable for all dietary needs.",
    },
    {
       name: "Organic Avocado",
       variants: ["Each"],
       prices: [
         {
           small: 1.49,
           medium: 2.99,
           large: 4.99,
         },
       ],
       category: "Fruits",
       image: "https://cdn.farmjournal.com/s3fs-public/styles/840x600/public/2021-03/CA-organic_file-photo-by-The-Packer-staff_web.png?itok=FLffrMOy",
       description: "Ripe, organic avocados, perfect for guacamole and salads.",
    },
    {
       name: "Gluten-Free Flour",
       variants: ["Bag"],
       prices: [
         {
           small: 4.99,
           medium: 9.99,
           large: 14.99,
         },
       ],
       category: "Bakery",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqkAhFXaWSgJkxTNdXk5KLLohilsqK06R9Q&s",
       description: "Gluten-free flour, ideal for baking and cooking.",
    },
    {
      name: "Honey",
      variants: ["Jar", "Bottle"],
      prices: [
        {
          small: 5.99, // Jar
          medium: 10.99, // Bottle
          large: "", // No large variant for this product
        },
      ],
      category: "Bakery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hx4OViJssHEQouY71S1W8Fywbe3PFFAl5g&s",
      description: "Pure, sustainable honey, harvested from local beekeepers. Perfect for baking, cooking, and as a natural sweetener.",
   },
   ]

   export default products