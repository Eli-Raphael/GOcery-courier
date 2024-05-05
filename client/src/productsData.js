const products = [
    {
       name: "Organic Spinach",
       variants: ["Bag", "Loose"],
       prices: [
         {
           Bag: 1.99,
           Loose: 3.99,
         },
       ],
       category: "Vegetables",
       image: "https://static01.nyt.com/images/2010/03/09/science/09obspinach_ready/09obspinach_ready-articleLarge.jpg",
       description: "Fresh, organic spinach, perfect for salads and stir-fries.",
    },
    {
       name: "Bread",
       variants: ["Whole_Wheat", "Whole_Grain", "Rye"],
       prices: [
         {
           Whole_Wheat: 3.49,
           Whole_Grain: 6.99,
           Rye: 9.99,
         },
       ],
       category: "Bakery",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0iR8MWuo1lThRkYp87zdNB0bWUq1Y1F4Lg&s",
       description: "Whole wheat bread, great for sandwiches and toast.",
    },
    {
       name: "Almond Milk",
       variants: ["Carton", "Glass_Bottle"],
       prices: [
         {
          Carton: 2.99,
          Glass_Bottle: 5.99,
         },
       ],
       category: "Dairy",
       image: "https://thegreengrocermanila.com/wp-content/uploads/2017/10/organic-unsweetened-almond-milk-vanilla-946-ml.jpg",
       description: "Nutritious almond milk, suitable for all dietary needs.",
    },
    {
       name: "Avocado",
       variants: ["Gwen", "Zutanu", "Bacon"],
       prices: [
         {
          Gwen: 1.49,
          Zutanu: 2.99,
          Bacon: 5.99
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
           Bag: 4.99,
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
          Jar: 5.99, 
          Bottle: 10.99,
        },
      ],
      category: "Bakery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hx4OViJssHEQouY71S1W8Fywbe3PFFAl5g&s",
      description: "Pure, sustainable honey, harvested from local beekeepers. Perfect for baking, cooking, and as a natural sweetener.",
   },
   ]

   export default products