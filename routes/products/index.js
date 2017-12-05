const express = require('express');
const pool = require('../../dbconfig');

const router = express.Router();

router.get('/', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          'SELECT `products`.*, `brands`.`brand_id`, `brands`.`brand_title`, `image_gallery`.`image_gallery_id`, `image_gallery`.`image_gallery_title`, `tags`.`tag_id`, `tags`.`tag_title`, `tags`.`tag_count`, `categories`.`category_id`, `categories`.`category_title`, `gst`.`gst_id`, `gst`.`gst_title` FROM `products` , `brands` , `image_gallery` , `tags` , `categories` , `gst`',
          (err, results, fields) => {
            if (err) throw err;

            res.json(results);
            connection.release();
        });
    });
});

module.exports = router;
