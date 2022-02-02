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

