CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price VARCHAR(10)
);

CREATE TABLE related (
  id INT PRIMARY KEY,
  current_product_id INT,
  related_product_id INT
);

CREATE TABLE features (
  id INT PRIMARY KEY,
  product_id INT,
  feature VARCHAR(30),
  value VARCHAR(40)
);

CREATE TABLE styles (
  id INT PRIMARY KEY,
  product_id INT,
  name VARCHAR(50),
  sale_price VARCHAR(10),
  original_price INT,
  default_style BOOLEAN
);

CREATE TABLE photos (
  id INT PRIMARY KEY,
  style_id INT,
  url TEXT,
  thumnail_url TEXT
);

CREATE TABLE skus (
  id INT PRIMARY KEY,
  style_id INT,
  size VARCHAR(10),
  quantity INT
);

CREATE TABLE cart (
  id INT PRIMARY KEY,
  user_session INT,
  product_id INT,
  active INT
);

COPY products FROM '/Users/bobert/Documents/SDC/product.csv' DELIMITER ',' HEADER csv;

COPY related FROM '/Users/bobert/Documents/SDC/related.csv' DELIMITER ',' HEADER csv;

COPY features FROM '/Users/bobert/Documents/SDC/features.csv' DELIMITER ',' HEADER csv;

COPY styles FROM '/Users/bobert/Documents/SDC/styles.csv' DELIMITER ',' HEADER csv;

COPY photos FROM '/Users/bobert/Documents/SDC/photos.csv' DELIMITER ',' HEADER csv;

COPY skus FROM '/Users/bobert/Documents/SDC/skus.csv' DELIMITER ',' HEADER csv;

COPY cart FROM '/Users/bobert/Documents/SDC/cart.csv' DELIMITER ',' HEADER csv;