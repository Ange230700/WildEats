import CardImage1 from "../../../server/public/assets/images/restaurants/bairoz.png";
import CardImage2 from "../../../server/public/assets/images/restaurants/guindaille.png";
import CardImage3 from "../../../server/public/assets/images/restaurants/ichigoichie.jpg";
import CardImage4 from "../../../server/public/assets/images/restaurants/ichizen.png";
import CardImage5 from "../../../server/public/assets/images/restaurants/lacantinviet.png";
import CardImage6 from "../../../server/public/assets/images/restaurants/lelionetlagneau.png";
import CardImage7 from "../../../server/public/assets/images/restaurants/lerecre.png";
import CardImage8 from "../../../server/public/assets/images/restaurants/papapasta.png";
import CardImage9 from "../../../server/public/assets/images/restaurants/papill.png";
import CardImage10 from "../../../server/public/assets/images/restaurants/pazzi.png";

const CardRestaurants = [
  {
    restaurantName: "Ichi-go Ichi-e Ramen",
    image: CardImage1,
    link: "https://ichigoichie.fr/",
    category: "Asiatique",
    address: "31 Rue Fouré, 44000 Nantes",
    takeaway: true,
    price: "€",
    note: "⭐",
  },
  // Add other restaurant objects based on the Card images
  {
    restaurantName: "Guindaille",
    image: CardImage2,
    link: "https://www.facebook.com/guindaille.nantes",
    category: "Végétarien",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€€",
    note: "⭐",
  },
  {
    restaurantName: "Ichizen",
    image: CardImage3,
    link: "https://www.ichizen.fr/",
    category: "Asiatique",
    address: "8 Rue de la Biscuiterie, 44000 Nantes",
    takeaway: false,
    price: "€€€",
    note: "⭐⭐⭐",
  },
  {
    restaurantName: "La Cantina Viet",
    image: CardImage4,
    link: "https://www.lacantinaviet.com/",
    category: "Asiatique",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€€",
    note: "⭐",
  },
  {
    restaurantName: "Le Lion et l'Agneau",
    image: CardImage5,
    link: "https://www.lelionetlagneau.fr/",
    category: "Bistro",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€",
    note: "⭐",
  },
  {
    restaurantName: "Le Récré",
    image: CardImage6,
    link: "https://www.lerecre.fr/",
    category: "Bistro",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: false,
    price: "€€€",
    note: "⭐",
  },
  {
    restaurantName: "Papa Pasta",
    image: CardImage7,
    link: "https://www.papapasta.fr/",
    category: "Italien",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€€",
    note: "⭐⭐",
  },
  {
    restaurantName: "Papill'",
    image: CardImage8,
    link: "https://www.papill.fr/",
    category: "Végétarien",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€€€",
    note: "⭐",
  },
  {
    restaurantName: "Pazzi",
    image: CardImage9,
    link: "https://www.pazzi.fr/",
    category: "Italien",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: false,
    price: "€",
    note: "⭐⭐⭐",
  },
  {
    restaurantName: "Bairoz",
    image: CardImage10,
    link: "https://www.bairoz.fr/",
    category: "Bistro",
    address: "5 Rue de la Juiverie, 44000 Nantes",
    takeaway: true,
    price: "€",
    note: "⭐⭐⭐",
  },
];

export default CardRestaurants;
