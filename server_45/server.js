import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_45', async (req, res, next) => {
    const results = await db.query(`select * from blog_45`);
// console.log('results', JSON.stringify(results.rows));
res.json(results.rows);
})

app.use('/api/shop_45/cart/:uid', async (req, res, next) => {
console.log('uid', req.params.uid)
const results = await db.query(
    `select C.user_id, U.uname as user_name, C.product_id, S.pname as product_name, C.quantity, S.price , S.img_url 
    from cart2_45 as C, user2_45 as U, shop2_45 as S 
    where U.uid = $1 and C.user_id = U.uid and C.product_id = S.pid`,
[req.params.uid]
);
// console.log('results', JSON.stringify(results.rows));
res.json(results.rows);
});

app.use('/api/shop_45/:category', async (req, res, next) => {
console.log('category', req.params.category);
const results = await db.query(
    `select * from category2_45, shop2_45 where cname = $1 and cid = cat_id`,
[req.params.category]
);
// console.log('results', JSON.stringify(results.rows));
res.json(results.rows);
})

app.use('/', (req, res, next) => {
        res.send('周淵凱,213410045');
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
