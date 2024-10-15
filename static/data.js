export const categories = [
    {
        id: 1,
        title: "Biryani",
        img: require("../assets/images/biryani.png"),
        des : "Indulge in the Aromatic Delight Savor Every Bite of Our Biryani!"
    },
    {
        id: 2,
        title: "Burgers",
        img: require("../assets/images/burgers.png"),
        des :"Sink Your Teeth into Perfection Experience the Ultimate Burger Bliss!"
    },
    {
        id: 3,
        title: "Momos",
        img: require("../assets/images/momos.png"),
        des : "Indulge in Flavor Perfection Discover the Ultimate Momo Delight!"
    },
    {
        id: 4,
        title: "Shawarma",
        img: require("../assets/images/shawarama.png"),
        des : "Savor the Taste of Perfection Experience the Ultimate Shawarma Sensation!"
    },
    {
        id: 5,
        title: "Rolls",
        img: require("../assets/images/rolls.png"),
        des : "Bite into Flavorful Perfection Enjoy the Ultimate Chicken Roll Experience!"
    },
    {
        id: 6,
        title: "Pizza",
        img: require("../assets/images/pizza.png"),
        des : "Indulge in the Ultimate Pizza Experience Savor Every Bite of Perfection!"
    },
    {
        id: 7,
        title: "Chinese",
        img: require("../assets/images/chinese.png"),
        des : "Experience the Authentic Flavors of Chinese Cuisine Indulge in the Ultimate Chinese Delight!"
    },
];


export const restaurants = [
    {
        id: 1,
        name: "Biryani House",
        address: "123 Main St, New York, NY",
        rating: 4.5,
        des: "Traditional Biryani restaurant with delicious flavors and great service.",
        deliveryTime: "30-40 min",
        img: require("../assets/images/karims.png"),
        menu: [
            { id: 1, name: "Chicken Biryani", price: 12.99, description: "Delicious chicken biryani with spices." },
            { id: 2, name: "Mutton Biryani", price: 15.99, description: "Spicy mutton biryani, cooked to perfection." },
            { id: 3, name: "Vegetable Biryani", price: 10.99, description: "Healthy and tasty vegetable biryani." }
        ]
    },
    {
        id: 2,
        name: "Burger Joint",
        address: "456 Elm St, Los Angeles, CA",
        rating: 4.2,
        des: "Freshly made burgers with a variety of toppings and sauces.",
        deliveryTime: "20-30 min",
        img: require("../assets/images/karims.png"),
        menu: [
            { id: 1, name: "Cheeseburger", price: 9.99, description: "Classic cheeseburger with fresh ingredients." },
            { id: 2, name: "Double Bacon Burger", price: 12.99, description: "Juicy burger with crispy bacon and cheese." },
            { id: 3, name: "Vegan Burger", price: 8.99, description: "Plant-based patty with a variety of toppings." }
        ]
    },
    {
        id: 3,
        name: "Momos Delight",
        address: "789 Oak St, Chicago, IL",
        rating: 4.7,
        des: "Authentic Indian momos with a variety of fillings and spices.",
        deliveryTime: "25-35 min",
        img: require("../assets/images/karims.png"),
        menu: [
            { id: 1, name: "Chicken Momos", price: 7.99, description: "Steamed chicken dumplings with spices." },
            { id: 2, name: "Veg Momos", price: 6.99, description: "Healthy vegetable-filled momos." },
            { id: 3, name: "Fried Momos", price: 8.99, description: "Crispy fried momos with spicy fillings." }
        ]
    },
    {
        id: 4,
        name: "Shawarma Stop",
        address: "321 Pine St, Houston, TX",
        rating: 4.1,
        des: "Tasty shawarma with a variety of meats and spices.",
        deliveryTime: "15-25 min",
        img: require("../assets/images/karims.png"),
        menu: [
            { id: 1, name: "Chicken Shawarma", price: 9.99, description: "Grilled chicken shawarma with garlic sauce." },
            { id: 2, name: "Beef Shawarma", price: 10.99, description: "Juicy beef shawarma with tahini." },
            { id: 3, name: "Falafel Wrap", price: 8.99, description: "Crispy falafel in a wrap with fresh veggies." }
        ]
    }
];


export const restaurantMenus = [
    {
        id :1,
        name : "Veg"
    },
    {
        id :2,
        name : "Non-Veg"
    },
    {
        id :3,
        name : "Rating 4+"
    },
    {
        id :4,
        name : "Chinese"
    },
]