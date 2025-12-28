CREATE TABLE user2_45 (
    uid int NOT NULL PRIMARY KEY,
    uname varchar(255),
    email varchar(255),
    password varchar(255)
);

INSERT INTO user2_45 (uid, uname, email, password)
VALUES 
(1, 'user1', 'user1@example.com', 'password123'),
(2, 'user2', 'user2@example.com', 'password456'),
(3, 'user3', 'user3@example.com', 'password789'),
(4, 'user4', 'user4@example.com', 'passwordabc'),
(5, '周淵凱', '213410045@o365.tku.edu.tw', 'password045');

SELECT * FROM user2_45;