CREATE TABLE guestbook (
	id SERIAL PRIMARY KEY, 
	name VARCHAR(255) DEFAULT 'Guest', 
	message VARCHAR(2000) NOT NULL
)