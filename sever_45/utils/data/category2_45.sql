CREATE TABLE category2_45 (
    cid int NOT NULL PRIMARY KEY,
    cname varchar(255),
    size varchar(255),
    image_url text,
    remote_image_url text,
    link_url text
);


INSERT INTO category2_45 (cid, cname, size, image_url, remote_image_url, link_url) 
VALUES 
(1, 'hats', null, '/images/midterm/homepage/hats.png', 'https://i.ibb.co/cvpntL1/hats.png', '/demo/shop_45/node/hats'), 
(2, 'jackets', null, 'https://i.ibb.co/px2tCc3/jackets.png', '/images/midterm/homepage/jackets.png', '/demo/shop_45/node/jackets'), 
(3, 'sneakers', null, 'https://i.ibb.co/0jqHpnp/sneakers.png', '/images/midterm/homepage/sneakers.png', '/demo/shop_45/node/sneakers'), 
(4, 'womens', 'large', 'https://i.ibb.co/GCCdy8t/womens.png', '/images/midterm/homepage/womens.png', '/demo/shop_45/node/womens'), 
(5, 'mens', 'large', 'https://i.ibb.co/R70vBrQ/men.png', '/images/midterm/homepage/mens.png', '/demo/shop_45/node/mens');
