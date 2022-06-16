const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Mango9797",
  database: "users",
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM userinfo ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM userinfo WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { username, userpassword } = req.body;

  pool.query(
    "INSERT INTO userinfo (username, userpassword) VALUES ($1, $2) RETURNING *",
    [username, userpassword],
    (error, results) => {
      if (error) {
        res.send({ error: error });
      }

      res.status(201).send("User succesfully added!");
    }
  );
};

const getLogin = (req, res) => {
  const { username, userpassword } = req.body;

  pool.query(
    "SELECT * FROM userinfo WHERE username = $1 AND userpassword = $2",
    [username, userpassword],
    (error, results) => {
      if (error) {
        res.send({ error: error });
      }

      if (results) {
        res.send(`Found You!`);
      } else {
        res.status(200).send("Wrong username / password combination ");
      }
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getLogin,
};
