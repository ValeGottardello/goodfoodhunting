CREATE DATABASE goodfoodhunting;
-- VARCHAR(200) --LIMIT CHARACTERS
CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    title TEXT,
    image_url TEXT,  
    details TEXT,
    user_id INTEGER
); 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
); 


    -- table name | column name | data type
ALTER TABLE dishes ADD details TEXT;

-- UPDATE dishes SET details = 'colorful vanilla cake' WHERE title = 'cake'; 
-- UPDATE dishes SET details = 'colorful vanilla pudding' WHERE title = 'pudding'; 


-- INSERT INTO dishes (title, image_url, details) VALUES ('cake', 'https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Feature-1a.jpg', 'another cake' );

-- INSERT INTO users (email) VALUES ('dt@ga.co');
-- INSERT INTO users (email) VALUES ('dt@generalassemb.ly');

--singlequote to skip a sing quote ex dt's dt''s

--to connect directly psql nameofdatabase


INSERT INTO user (email, id) VALUE ('dt@gmail.com', 'password')


ALTER TABLE dishes ADD COLUMN user_id INTEGER;