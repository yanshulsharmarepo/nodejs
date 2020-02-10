module.exports = {
    "up": "id INT(11) NOT NULL AUTO_INCREMENT,\n" +
    "  name VARCHAR(30) NOT NULL,\n" +
    "  email VARCHAR(30) NOT NULL,\n" +
    "  api_token VARCHAR(70) NOT NULL,\n" +
    "  created_at DATE NOT NULL,\n" +
    "  updated_at DATE NOT NULL,\n" +
    "  CONSTRAINT contacts_pk PRIMARY KEY (id) )",
    "down": "DROP TABLE users"
};