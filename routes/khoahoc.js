const express = require('express');

const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'iscdb',
});

connection.connect();
router.use(bodyParser.json());

// lay danh sach khoa hoc
router.get('/menu_Khoahoc', function (req, res) {
  connection.query('select * from intake', function (err, rows, fields) {
    if (err) {
      connection.end();
      throw err;
    } else {
      res.json(rows);
    }
  });
});

// xoa truong hoc
router.delete('/menu_Khoahoc/:id', function (req, res) {
  const { id } = req.params;
  const sql = `delete from intake where int_id = '${id}'`;

  connection.query(sql, function (err, rows, fields) {
    if (err) {
      connection.end();
      throw err;
    } else {
      res.json(rows);
    }
  });
});

// them khoa  hoc
router.post('/menu_Khoahoc', function (req, res) {
  const sql = `insert into intake(int_code,int_name,int_description,startdate,enddate,status) values ("${
    req.body.int_code
  }","${req.body.int_name}","${req.body.int_description}","${dateFormat(
    req.body.startdate,
    'yyyy/m/dd',
  )}","${dateFormat(req.body.enddate, 'yyyy/m/dd')}",1)`;

  connection.query(sql, function (err, rows, fields) {
    if (err) {
      connection.end();
      throw err;
    } else {
      res.json(rows);
    }
  });
});

// sua khoa hoc
router.put('/menu_Khoahoc/:id', function (req, res) {
  const { id } = req.params;
  const sql = `update intake set int_code='${req.body.int_code}', int_name='${
    req.body.int_name
  }', int_description='${req.body.int_description}', startdate='${dateFormat(
    req.body.startdate,
    'yyyy/m/dd',
  )}',enddate='${dateFormat(req.body.enddate, 'yyyy/m/dd')}', status='${
    req.body.status
  }' where int_id = '${id}'`;

  connection.query(sql, function (err, rows, fields) {
    if (err) {
      connection.end();
      throw err;
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
