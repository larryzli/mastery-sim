INSERT INTO my_pokemon (name, url)
VALUES ($1, $2);
SELECT * FROM my_pokemon ORDER BY id;