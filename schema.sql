DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS related CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;
DROP TABLE IF EXISTS cart CASCADE;


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
  current_product_id INT REFERENCES products(id),
  related_product_id INT
);

CREATE TABLE features (
  id INT PRIMARY KEY,
  product_id INT REFERENCES products(id),
  feature VARCHAR(30),
  value VARCHAR(40)
);

CREATE TABLE cart (
  id INT PRIMARY KEY,
  user_session INT,
  product_id INT REFERENCES products(id),
  active INT
);

CREATE TABLE styles (
  id INT PRIMARY KEY,
  product_id INT REFERENCES products(id),
  name VARCHAR(50),
  sale_price VARCHAR(10),
  original_price TEXT,
  default_style BOOLEAN
);

CREATE TABLE photos (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  url TEXT,
  thumnail_url TEXT
);

CREATE TABLE skus (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  size VARCHAR(10),
  quantity INT
);


CREATE INDEX related_idx ON related (current_product_id);

CREATE INDEX features_idx ON features (product_id);

CREATE INDEX cart_idx ON cart (product_id);

CREATE INDEX styles_idx ON styles (product_id);

CREATE INDEX photos_idx ON photos (style_id);

CREATE INDEX skus_idx ON skus (style_id);


COPY products FROM '/Users/bobert/Documents/SDC/product.csv' DELIMITER ',' HEADER csv;

COPY related FROM '/Users/bobert/Documents/SDC/related.csv' DELIMITER ',' HEADER csv;

COPY features FROM '/Users/bobert/Documents/SDC/features.csv' DELIMITER ',' HEADER csv;

COPY cart FROM '/Users/bobert/Documents/SDC/cart.csv' DELIMITER ',' HEADER csv;

COPY styles FROM '/Users/bobert/Documents/SDC/styles.csv' DELIMITER ',' HEADER csv;

COPY photos FROM '/Users/bobert/Documents/SDC/photos.csv' DELIMITER ',' HEADER csv;

COPY skus FROM '/Users/bobert/Documents/SDC/skus.csv' DELIMITER ',' HEADER csv;