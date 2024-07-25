CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    role ENUM('user', 'admin') NOT NULL DEFAULT 'user', 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE subcategory (
    subcategory_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE brand (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE store (
    store_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    price_sale DECIMAL(10,2) NOT NULL,
    category_id INT,
    subcategory_id INT,
    brand_id INT,
    quantity INT,
    store_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(subcategory_id),
    FOREIGN KEY (brand_id) REFERENCES brand(brand_id),
    FOREIGN KEY (store_id) REFERENCES store(store_id)
);

CREATE TABLE products_img (
    product_image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE products_details (
    product_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    attribute_name VARCHAR(255) NOT NULL,
    attribute_value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    user_id INT,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    payment_method VARCHAR(255) NOT NULL,
    payment_status VARCHAR(255) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);


-- Insert into user
INSERT INTO user (username, password, email, phone, address, role)
VALUES
    ('john_doe', 'password123', 'john.doe@example.com', '123456789', '123 Main St, City', 'admin'),
    ('jane_smith', 'pass456', 'jane.smith@example.com', '987654321', '456 Oak Ave, Town', 'user'),
    ('alice_green', 'green123', 'alice.green@example.com', '555555555', '789 Elm Rd, Village', 'user'),
    ('bob_brown', 'brownpass', 'bob.brown@example.com', '777777777', '321 Pine Ln, Hamlet', 'user'),
    ('eve_white', 'evepass', 'eve.white@example.com', '999888777', '654 Birch Dr, County', 'user');

-- Insert into cart
INSERT INTO cart (user_id, total_price)
VALUES
    (1, 150.00),
    (2, 75.50),
    (3, 200.25),
    (4, 50.75),
    (5, 100.00);

-- Insert into category
INSERT INTO category (name) VALUES
    ('Consumer Electronics'),
    ('Home Appliances'),
    ('Cooling Devices'),
    ('Audio Equipment'),
    ('Lighting Devices');

-- Insert into subcategory
INSERT INTO subcategory (name, category_id) VALUES
    ('Smartphones', 1),
    ('Televisions', 1),
    ('Laptops', 1),
    ('Refrigerators', 2),
    ('Washing Machines', 2),
    ('Vacuum Cleaners', 2),
    ('Air Conditioners', 3),
    ('Fans', 3),
    ('Speakers', 4),
    ('Headphones', 4),
    ('Wall Lights', 5),
    ('Table Lamps', 5),
INSERT INTO store (name, description, address, phone)
VALUES
    ('ElectroTech', 'Electronics and gadgets store', '123 Main St, City', '1234567890'),
    ('SportsGear', 'Sports equipment and apparel store', '456 Oak Ave, Town', '9876543210'),
    ('HomeDecor Plus', 'Home decor and furniture store', '789 Elm Rd, Village', '5555555555'),
    ('Bookworm Books', 'Bookstore specializing in various genres', '321 Pine Ln, Hamlet', '7777777777'),
    ('FashionHub', 'Clothing and fashion store', '654 Birch Dr, County', '9998887777');
-- Insert into brand
INSERT INTO brand (name, description) VALUES
    ('Samsung', 'Offers products such as smartphones, TVs, washing machines, and home appliances.'),
    ('Apple', 'Known for its smartphones, tablets, laptops, and other innovative technology products.'),
    ('Sony', 'Recognized for products such as TVs, cameras, and audio equipment.'),
    ('LG', 'Known for its TVs, washing machines, refrigerators, and other home appliances.'),
    ('Panasonic', 'Provides products such as refrigerators, washing machines, and consumer electronics.'),
    ('Sharp', 'Offers TVs, air conditioners, and other home appliances.'),
    ('Bosch', 'Famous for home appliances such as washing machines, microwaves, and dishwashers.'),
    ('Toshiba', 'Provides products such as refrigerators, washing machines, and other electronics.'),
    ('Aqua', 'A brand under Haier, offering refrigerators, washing machines, and other home appliances.'),
    ('Xiaomi', 'Provides smartphones, smart home devices, and other technology products.'),
    ('Huawei', 'Known for smartphones and other technology devices.'),
    ('Dell', 'Offers laptops, desktops, and accessories.'),
    ('HP', 'Famous for computers, printers, and office equipment.'),
    ('Lenovo', 'Provides laptops, desktops, and other electronic devices.'),
    ('Asus', 'Offers laptops, motherboards, and accessories.'),
    ('MSI', 'Known for gaming laptops and computer components.')
    ('Sunhouse', 'Known for affordable and practical home appliances.'),
    ('Kangaroo', 'Offers a wide range of home appliances with innovative features.');

INSERT INTO products (name, description, price, price_sale, category_id, subcategory_id, brand_id, quantity, store_id)
VALUES
    ('iPhone 13', 'Latest model with improved battery life and camera.', 899.99, 849.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Apple'), 150, 1),
    ('iPhone 13 Pro Max', 'Max variant with the largest display and top features.', 1299.99, 1249.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Apple'), 60, 1),
    ('iPhone 14', 'Latest iPhone with improved camera and performance.', 899.99, 849.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Apple'), 150, 1),
    ('iPhone 14 Pro Max', 'Large screen iPhone with top-tier performance and camera capabilities.', 1199.99, 1149.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Apple'), 60, 1),
    ('iPhone 15', 'The latest iPhone model with advanced features.', 999.99, 949.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Apple'), 100, 1),
    ('Samsung Galaxy S23', 'Flagship smartphone with high-end specifications.', 899.99, 849.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 80, 1),
    ('Samsung Galaxy A54', 'Mid-range smartphone with a good balance of performance and features.', 499.99, 449.99, 1, 1, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 100, 1),

    ('Samsung QLED TV 65"', 'High-definition QLED TV with vibrant colors and deep blacks.', 1299.99, 1199.99, 1, 2, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 25, 1),
    ('Samsung Frame TV 50"', 'Stylish TV that doubles as a piece of art.', 999.99, 949.99, 1, 2, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 20, 1),
    ('LG OLED TV 55"', 'OLED TV with exceptional contrast and color accuracy.', 1499.99, 1399.99, 1, 2, (SELECT brand_id FROM brand WHERE name = 'LG'), 10, 1),
    ('LG Nanocell TV 65"', 'NanoCell technology for enhanced color and clarity.', 1399.99, 1299.99, 1, 2, (SELECT brand_id FROM brand WHERE name = 'LG'), 20, 1),

    ('Asus ZenBook 14', 'Ultrabook with a sleek design and strong performance.', 1199.99, 1099.99, 1, 3, (SELECT brand_id FROM brand WHERE name = 'Asus'), 45, 1),
    ('Asus TUF Gaming A15', 'Gaming laptop with durable build and high performance.', 1299.99, 1199.99, 1, 3, (SELECT brand_id FROM brand WHERE name = 'Asus'), 50, 1),
    ('Lenovo ThinkPad X1 Carbon', 'Business laptop known for its durability and performance.', 1499.99, 1399.99, 1, 3, (SELECT brand_id FROM brand WHERE name = 'Lenovo'), 30, 1),
    ('Lenovo Yoga 9i', 'Convertible laptop with a high-resolution display and versatile functionality.', 1299.99, 1199.99, 1, 3, (SELECT brand_id FROM brand WHERE name = 'Lenovo'), 40, 1),

    ('Panasonic NR-BV280QSVN', 'Panasonic NR-BV280QSVN refrigerator with Inverter technology for energy saving.', 899.99, 849.99, 2, 4, (SELECT brand_id FROM brand WHERE name = 'Panasonic'), 50, 1),
    ('Panasonic NR-BA228PKV1', 'Panasonic NR-BA228PKV1 refrigerator with modern and convenient design.', 799.99, 749.99, 2, 4, (SELECT brand_id FROM brand WHERE name = 'Panasonic'), 60, 1),
    ('Toshiba GR-RS682WE-PMV(06)-XK', 'Toshiba GR-RS682WE-PMV(06)-XK refrigerator with optimal cooling technology and energy saving.', 1099.99, 1049.99, 2, 4, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 30, 1),
    ('Toshiba GR-AG66VA(XK)', 'Toshiba GR-AG66VA(XK) refrigerator with luxurious design and large capacity.', 999.99, 949.99, 2, 4, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 35, 1),

    ('Toshiba AW-B1000GV', 'Toshiba AW-B1000GV offers a spacious drum and multiple wash programs for effective cleaning.', 550.00, 500.00, 2, 5, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 25, 1),
    ('Toshiba TW-BH85S2V', 'Toshiba TW-BH85S2V provides high washing efficiency with smart technology and various settings.', 600.00, 550.00, 2, 5, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 20, 1),
    ('Samsung WW90J54E0BW/SV', 'Samsung WW90J54E0BW/SV features a large capacity and advanced cleaning technology for thorough washing.', 700.00, 650.00, 2, 5, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 15, 1),
    ('Samsung WA10J5710SG/SV', 'Samsung WA10J5710SG/SV is known for its robust build and powerful washing performance.', 650.00, 600.00, 2, 5, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 18, 1),

    ('Panasonic MC-CL563', 'Compact design, easy to use vacuum cleaner.', 179.99, 169.99, 2, 6, (SELECT brand_id FROM brand WHERE name = 'Panasonic'), 60, 1),
    ('Panasonic MC-CL305', 'Vacuum cleaner with effective dust filtering feature.', 159.99, 149.99, 2, 6, (SELECT brand_id FROM brand WHERE name = 'Panasonic'), 55, 1),
    ('Toshiba VC-PG514', 'Vacuum cleaner with advanced dust filtering technology.', 219.99, 209.99, 2, 6, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 40, 1),
    ('Toshiba VC-WF500', 'Equipped with HEPA filter and adjustable suction power.', 229.99, 219.99, 2, 6, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 45, 1),

    ('Toshiba RAS-13N3KV', 'Large capacity air conditioner for quick cooling.', 589.99, 569.99, 3, 7, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 20, 1),
    ('Toshiba RAS-09BKCV', 'Air conditioner with sleek design and high performance.', 439.99, 419.99, 3, 7, (SELECT brand_id FROM brand WHERE name = 'Toshiba'), 45, 1),
    ('LG LS-H09VNA', 'Air conditioner with Dual Inverter technology for quiet operation.', 469.99, 449.99, 3, 7, (SELECT brand_id FROM brand WHERE name = 'LG'), 35, 1),
    ('LG LS-H12VNA', 'Large capacity air conditioner for efficient cooling in larger rooms.', 569.99, 549.99, 3, 7, (SELECT brand_id FROM brand WHERE name = 'LG'), 30, 1),

    ('Samsung AX50R9080S', 'Air cooler with advanced cooling technology and modern design.', 149.99, 139.99, 3, 8, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 15, 1),
    ('Samsung VF-R21', 'Stand fan with wide cooling range and adjustable speed.', 79.99, 74.99, 3, 8, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 30, 1),
    ('LG WF-181', 'Stand fan with powerful motor and adjustable airflow.', 74.99, 69.99, 3, 8, (SELECT brand_id FROM brand WHERE name = 'LG'), 45, 1),
    ('LG WF-232', 'Wall fan with high power and efficient cooling.', 94.99, 89.99, 3, 8, (SELECT brand_id FROM brand WHERE name = 'LG'), 20, 1),

    ('LG XBOOM SK10Y', 'Soundbar with Dolby Atmos technology and high-quality audio.', 699.99, 669.99, 4, 9, (SELECT brand_id FROM brand WHERE name = 'LG'), 20, 1),
    ('LG XBOOM RL4', 'Bluetooth speaker with large power and dynamic sound.', 129.99, 119.99, 4, 9, (SELECT brand_id FROM brand WHERE name = 'LG'), 40, 1),
    ('Samsung HW-Q950A', 'Soundbar with Dolby Atmos technology and 11.1.4 channel surround sound.', 1399.99, 1349.99, 4, 9, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 10, 1),
    ('Samsung Sound Tower MX-T70', 'Bluetooth speaker with high power and LED light effects.', 299.99, 279.99, 4, 9, (SELECT brand_id FROM brand WHERE name = 'Samsung'), 30, 1),

    ('Apple AirPods Pro', 'Wireless in-ear headphones with noise cancellation and Siri integration.', 249.99, 229.99, 4, 10, (SELECT brand_id FROM brand WHERE name = 'Apple'), 30, 1),
    ('Apple AirPods Max', 'Over-ear headphones with high-quality sound and active noise cancellation.', 549.99, 529.99, 4, 10, (SELECT brand_id FROM brand WHERE name = 'Apple'), 10, 1),
    ('Sony WF-1000XM4', 'Wireless in-ear headphones with active noise cancellation and excellent sound quality.', 279.99, 259.99, 4, 10, (SELECT brand_id FROM brand WHERE name = 'Sony'), 30, 1),
    ('Sony WH-H910N', 'Over-ear headphones with noise cancellation and clear sound.', 199.99, 179.99, 4, 10, (SELECT brand_id FROM brand WHERE name = 'Sony'), 25, 1),

    ('Sunhouse Modern LED Wall Light', 'Modern LED wall light with elegant design and effective illumination.', 79.99, 69.99, 5, 11, (SELECT brand_id FROM brand WHERE name = 'Sunhouse'), 25, 1),
    ('Sunhouse Classic Wall Light', 'Classic LED wall light with warm illumination and energy efficiency.', 89.99, 79.99, 5, 11, (SELECT brand_id FROM brand WHERE name = 'Sunhouse'), 20, 1),
    ('Kangaroo Elegant Wall Light', 'Kangaroo wall light with a sophisticated design and soft illumination.', 89.99, 79.99, 5, 11, (SELECT brand_id FROM brand WHERE name = 'Kangaroo'), 15, 1),
    ('Kangaroo LED Wall Lamp', 'Kangaroo LED wall lamp with powerful illumination and high performance.', 99.99, 89.99, 5, 11, (SELECT brand_id FROM brand WHERE name = 'Kangaroo'), 18, 1),

    ('Kangaroo Table Lamp', 'Elegant table lamp with energy-saving LED light and stylish finish.', 59.99, 54.99, 5, 12, (SELECT brand_id FROM brand WHERE name = 'Kangaroo'), 15, 1),
    ('Xiaomi Table Lamp', 'Smart table lamp with adjustable color temperature and remote control.', 79.99, 74.99, 5, 12, (SELECT brand_id FROM brand WHERE name = 'Xiaomi'), 18, 1),
    ('Panasonic Table Lamp', 'High-quality table lamp with classic design and long-lasting LED.', 89.99, 84.99, 5, 12, (SELECT brand_id FROM brand WHERE name = 'Panasonic'), 10, 1);

   INSERT INTO products_img (product_id, image_url)
VALUES
    (1, 'https://api.hieuaptech.com/image/product/product-1.jpg'),
    (2, 'https://api.hieuaptech.com/image/product/product-1.jpg'),
    (3, 'https://api.hieuaptech.com/image/product/product-1.jpg'),
    (4, 'https://api.hieuaptech.com/image/product/product-1.jpg'),
    (5, 'https://api.hieuaptech.com/image/product/product-1.jpg');
INSERT INTO products_details (product_id, attribute_name, attribute_value)
VALUES
    (1, 'Color', 'Black'),
    (1, 'Storage', '128GB'),
    (2, 'Size', '10'),
    (3, 'Author','John Smith'),
    (4, 'Screen Size', '55"');
INSERT INTO review (product_id, user_id, rating, C)
VALUES
    (1, 2, 4, 'Great phone, good camera quality'),
    (2, 3, 5, 'Very comfortable and durable shoes'),
    (3, 4, 3, 'Informative book, but a bit technical'),
    (4, 5, 5, 'Excellent TV with vibrant colors'),
    (5, 1, 4, 'Nice set, modern design fits well in my home');
   (1, 2, 2, 'Great phone, good camera quality'),
    (2, 3, 2, 'Very comfortable and durable shoes'),
    (3, 4, 5, 'Informative book, but a bit technical'),
    (4, 5, 1, 'Excellent TV with vibrant colors'),
    (5, 1, 1, 'Nice set, modern design fits well in my home');
INSERT INTO orders (user_id, total_price, status)
VALUES
    (1, 350.00, 'Pending'),
    (2, 275.50, 'Delivered'),
    (3, 520.25, 'Processing'),
    (4, 150.75, 'Cancelled'),
    (5, 300.00, 'Shipped');
INSERT INTO payment (order_id, payment_method, payment_status)
VALUES
    (1, 'Credit Card', 'Paid'),
    (2, 'PayPal', 'Paid'),
    (3, 'Cash on Delivery', 'Pending'),
    (4, 'Credit Card', 'Cancelled'),
    (5, 'Bank Transfer', 'Paid');

