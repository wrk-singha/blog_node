const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const title = req.query.title || 'Commodity Insights Cotton | AgriBazaar';
    const image = req.query.image || 'https://blog.agribazaar.com/wp-content/uploads/2021/03/cotton.jpg';

    const html = `
    <!DOCTYPE html>
    <html lang="en-US" itemscope itemtype="http://schema.org/Blog">
    <head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="${title}" />
        <meta property="og:image" content="${image}" />
        <meta property="og:image:secure_url" content="${image}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
    </head>
    <body></body>
    </html>
    `;

    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});