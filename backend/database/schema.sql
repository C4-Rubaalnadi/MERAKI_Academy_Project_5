DROP DATABASE MERAKI_Academy_Project_5;
CREATE DATABASE MERAKI_Academy_Project_5;
USE MERAKI_Academy_Project_5;



CREATE TABLE roles (
id INT AUTO_INCREMENT NOT NULL,
role VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);



CREATE TABLE permission (
id INT AUTO_INCREMENT NOT NULL,
permission VARCHAR(255) UNIQUE NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE role_permission (
id INT AUTO_INCREMENT NOT NULL,
role_id INT,
permission_id INT,
-- both of the primary keys are set as foreign keys
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (permission_id) REFERENCES permission(id),
PRIMARY KEY (id)
);


CREATE TABLE users(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(255),
lastName VARCHAR(255),
country VARCHAR(255),
email VARCHAR(255) UNIQUE,
password VARCHAR(255),
role_id INT,
image VARCHAR(255),
FOREIGN KEY (role_id) REFERENCES roles(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);


CREATE TABLE products(
id INT AUTO_INCREMENT NOT NULL,
image VARCHAR(255) ,
nameProduct VARCHAR(255),
description VARCHAR(255),
price INT,
type VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE cart(
id INT AUTO_INCREMENT NOT NULL,
quantity INT,
product_id INT,
user_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE favorite_list(
id INT AUTO_INCREMENT NOT NULL,
product_id INT,
user_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);
-- role //
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/ad/76/03/ad7603e5bcd999ce4169c2f93525f2f4.jpg', 'shepase lays', 'lays wavy flavor cheese', 0.5 ,'snack');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES (' https://i.pinimg.com/564x/3a/83/5d/3a835d8ef7008cf7c758d6c778dc7897.jpg', 'shepase lays', 'lays flavor BBQ', 0.7 ,'snack');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES (' https://i.pinimg.com/564x/18/9b/9d/189b9d2adc3e1d8d8647aaa2b97da71c.jpg', 'shepase lays forno', 'lays forno flavor chesse', 0.6 ,'snack');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/ca/60/16/ca60168283d99b68870ee8f8f7499ec6.jpg', 'nestle cookies', 'milk cohoclate and biscuits', 0.8 ,'snack');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/d3/80/39/d38039505f2eeb71d720a8b33096b890.jpg', 'kitkat', 'kitkat several flavors', 2.00 ,'snack');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/46/47/2f/46472fcb2b8069cde2cbcf941c8d556b.jpg', 'burger meat', '500g meat with no spices ', 20 ,'meat');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/c8/b9/ba/c8b9baa504910c1c89464d43e7db8bf3.jpg', 'feathered meat', 'free range', 25 ,'meat');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/4e/45/4b/4e454b4e2407f8da2ee2c75189347905.jpg', 'meat sausage', '150g halal sausage', 15 ,'meat');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/f8/32/cc/f832ccb1d3d25791b98ca16d0fa045fd.jpg', 'meat', 'caw meat', 45 ,'meat');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/2e/a8/9f/2ea89f18bc885fc634b866fd5f271d6a.jpg', 'caw meat ', 'meat without a bone', 33 ,'meat');
-- 
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/bb/cf/85/bbcf85a764e39bd967fa0a1dea0ef173.jpg', 'meat ', 'meat without a bone', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/e2/73/8a/e2738aae13717045459b17c3d08dfcda.jpg', 'slamon', 'slamon', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/47/f8/e5/47f8e5c091ead8226ea0eb239c3e626b.jpg', 'cawo meat ', 'meat', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/4f/8b/33/4f8b3348486d5e6fc570cfbf8eda44e0.jpg', 'caw meat ', 'meat ', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/51/d6/3a/51d63adc923c561d8d3e0026612b2ca5.jpg', 'chicken', 'chicken', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/ed/8a/dc/ed8adc2f74d0e86ba9f91e1a5db117b4.jpg', 'meat', 'meat', 33 ,'meat');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/e8/6f/36/e86f367bf4a531a89654e13245ea4a95.jpg', 'meat', 'meat', 33 ,'meat');
-- 
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/41/2c/70/412c70fe214d638d56daf8f0a6911c1b.jpg', 'pasta rental', '500g  pasta  ', 1.5 ,'pasta');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/fe/91/7a/fe917a29fbd73ea08a34e1dc88f0b82f.jpg', 'pasta rental', '200g pasta fuchini  ', 3.5 ,'pasta');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/08/14/a9/0814a9fd6a0349a18605568a4d05bcb1.jpg', 'pasta piraque', 'pasta ', 3.00 ,'pasta');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/6d/de/2b/6dde2bd1b0ea01062bdd94643734d869.jpg', 'pasta panzani', '500g pasta ', 2.80 ,'pasta');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/eb/8d/1f/eb8d1f9079308991e720354f74088d89.jpg', 'pasta panzani', '1kg pasta ', 2.00 ,'pasta');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/1d/64/2a/1d642a687114798a7b43f80bf641ff38.jpg', 'strawberry millk', '170g nestle ,milk contains vetamena A , D  ', 2.90 ,'millk_egg');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/4b/b7/e5/4bb7e53a8c7cf399f4751e021a987e74.jpg', 'chocolate milk', '260m nestle ,100% natural', 2.50 ,'millk_egg');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/f4/32/30/f432301dbf3ca54a51070e4697a333db.jpg', 'cereal ', 'nesquik , chocolate flavore', 3.50 ,'millk_egg');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/10/60/64/1060647a5495b10e75e905dcf9e8e3e5.jpg', 'egg', 'fresh egg', 4.00 ,'millk_egg');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/20/b9/f3/20b9f3389973cda90fcb63ecd3568511.jpg', 'carrots', '3kg sweet carrots ', 4.00 ,'vegatables_frutes');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/97/ad/f1/97adf1a0274c510d4157e2359256eb74.jpg', 'mashroom', '250g mashrooms, fresh ', 3.00 ,'vegatables_frutes');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/f8/45/80/f84580b0f0c9ec857904966590dbb198.jpg', 'pineapple', 'fresh and natural pineapple ', 2.50 ,'vegatables_frutes');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/98/f1/b8/98f1b87e9e64d51e09b67928500d9c8f.jpg', 'pear', '6 pieces ', 3.00 ,'vegatables_frutes');

INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/62/8f/11/628f11663de658a15ce253ce953c7ddb.jpg', 'peach', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
-- 
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/c0/dd/11/c0dd11bb5f8a91289f3650b9ec6407dc.jpg', 'several vegatables', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/8a/e0/4c/8ae04c1d55d1a7483864eabcbc35cd6a.jpg', 'stubary', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/6b/ea/3f/6bea3fd7e2e94284ab805371e8fbac1c.jpg', 'corn', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/31/c2/dc/31c2dc2e790cb0e84dfad3cac46fb972.jpg', 'speach', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/11/9a/05/119a05c56f8d7437794463c6fbeebee8.jpg', 'blue bary', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/d0/ed/f2/d0edf2e9b86798632ee3eb90002cac9e.jpg', 'rase bary', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');
INSERT INTO products (image, nameProduct ,description, price ,type) VALUES ('https://i.pinimg.com/564x/5b/0d/4e/5b0d4e542f257fafaff5274738009295.jpg', 'توت اسود', '1kg , hand cut peach ', 10.00 ,'vegatables_frutes');