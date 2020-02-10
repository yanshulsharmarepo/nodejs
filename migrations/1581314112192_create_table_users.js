module.exports = {
    "up": "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, api_token VARCHAR(70) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL, PRIMARY KEY (id) )",
    "down": "DROP TABLE users"
};