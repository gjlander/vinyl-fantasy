const { db } = require('@vercel/postgres');
const contentfulUserData = require('./contentfulUserData.json');
const contentfulAlbumsData = require('./contentfulAlbumsData.json');
// pages/api/hello_world.js
// const postgres = require('postgres');

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// const conn = postgres({
//     host: PGHOST,
//     database: PGDATABASE,
//     username: PGUSER,
//     password: PGPASSWORD,
//     port: 5432,
//     ssl: 'require',
// });

// function selectAll() {
//   return client.sql("SELECT * FROM hello_world");
// }

// console.log(contentfulAlbumsData[0]);
const seedAlbums = async (client) => {
    try {
        // Create the "albums" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        artist VARCHAR(255),
        year SMALLINT,
        img_url VARCHAR(510),
        format VARCHAR(255),
        price NUMERIC(5, 2),
        media VARCHAR(255),
        sleeve VARCHAR(255),
        spotify_url VARCHAR(255),
        comment  VARCHAR(10000),
        genre TEXT[],
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP,
        in_stock BOOLEAN DEFAULT true
      );
    `;

        console.log(`Created "albums" table`);

        // Insert data into the "albums" table
        const insertedAlbums = await Promise.all(
            contentfulAlbumsData.map(async (album) => {
                return client.sql`
        INSERT INTO albums (title, artist, year, img_url, format, price, media, sleeve, spotify_url, comment, genre)
        VALUES (${album.title}, ${album.artist}, ${album.year}, ${album.imgUrl}, ${album.format}, ${album.price}, ${album.media}, ${album.sleeve}, ${album.spotifyUrl}, ${album.comment}, ${album.genre})
        ON CONFLICT (id) DO NOTHING;
      `;
            })
        );

        console.log(`Seeded ${insertedAlbums.length} albums`);

        return {
            createTable,
            users: insertedAlbums,
        };
    } catch (error) {
        console.error('Error seeding albums:', error);
        throw error;
    }
};

const seedUsers = async (client) => {
    try {
        // Create the "users" table if it doesn't exist
        const createTable = await await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        profile_pic VARCHAR(510),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP,
        active BOOLEAN DEFAULT true 
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            contentfulUserData.map(async (user) => {
                return client.sql`
        INSERT INTO users (first_name, last_name, email, password, profile_pic)
        VALUES (${user.firstName}, ${user.lastName}, ${user.email}, ${user.password}, ${user.profilePic})
        ON CONFLICT (id) DO NOTHING;
      `;
            })
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
};

const migrateAlbums = async () => {
    try {
        await dbPool.query`
      CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        artist VARCHAR(255),
        year SMALLINT,
        img_url VARCHAR(510),
        format VARCHAR(255),
        price NUMERIC(5, 2),
        media VARCHAR(255),
        sleeve VARCHAR(255),
        spotify_url VARCHAR(255),
        comment  VARCHAR(10000),
        genre TEXT[],
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP,
        in_stock BOOLEAN
      );
    `;

        console.log(`Created "albums" table`);

        let queryString = '';
        contentfulAlbumsData.forEach((album, index) => {
            if (index === contentfulAlbumsData.length - 1)
                queryString += `(
					'${album.title}',
					'${album.artist}',
					'${album.year}',
					'${album.imgUrl}',
					'${album.format}',
					'${album.price}',
					'${album.media}',
					'${album.sleeve}',
					'${album.spotifyUrl}',
					'${album.comment}',
					'${album.genre}')`;
            else
                queryString += `(
				'${album.title}',
				'${album.artist}',
				'${album.year}',
				'${album.imgUrl}',
				'${album.format}',
				'${album.price}',
				'${album.media}',
				'${album.sleeve}',
				'${album.spotifyUrl}',
				'${album.comment}',
				'${album.genre}'),`;
        });
        // console.log(queryString);
        await dbPool.query(
            `INSERT INTO albums (title, artist, year, img_url, format, price, media, sleeve, spotify_url, comment, genre) VALUES ${queryString} RETURNING *;`
        );
        return console.log('It worked!');
    } catch (error) {
        console.log(error);
        console.log(error.stack);
        return { ':( Oh no, an error!': error.message };
    }
};

const migrateUsers = async () => {
    try {
        await dbPool.query`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        profile_pic VARCHAR(510),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP,
        active BOOLEAN DEFAULT true 
      );
    `;
        let queryString = '';
        contentfulUserData.forEach((user, index) => {
            if (index === contentfulUserData.length - 1)
                queryString += `('${user.firstName}', '${user.lastName}', '${
                    user.email
                }', '${user.password}', ${
                    user.profilePic ? `'${user.profilePic}'` : null
                })`;
            else
                queryString += `('${user.firstName}', '${user.lastName}', '${
                    user.email
                }', '${user.password}', ${
                    user.profilePic ? `'${user.profilePic}'` : null
                }), `;
        });
        // console.log(queryString);
        await dbPool.query(
            `INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES ${queryString}`
        );
        return console.log('It worked!');
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }
};

async function main() {
    const client = await db.connect();
    await seedAlbums(client);
    // await seedUsers(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err
    );
});
