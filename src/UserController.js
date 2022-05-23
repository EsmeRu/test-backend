const res = require("express/lib/response");
const mysql = require("mysql");

class UserController {
  constructor(props) {
    this.connection = props.connection;
  }

  createUser(data, callback) {
    if (
      data.nombre &&
      data.segundo_nombre &&
      data.apellido_paterno &&
      data.apellido_materno &&
      data.fecha_nacimiento &&
      data.email &&
      data.telefono
    ) {
      this.validateUserNotExists(data.email, () => {
        const insertQuery = `INSERT INTO ${process.env.TABLE} (
            nombre,
            segundo_nombre,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            email,
            telefono
            ) VALUES(?, ?, ?, ?, ?, ?, ?);`;

        const query = mysql.format(insertQuery, [
          data.nombre,
          data.segundo_nombre,
          data.apellido_paterno,
          data.apellido_materno,
          data.fecha_nacimiento,
          data.email,
          data.telefono,
        ]);

        this.connection.query(query, (_, result) => {
          callback(result);
        });
      });
    }
  }

  validateUserNotExists(email, callback) {
    const query = `SELECT * FROM ${process.env.TABLE} WHERE email = "${email}";`;

    this.connection.query(query, (_, result) => {
      if (result.length === 0) {
        callback();
      }
    });
  }
}

module.exports = {
  UserController,
};
