DROP DATABASE IF EXISTS username;
CREATE DATABASE username;

\c userauth;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score VARCHAR
);

 INSERT INTO users (name, score)
   VALUES ('Tyler', '4');
