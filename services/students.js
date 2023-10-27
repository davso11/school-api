const createConnection = require("../lib/db");

exports.saveStudent = async function ({ lastName, firstName }) {
  const connection = await createConnection();
  await connection.execute(
    `INSERT INTO student (lastName, firstName) VALUES (?, ?)`,
    [lastName, firstName]
  );
  await connection.end();
};
