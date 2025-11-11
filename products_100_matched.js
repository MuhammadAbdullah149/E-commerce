let products = [
  {
    "id": 1,
    "name": "Lipstick",
    "category": "Beauty",
    "price": 500,
    "sale": 40,
    "description": "This modern lipstick is a high-quality beauty item perfect for everyday use.",
    "image": "https://goodmockups.com/wp-content/uploads/2019/04/Free-Lipstick-Mockup-PSD.jpg"

  },
  {
    "id": 2,
    "name": "Chair",
    "category": "Home",
    "price": 7000,
    "sale":50,
    "description": "This modern chair is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaojOBci02L0vucCnsqxRMyJ2-J9dy38bUw&s"
  },
  {
    "id": 3,
    "name": "joggers",
    "category": "Sports",
    "price": 3000,
    "sale": 38,
    "description": "This compact shoes is a high-quality sports item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3bxewZri_6QINQiCbbyLN0TG7zsHeYUmBw&s"
  },
  {
    "id": 4,
    "name": "Light Table",
    "category": "Home",
    "price": 4000,
    "sale": 50,
    "description": "This lightweight table is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIyeqKQHUlPtPI_I6U86pbaoGMaabWnAYXA&s"
  },
  {
    "id": 5,
    "name": "Durable Jeans",
    "category": "Fashion",
    "price": 1500,
    "sale": 70,
    "description": "This durable jeans is a high-quality fashion item perfect for everyday use.",
    "image": "https://cdn.shopify.com/s/files/1/2721/9324/files/BlackhorseLane_square_2_grande.jpg?v=1589891372"
  },
  {
    "id": 6,
    "name": "Durable Sofa",
    "category": "Home",
    "price": 60000,
    "sale":45,
    "description": "This durable sofa is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99TPwWrgct5ETh4vLKHnzW41MBB526uMt1w&s"
  },
  {
    "id": 7,
    "name": "Drinks",
    "category": "Groceries",
    "price": 1200,
    "sale": 15,
    "description": "This eco-friendly drinks is a high-quality groceries item perfect for everyday use.",
    "image": "https://nawon.com.vn/wp-content/uploads/2023/04/eco-friendly-drinks-2.jpg"
  },
  {
    "id": 8,
    "name": "Compact Phone",
    "category": "Mobile",
    "price": 200000,
    "sale": 10,
    "description": "This compact phone is a high-quality electronics item perfect for everyday use.",
    "image": "https://i.pcmag.com/imagery/reviews/03zPqvQttNll15JCKzkCnzw-22..v1747246736.jpg"
  },
  {
    "id": 9,
    "name": "Lego",
    "category": "Toys",
    "price": 1200,
    "sale": 15,
    "description": "This durable lego is a high-quality toys item perfect for everyday use.",
    "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_31/2957476/190802-lego-tree-house-mn-1215p.jpg"
  },
  {
    "id": 10,
    "name": "Durable Sandals",
    "category": "Fashion",
    "price": 4000,
    "sale": 25,
    "description": "This durable sandals is a high-quality shoes item perfect for everyday use.",
    "image": "https://starlet.pk/cdn/shop/files/RF118-006-BLK.jpg?v=1757010107"
  },
  {
    "id": 11,
    "name": "Elegant Lips",
    "category": "Beauty",
    "price": 500,
    "sale":30,
    "description": "This elegant lipstick is a high-quality beauty item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxryUSQfwXUyGHXR5BSIcVdGaPxUYnCl6Kg&s"
  },
  {
    "id": 12,
    "name": "Sunglasses",
    "category": "Fashion",
    "price":1500 ,
    "sale": 5,
    "description": "This premium sunglasses is a high-quality accessories item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g5cG9t9sUScdFWiIr9Uk-d-RZF5hCQ7ooz2SMsfd28KZbOVaTrUDakPMX1XuuXYihME&usqp=CAU"
  },
  {
    "id": 13,
    "name": "Modern Dress",
    "category": "Fashion",
    "price": 12000,
    "sale": 10,
    "description": "This modern dress is a high-quality fashion item perfect for everyday use.",
    "image": "https://image.made-in-china.com/2f0j00JckbfCFISqbo/Premium-Men-s-Navy-Blue-Slim-Fit-Business-Suit-by-Professional-Suit-Manufacturer.webp"
  },
  {
    "id": 14,
    "name": "Boots",
    "category": "Fashion",
    "price": 6600,
    "sale": 50,
    "description": "This portable boots is a high-quality shoes item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgTnjQznP-C-tfmXsNmIHhj8PzjbFDI-YVg&s"
  },
  {
    "id": 15,
    "name": "Stylish Jacket",
    "category": "Fashion",
    "price": 8999,
    "sale": 10,
    "description": "This stylish jacket is a high-quality fashion item perfect for everyday use.",
    "image": "https://leatheriza.com/wp-content/uploads/2023/10/bc2bad088c7bc9eac8607526f14ac098.jpg"
  },
  {
    "id": 16,
    "name": "Premium Library",
    "category": "Books",
    "price": 7999,
    "sale": 25,
    "description": "This premium library is a high-quality books item perfect for everyday use.",
    "image": "https://i.pinimg.com/236x/35/87/74/3587743c89eca928fc5870c9528a1b88.jpg"
  },
  {
    "id": 17,
    "name": "Doll",
    "category": "Toys",
    "price": 750,
    "sale": 0,
    "description": "This durable doll is a high-quality toys item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZP98yKeF8asmUOU0LOvO3osmOZJ2u5oiYFIewGKdjC6k5YaMXOiVXemhCQJfJ_OQcMgs&usqp=CAU"
  },
  {
    "id": 18,
    "name": "Compact Wallet",
    "category": "Fashion",
    "price": 1900,
    "sale": 35,
    "description": "This compact wallet is a high-quality accessories item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmDePv42WRN51W1EuGwwFF21YrD9k5uM7FA&s"
  },
  {
    "id": 19,
    "name": "Football",
    "category": "Sports",
    "price": 1930,
    "sale": 25,
    "description": "This stylish football is a high-quality sports item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1Up2QNmOSr5kiGmr7El9wx_CjX7DjLyxaw&s"
  },
  {
    "id": 20,
    "name": "Premium Skincare",
    "category": "Beauty",
    "price": 9999,
    "sale": 15,
    "description": "This premium skincare is a high-quality beauty item perfect for everyday use.",
    "image": "https://www.justmylook.com/cdn/shop/articles/Introducing-Korean-Skin-Care.png?v=1725350079"
  },
  {
    "id": 21,
    "name": "Elegant Boots",
    "category": "Fashion",
    "price": 7000,
    "sale": 25,
    "description": "This elegant boots is a high-quality shoes item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_3MgTmKqZKO4Quv8ya9I0B6sFflOSl9fIw&s"
  },
  {
    "id": 22,
    "name": "Stylish Novel",
    "category": "Books",
    "price": 10000,
    "sale": 35,
    "description": "This stylish novel is a high-quality books item perfect for everyday use.",
    "image": "https://assets.aboutamazon.com/10/64/b3dd429c48bc9381600ea5600fc8/hero-amazon-editors-announce-best-books-of-the-year-v2.jpg"
  },
  {
    "id": 23,
    "name": "Gaming",
    "category": "Computer",
    "price": 3000,
    "sale": 20,
    "description": "lag free gaming controllers works on every device",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3tEbD4LH_Y7WlHTHZUGp7_mmXd7FTV99zA&s"
  },
  {
    "id": 24,
    "name": "Compact Sunglasses",
    "category": "Fashion",
    "price": 1499,
    "sale": 5,
    "description": "This compact sunglasses is a high-quality accessories item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMKVzTPDOVSgcezYb0ylEKO11tWge8ShKxg&s"
  },
  {
    "id": 25,
    "name": "Elegant Toy",
    "category": "Toys",
    "price": 5499,
    "sale": 50,
    "description": "This elegant toy is a high-quality toys item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0J81lJfjgV_rErZmO7Ge8i5mNJ8GbIcFGQ&s"
  },
  {
    "id": 26,
    "name": "Portable Football",
    "category": "Sports",
    "price": 1200,
    "sale": 25,
    "description": "This portable football is a high-quality sports item perfect for everyday use.",
    "image": "https://c8.alamy.com/comp/BMEYFX/football-the-air-is-out-BMEYFX.jpg"
  },
  {
    "id": 27,
    "name": "Lightweight Lego",
    "category": "Toys",
    "price": 7499,
    "sale": 5,
    "description": "This lightweight lego is a high-quality toys item perfect for everyday use.",
    "image": "https://img.drz.lazcdn.com/g/kf/Sb40e99b819494f028f52688b8fa623c0d.jpg_720x720q80.jpg"
  },
  {
    "id": 28,
    "name": "Stylish Watch",
    "category": "Watches",
    "price": 1600,
    "sale": 10,
    "description": "This stylish watch is a high-quality fashion item perfect for everyday use.",
    "image": "https://fossil.scene7.com/is/image/FossilPartners/FS5304_main?$sfcc_fos_medium$"
  },
  {
    "id": 29,
    "name": "Portable Tablet",
    "category": "Mobile",
    "price": 60000,
    "sale": 5,
    "description": "This portable tablet is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElvBzg520NGL3DV00RIdbH4L0sPZSgSGh-Q&s"
  },
  {
    "id": 30,
    "name": "Premium Laptop",
    "category": "Computer",
    "price":55000,
    "sale": 2,
    "description": "This premium laptop is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyUA6T_UuEnvO6q2k5OYfIwObXsxLFslHBYwqOwGZPr3vxv15ouAOYifl4lW0hZZ_oQg&usqp=CAU"
  },
  {
    "id": 31,
    "name": "Lamp",
    "category": "Home",
    "price": 1600,
    "sale": 5,
    "description": "This durable lamp is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8h6W3eR9l5Vqz7bGDZfbsqyehkww00p_DGg&s"
  },
  {
    "id": 32,
    "name": "Bat",
    "category": "Sports",
    "price": 2000,
    "sale": 25,
    "description": "This durable cricket is a high-quality sports item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Z435sGqcB-rTf29CACF-5Ly66Pgnaj3jNA&s"
  },
  {
    "id": 33,
    "name": "Portable Library",
    "category": "Books",
    "price": 12000,
    "sale": 25,
    "description": "This portable library is a high-quality books item perfect for everyday use.",
    "image": "https://www.nystore.pk/images/product_gallery/1691692562_Foldable_Bookshelf_Open_Bookcase___.jpg"
  },
  {
    "id": 34,
    "name": "Elegant Bag",
    "category": "Fashion",
    "price": 2499,
    "sale": 15,
    "description": "This elegant bag is a high-quality accessories item perfect for everyday use.",
    "image": "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_YrqVxUeLnv7cCkQcTyDGJM47TydTAPIrZXZZQCA1.jpg"
  },
  {
    "id": 35,
    "name": "Tablet",
    "category": "Mobile",
    "price":40000,
    "sale": 5,
    "description": "This premium tablet is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8aUJUfzgserTrsej-dOjndoAaGgoEcCuvQ&s"
  },
  {
    "id": 36,
    "name": "Chair",
    "category": "Home",
    "price": 1200,
    "sale": 0,
    "description": "This eco-friendly chair is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGUVGp_5I6S-myPsDLCc_StL173sx2Ylkhw&s"
  },
  {
    "id": 37,
    "name": "Car-Toy",
    "category": "Toys",
    "price": 1499,
    "sale": 20,
    "description": "This lightweight car-toy is a high-quality toys item perfect for everyday use.",
    "image": "https://store.porsche.com.au/cdn/shop/files/Porsche-Toy-Car.jpg?v=1750231991"
  },
  {
    "id": 38,
    "name": "Doll",
    "category": "Toys",
    "price": 1000,
    "sale": 15,
    "description": "This compact doll is a high-quality toys item perfect for everyday use.",
    "image": "https://images-cdn.ubuy.co.in/65d1a86e9174752a6939b267-lifelike-reborn-baby-dolls-24-inch.jpg"
  },
  {
    "id": 39,
    "name": "Puzzle",
    "category": "Toys",
    "price": 1800,
    "sale": 5,
    "description": "This elegant puzzle is a high-quality toys item perfect for everyday use.",
    "image": "https://legpuzzels.nl/wp-content/uploads/shutterstock_428150695-1024x629.jpg"
  },
  {
    "id": 40,
    "name": "Durable Lego",
    "category": "Toys",
    "price": 999,
    "sale": 2,
    "description": "This durable lego is a high-quality toys item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4ifkVGb4htMiN9OJJ2CQO-Q2p_WDGxjE-w&s"
  },
  {
    "id": 41,
    "name": "Laptop",
    "category": "Computer",
    "price": 55000,
    "sale": 5,
    "description": "This eco-friendly laptop is a high-quality electronics item perfect for everyday use.",
    "image": "https://image.made-in-china.com/202f0j00kFahwGOyQNqi/Wholesale-Price-Hot-Selling-Lapop-for-Students-with-Good-Quality-Netbooks-Mini-Computer-High-End-Laptops.webp"
  },
  {
    "id": 42,
    "name": "Camera",
    "category": "Computer",
    "price": 30000,
    "sale": 1,
    "description": "This portable camera is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qX_Ludhk7-74LROLDAZPOZYRSicRAYmVKg&s"
  },
  {
    "id": 43,
    "name": "Premium Jeans",
    "category": "Fashion",
    "price": 1400,
    "sale": 3,
    "description": "This premium jeans is a high-quality fashion item perfect for everyday use.",
    "image": "https://vader-prod.s3.amazonaws.com/1722612312-mhl-052224-jeans-amazon1489-66acfa3cbbbe8.jpg"
  },
  {
    "id": 44,
    "name": "Fruits",
    "category": "Groceries",
    "price": 9515.75,
    "sale": 5,
    "description": "This eco-friendly fruits is a high-quality groceries item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kfy4baAJJgK2yvbuFRoZk73WxdNHM4ISVw&s"
  },
  {
    "id": 45,
    "name": "Racket",
    "category": "Sports",
    "price": 1850,
    "sale": 5,
    "description": "This racket is a high-quality sports item perfect for everyday use.",
    "image": "https://cdn.shopify.com/s/files/1/0020/9407/1890/files/2_480x480.jpg?v=1559302854"
  },
  {
    "id": 46,
    "name": "Lightweight Snacks",
    "category": "Groceries",
    "price": 580,
    "sale": 2,
    "description": "This lightweight snacks is a high-quality groceries item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukmfo6fG742uMhlfShbAOJybVh_Nta2O9ww&s"
  },
  {
    "id": 47,
    "name": "Smart Vegetables",
    "category": "Groceries",
    "price": 300,
    "sale": 0,
    "description": "This smart vegetables is a high-quality groceries item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1rsZxFYfJEAmnIuV9kCnmHV6IEvMdKE4AQ&s"
  },
  {
    "id": 48,
    "name": "Shoes",
    "category": "Sports",
    "price": 5000,
    "sale": 5,
    "description": "This elegant shoes is a high-quality sports item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oyu-oae78AUiK_rRDP02vKfKzPsF9B3_6w&s"
  },
  {
    "id": 49,
    "name": "Cream",
    "category": "Beauty",
    "price":1200 ,
    "sale":6,
    "description": "This compact cream is a high-quality beauty item perfect for everyday use.",
    "image": "https://pierrecardin.pk/cdn/shop/files/17_1.jpg?v=1750398920"
  },
  {
    "id": 50,
    "name": "Premium Laptop",
    "category": "Computer",
    "price": 90000,
    "sale": 40,
    "description": "This premium laptop is a high-quality electronics item perfect for everyday use.",
    "image": "https://www.citylit.ac.uk/media/catalog/product/cache/7c1110bc2aba24b121586d9ef95eca3c/u/s/using-apple-mac-os-short-introduction-cmc05_36.jpg"
  },



  {
    "id": 51,
    "name": "Novel",
    "category": "Books",
    "price": 400,
    "sale": 2,
    "description": "This stylish novel is a high-quality books item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWidXCCsCCaAQ9Zz1uQDRsowk_rd42omyYMg&s"
  },
  {
    "id": 52,
    "name": "Basketball",
    "category": "Sports",
    "price": 3000,
    "sale": 6,
    "description": "This stylish basketball is a high-quality sports item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwwO1iDWCPzgWxnGHsifIn0_6eDHa1PIITA&s"
  },
  {
    "id": 53,
    "name": "Wallet",
    "category": "Fashion",
    "price": 4799,
    "sale": 5,
    "description": "This durable wallet is a high-quality accessories item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmDePv42WRN51W1EuGwwFF21YrD9k5uM7FA&s"
  },
  {
    "id": 54,
    "name": "Modern Cosmetics",
    "category": "Beauty",
    "price": 4999,
    "sale": 25,
    "description": "This modern cosmetics is a high-quality beauty item perfect for everyday use.",
    "image": "https://d2ati23fc66y9j.cloudfront.net/category-pages/sub_category-174021874143.jpg"
  },
  {
    "id": 55,
    "name": "Lightweight Sofa",
    "category": "Home",
    "price": 26000,
    "sale": 25,
    "description": "This lightweight sofa is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLugGMBbSELtDJhbHMQpge7JHFlfbRPHJQQ&s"
  },
  {
    "id": 56,
    "name": "Compact Lipstick",
    "category": "Beauty",
    "price": 1599,
    "sale": 45,
    "description": "This compact lipstick is a high-quality beauty item perfect for everyday use.",
    "image": "https://glomesh.pk/cdn/shop/files/cosmic-girl-matte-lipstick-blood-red-46524091433269.jpg?v=1722281054&width=1592"
  },
  {
    "id": 57,
    "name": "Informative books",
    "category": "Books",
    "price": 5000,
    "sale": 25,
    "description": "This stylish reading is a high-quality books item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImj83Ee6n6dzj4lf8ZJCNEXRivuWFMExFeQ&s"
  },
  {
    "id": 58,
    "name": "Toy",
    "category": "Toys",
    "price": 16000,
    "sale": 75,
    "description": "This elegant toy is a high-quality toys item perfect for everyday use.",
    "image": "https://image.cnbcfm.com/api/v1/image/103448648-CNBC_[Fly_to_Buy].JPG?v=1457375039"
  },
  {
    "id": 59,
    "name": "Drinks",
    "category": "Groceries",
    "price": 1819,
    "sale": 10,
    "description": "This portable drinks is a high-quality groceries item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuyDIbdsfh-sKMDvYtYFZnNc35-woxf2O-Q&s"
  },
  {
    "id": 60,
    "name": "Bed",
    "category": "Home",
    "price": 32869,
    "sale": 35,
    "description": "This bed is a high-quality home item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE_NfEA5VbO2f5Xyte0gc6cDtwkFWOaNpVw&s"
  },
  {
    "id": 61,
    "name": "Elegant Heels",
    "category": "Fashion",
    "price": 6000,
    "sale": 15,
    "description": "This elegant heels is a high-quality shoes item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKajJW4RurWfaseNSQ38RQSTTaCpZRgCMvfw&s"
  },
  {
    "id": 62,
    "name": "Remote controls",
    "category": "Toys",
    "price": 5500,
    "sale": 2,
    "description": "This durable cars is a high-quality toys item perfect for everyday use.",
    "image": "https://static.independent.co.uk/2024/12/04/15/Cars.jpg?width=1200"
  },
  {
    "id": 63,
    "name": "LCD",
    "category": "Computer",
    "price": 12578.87,
    "sale": 25,
    "description": "This durable lcd is a high-quality computing item perfect for everyday use.",
    "image": "https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?$pnglarge$&wid=960"
  },
  {
    "id": 64,
    "name": "Bag",
    "category": "Accessories",
    "price": 160,
    "sale": 2,
    "description": "This smart bag is a high-quality accessories item perfect for everyday use.",
    "image": "https://img.freepik.com/free-photo/present-sale-buy-empty-colorful_1203-5648.jpg"
  },
  {
    "id": 65,
    "name": "Vegetables",
    "category": "Groceries",
    "price": 1499,
    "sale": 10,
    "description": "This healthy vegetables is a high-quality groceries item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZFPBmSDxef8pJ6YfLW38UuECZA2jGx8U2g&s"
  },
  {
    "id": 66,
    "name": "Shirt",
    "category": "Fashion",
    "price": 2500,
    "sale": 25,
    "description": "This eco-friendly shirt is a high-quality fashion item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8DYwhY0_LmeeS5JyB45YLG1OweX_1Cukwg&s"
  },
  {
    "id": 67,
    "name": "History",
    "category": "Books",
    "price": 699,
    "sale": 5,
    "description": "This history reading is a high-quality books item perfect for everyday use.",
    "image": "https://oup.com.pk/media/catalog/product/cache/53c967b29465f18f5ea13b0fdb7e4487/9/7/9780190703462.jpg"
  },
  {
    "id": 68,
    "name": "Shuttels",
    "category": "Sports",
    "price": 1200,
    "sale": 25,
    "description": "This premium shuttles is a high-quality sports item perfect for everyday use.",
    "image": "https://static-01.daraz.pk/p/9e83158076bcff3f7c1a3ac5ef194688.jpg"
  },
  {
    "id": 69,
    "name": "Beauty Cream",
    "category": "Beauty",
    "price": 716,
    "sale": 0,
    "description": "This compact cream is a high-quality beauty item perfect for everyday use.",
    "image": "https://sehatmund.com/cdn/shop/files/GluvitSGlutathioneSkinBrighteningCream30g.jpg?v=1754903245&width=950"
  },
  {
    "id": 70,
    "name": "Lightweight Laptop",
    "category": "Computer",
    "price": 57999,
    "sale": 5,
    "description": "This lightweight laptop is a high-quality electronics item perfect for everyday use.",
    "image": "https://www.cnet.com/a/img/resize/097a544355ac2d856e4f6b044be082ee662ccc2b/hub/2025/03/10/2b6173ef-5ac2-4e05-96ec-559034101378/m4-macbook-air-13-01.jpg?auto=webp&fit=crop&height=1200&width=1200"
  },
  {
    "id": 71,
    "name": "Compact Shoes",
    "category": "Fashion",
    "price": 8000,
    "sale": 45,
    "description": "This compact shoes is a high-quality sports item perfect for everyday use.",
    "image": "https://media.gq.com/photos/681252b450c65fe5b2e650ab/master/w_1600%2Cc_limit/sothebys-brightspot.s3.amazonaws.png"
  },
  {
    "id": 72,
    "name": "Mouse",
    "category": "Computer",
    "price": 3000,
    "sale": 30,
    "description": "This modern mouse is a high-quality computer item perfect for everyday use.",
    "image": "https://24hours.pk/cdn/shop/products/cover_-_2020-02-04T170517.506.jpg?v=1581198737"
  },
  {
    "id": 73,
    "name": "Tissue",
    "category": "Home",
    "price": 2000,
    "sale": 25,
    "description": "This compact tissue rolls is a high-quality item perfect for everyday use.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/8e182d2fe89c88a2129c8c471bc3f652.jpg_720x720q80.jpg"
  },
  {
    "id": 74,
    "name": "Elegant Dress",
    "category": "Fashion",
    "price": 10804,
    "sale": 25,
    "description": "This elegant dress is a high-quality fashion item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCdIpBxL12n85l-hEsFhVZb7GYg1a8KjV2w&s"
  },
  {
    "id": 75,
    "name": "Kids Shoes",
    "category": "Fashion",
    "sale": 15,
    "price": 1300,
    "description": "This smart shoes is a high-quality Kids item perfect for everyday use.",
    "image": "https://www.waseeh.com/cdn/shop/collections/74980dccf59ed9de8217c422ea567978.jpg?v=1683189890"
  },
  {
    "id": 76,
    "name": "Hair Brush",
    "category": "Beauty",
    "sale": 25,
    "price": 899,
    "description": "This eco-friendly brush is a high-quality beauty item perfect for everyday use.",
    "image": "https://m.media-amazon.com/images/I/61STHYvtwwL._SL1500_.jpg"
  },
  {
    "id": 77,
    "name": "Oil",
    "category": "Groceries",
    "sale": 3,
    "price": 3000,
    "description": "This lightweight oil is a high-quality cooking item perfect for everyday use.",
    "image": "https://esajee.com/public/uploads/media/CZkgyANGVbLLGhx2NET7ZzYCx3oXd8XALEOqlcl4.webp"
  },
  {
    "id": 78,
    "name": "Kids Dress",
    "category": "Fashion",
    "sale": 45,
    "price": 2300,
    "description": "This kids dress is a high-quality fashion item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Hw9psmsMTBv-ePoIzdgGWa-HwqjarqZflg&s"
  },
  {
    "id": 79,
    "name": "Perfume",
    "category": "Beauty",
    "sale": 5,
    "price": 2009,
    "description": "This stylish perfume is a high-quality beauty item perfect for everyday use.",
    "image": "https://theperfumeclub.pk/cdn/shop/collections/WhatsApp_Image_2025-05-31_at_16.18.50_2.jpg?v=1754909028"
  },
  {
    "id": 80,
    "name": "Heels",
    "category": "Fashion",
    "sale": 25,
    "price": 5368,
    "description": "This premium heels is a high-quality shoes item perfect for everyday use.",
    "image": "https://foreverandalwaysshoes.com/cdn/shop/products/il_fullxfull.5200017416_kxht.jpg?v=1699873473&width=1934"
  },
  {
    "id": 81,
    "name": "Tie",
    "category": "Fashion",
    "sale": 25,
    "price": 1200,
    "description": "This smart Tie is a high-quality Fashion item perfect for everyday use.",
    "image": "https://image.made-in-china.com/2f0j00rlJkWjDFkYbZ/Men-Floral-Neck-Tie-Woven-Classic-3-14-Necktie-Formal-Tie-for-Wedding-Business.webp"
  },
  {
    "id": 82,
    "name": "Rubiks Cube",
    "category": "Toys",
    "sale": 25,
    "price": 700,
    "description": "This compact puzzle is a high-quality toys item perfect for everyday use.",
    "image": "https://shop.spinmaster.com/cdn/shop/products/o3rmamdfu2kartbxpul9_1080x.jpg?v=1694453034"
  },
  {
    "id": 83,
    "name": "I phone",
    "category": "Mobile",
    "sale": 25,
    "price": 15000,
    "description": "This old phones is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7LptjP72-jKZScMqtgz47hXUFwEkd2bl4w&s"
  },
  {
    "id": 84,
    "name": "Ear Buds",
    "category": "Mobile",
    "sale": 25,
    "price": 8703.02,
    "description": "This premium wallet is a high-quality accessories item perfect for everyday use.",
    "image": "https://games4u.pk/cdn/shop/files/tfygv.jpg?v=1726053133"
  },
  {
    "id": 85,
    "name": "Lightweight Perfume",
    "category": "Fashion",
    "sale": 25,
    "price": 900,
    "description": "This lightweight perfume is a high-quality beauty item perfect for everyday use.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/a45d597b67d516b217acc61ea9db0b59.jpg_720x720q80.jpg"
  },
  {
    "id": 86,
    "name": "Smart Sofa",
    "category": "Home",
    "sale": 25,
    "price": 80000,
    "description": "This smart sofa is a high-quality home item perfect for everyday use.",
    "image": "https://thelinenhouse.pk/cdn/shop/files/Multifunctional-Folding-Sofa-Bed-Furniture-Living-Room-Sofa-Bed-with-Storage_1_1024x_1_1024x1024.jpg?v=1727176952"
  },
  {
    "id": 87,
    "name": "Chargers",
    "category": "Mobile",
    "sale": 45,
    "price": 6000,
    "description": "This portable Charger is a high-quality beauty item perfect for everyday use.",
    "image": "https://www.getnow.pk/wp-content/uploads/2024/03/Buy-the-Best-Quality-Mobile-Solar-Charger-Poverbank-in-Pakistan-at-Getnow.pk_.-Most-Affordable-Price-With-Fast-Shipping-in-All-Over-Pakistan-1.webp"
  },
  {
    "id": 88,
    "name": "Iron",
    "category": "Home",
    "sale": 15,
    "price": 13000,
    "description": "This elegant iron is a high-quality accessories item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzu_tJmgqg2X8Qf2rTgBKsKlFJZPBWd3OdQ&s"
  },
  {
    "id": 89,
    "name": "Durable Lamp",
    "category": "Home",
    "sale": 44,
    "price": 13000,
    "description": "This durable lamp is a high-quality home item perfect for everyday use.",
    "image": "https://m.media-amazon.com/images/I/61xxhaeUKIL._AC_SL1500_.jpg"
  },
  {
    "id": 90,
    "name": "Cooler",
    "category": "Computer",
    "sale": 45,
    "price": 4000,
    "description": "This lightweight laptop cooler is a high-quality computer item perfect for everyday use.",
    "image": "https://m.media-amazon.com/images/I/71t9L9oIYhL._AC_SL1500_.jpg"
  },
  {
    "id": 91,
    "name": "T-Shirt",
    "category": "Fashion",
    "sale": 37,
    "price": 3430,
    "description": "This elegant shirt is a high-quality fashion item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DW3TKHy7OFSECh_qEifgT7xyH7Z-0DbJZw&s"
  },
  {
    "id": 92,
    "name": "Portable Boots",
    "category": "Fashion",
    "sale": 15,
    "price": 1999,
    "description": "This portable boots is a high-quality shoes item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K8XhtvZmFP2nyJaC94CL75g3NpfzUJeyZA&s"
  },
  {
    "id": 93,
    "name": "Pencils",
    "category": "Books",
    "sale": 25,
    "price": 400,
    "description": "This elegant Ball pens is a high-quality books item perfect for everyday use.",
    "image": "https://thestationers.pk/cdn/shop/products/dollar-clipper-ball-pen-10-pcsbox-blue-the-stationers-1_1200x.jpg?v=1708444824"
  },
  {
    "id": 94,
    "name": "Stylish Belt",
    "category": "Fashion",
    "sale": 35,
    "price": 1400,
    "description": "This stylish belt is a high-quality accessories item perfect for everyday use.",
    "image": "https://images-cdn.ubuy.ae/6539d79484bb5c2ba521e849-chaoren-leather-reversible-belts-for-men.jpg"
  },
  {
    "id": 95,
    "name": "Jeans",
    "category": "Fashion",
    "sale": 25,
    "price": 3000,
    "description": "This smart jeans is a high-quality fashion item perfect for everyday use.",
    "image": "https://brandcollection.com.pk/cdn/shop/files/final3_1024x1024.jpg?v=1716047685"
  },
  {
    "id": 96,
    "name": "Smart Camera",
    "category": "Computer",
    "sale": 5,
    "price": 4000,
    "description": "This smart security camera is a high-quality electronics item perfect for everyday use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jNni2RldjS9S75hQZtOIIilN-iU15aEb_g&s"
  },
  {
    "id": 97,
    "name": "Fan",
    "category": "Home",
    "sale": 45,
    "price": 12000,
    "description": "This stylish Fan is a high-quality home item perfect for everyday use.",
    "image": "https://www.urbanambiance.com/cdn/shop/products/UHP9020-A2_4d934e7a-b940-4a8f-9bc1-2174d8bac382-727433_250x.progressive.jpg?v=1755137406"
  },
  {
    "id": 98,
    "name": "LED Bulbs",
    "category": "Home",
    "sale": 35,
    "price": 400,
    "description": "This eco-friendly bulbs is a high-quality home item perfect for everyday use.",
    "image": "https://grip.com.pk/wp-content/uploads/2024/09/unnamed-2.webp"
  },
  {
    "id": 99,
    "name": "Watches",
    "category": "Watches",
    "sale": 25,
    "price": 5000,
    "description": "This stylish Watches is a high-quality item perfect for everyday use.",
    "image": "https://voguealaska.pk/cdn/shop/files/Brown-White3.jpg?v=1732539118&width=1024"
  },
  {
    "id": 100,
    "name": "Speakers",
    "category": "Computer",
    "sale": 35,
    "price": 6000,
    "description": "This compact speakers is a high-quality electronics item perfect for everyday use.",
    "image": "https://m.media-amazon.com/images/I/81FzSswwCVL._UF1000,1000_QL80_.jpg"
  }
]

let ads = document.querySelectorAll(".ads")
ads = Array.from(ads)

let j ; 

products.forEach( (product)=>{
  let name = product.name
  let price =  product.price
  let image = product.image
  let sale = product.sale

  j = products.indexOf(product)
  // console.log(name);
  ads[j].innerHTML = `
            <div class="ad-img"   style="background-image: url(${image});" >
              <div class="off">-${sale}%</div>
            </div>
            <h2 class="name">${name}</h2>
            <div class="prize">${price}</div>
            <button class="wish fa-regular fa-heart">
            </button>
            <button class="view fa-solid fa-eye">
            </button>`
})