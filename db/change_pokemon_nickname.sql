UPDATE my_pokemon
SET nickname = $2
WHERE id = $1;
SELECT * FROM my_pokemon;