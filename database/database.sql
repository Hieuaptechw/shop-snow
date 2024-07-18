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
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE brand (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    brand_id INT,
    store_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
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
CREATE TABLE store (
    store_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO user (username, password, email, phone, address, role)
VALUES
    ('john_doe', 'password123', 'john.doe@example.com', '123456789', '123 Main St, City', 'admin'),
    ('jane_smith', 'pass456', 'jane.smith@example.com', '987654321', '456 Oak Ave, Town', 'user'),
    ('alice_green', 'green123', 'alice.green@example.com', '555555555', '789 Elm Rd, Village', 'user'),
    ('bob_brown', 'brownpass', 'bob.brown@example.com', '777777777', '321 Pine Ln, Hamlet', 'user'),
    ('eve_white', 'evepass', 'eve.white@example.com', '999888777', '654 Birch Dr, County', 'user');
INSERT INTO cart (user_id, total_price)
VALUES
    (1, 150.00),
    (2, 75.50),
    (3, 200.25),
    (4, 50.75),
    (5, 100.00);

INSERT INTO category (name, description)
VALUES
    ('Electronics', 'Products related to electronics and technology'),
    ('Clothing', 'Apparel and fashion items'),
    ('Home Decor', 'Decorative items for home'),
    ('Books', 'Books and reading materials'),
    ('Sports', 'Equipment and gear for sports');
INSERT INTO brand (name, description)
VALUES
    ('Sony', 'Electronic products brand'),
    ('Nike', 'Sportswear and sports equipment brand'),
    ('IKEA', 'Home furniture and decor brand'),
    ('Apple', 'Technology and electronics brand'),
    ('Adidas', 'Sportswear and athletic shoes brand');
INSERT INTO products (name, description, price, category_id, brand_id, store_id)
VALUES
    ('Smartphone X', 'Latest smartphone model', 899.99, 1, 4, 1),
    ('Running Shoes', 'Comfortable running shoes', 129.99, 5, 2, 2),
    ('Book: The Art of Programming', 'Programming guidebook', 39.99, 4, NULL, 3),
    ('LED TV 55"', 'High-definition LED TV', 1499.99, 1, 1, 1),
    ('Home Decor Set', 'Modern home decor set', 299.99, 3, 3, 2);
INSERT INTO products_img (product_id, image_url)
VALUES
    (1, 'https://example.com/images/smartphone.jpg'),
    (2, 'https://example.com/images/running_shoes.jpg'),
    (3, 'https://example.com/images/book.jpg'),
    (4, 'https://example.com/images/led_tv.jpg'),
    (5, 'https://example.com/images/home_decor.jpg');
INSERT INTO products_details (product_id, attribute_name, attribute_value)
VALUES
    (1, 'Color', 'Black'),
    (1, 'Storage', '128GB'),
    (2, 'Size', '10'),
    (3, 'Author', 'John Smith'),
    (4, 'Screen Size', '55"');
INSERT INTO review (product_id, user_id, rating, comment)
VALUES
    (1, 2, 4, 'Great phone, good camera quality'),
    (2, 3, 5, 'Very comfortable and durable shoes'),
    (3, 4, 3, 'Informative book, but a bit technical'),
    (4, 5, 5, 'Excellent TV with vibrant colors'),
    (5, 1, 4, 'Nice set, modern design fits well in my home');
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
INSERT INTO store (name, description, address, phone)
VALUES
    ('ElectroTech', 'Electronics and gadgets store', '123 Main St, City', '1234567890'),
    ('SportsGear', 'Sports equipment and apparel store', '456 Oak Ave, Town', '9876543210'),
    ('HomeDecor Plus', 'Home decor and furniture store', '789 Elm Rd, Village', '5555555555'),
    ('Bookworm Books', 'Bookstore specializing in various genres', '321 Pine Ln, Hamlet', '7777777777'),
    ('FashionHub', 'Clothing and fashion store', '654 Birch Dr, County', '9998887777');
