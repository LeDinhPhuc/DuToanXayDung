const express = require('express');

const app = express();
// var mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}/public`));

app.use(require('./routes/truonghoc'));
app.use(require('./routes/thanhvien'));
// app.use(require('./routes/quyen'));
app.use(require('./routes/phanquyen'));
app.use(require('./routes/khoahoc'));
app.use(require('./routes/monhoc'));
app.use(require('./routes/chuongtrinhhoc'));
app.use(require('./routes/vnito'));

app.listen(5000);
console.log('Server running on port 5000');
