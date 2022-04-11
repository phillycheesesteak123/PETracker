const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('views', path.join(__dirname, 'views'))
    .set("view engine", 'ejs')
    .get('/', async (req, res) => {


        try {
            const client = await pool.connect();

            const tasks = await client.query(
                "SELECT * FROM tasks ORDER BY id ASC"
            );

            const locals = {
                'tasks': (tasks) ? tasks.rows : null
            };

            client.release();
            res.send("works");
        } catch (err) {
            console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
            res.send("From normal Error: " + err);
=======
=======
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
            res.send("Error: " + err);
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
=======
            res.send("Error: " + err);
>>>>>>> parent of 0001ca0 (test)
=======
            res.send("Error: " + err);
>>>>>>> parent of 0001ca0 (test)
        }
    })
    .get('/db-info', async (req, res) => {
        try {
            const client = await pool.connect();

            const tables = await client.query(
                "SELECT c.relname AS table, a.attname AS column, t.typname AS type FROM pg_catalog.pg_class AS c LEFT JOIN pg_catalog.pg_attribute AS a ON c.oid = a.attrelid AND a.attnum > 0 LEFT JOIN pg_catalog.pg_type AS t ON a.atttypid = t.oid WHERE c.relname IN('users', 'observations', 'students', 'schools', 'tasks') ORDER BY c.relname, a.attnum; "
            );

<<<<<<< HEAD
<<<<<<< HEAD
            const obs = await client.query(
                "SELECT * FROM observations"
            );

            const locals = {
                'tables': (tables) ? tables.rows : null,
                'obs': (obs) ? obs.rows : null
            };

            res.render('pages/db-info', locals);
            client.release();

        } catch (err) {
            console.error(err);
            res.send("Error: " + err);
        }
    })
    .post("/log", async (req, res) => {
        try {

            const client = await pool.connect();

            const usersId = req.body.users_id;
            const studentsId = req.body.student_id;
            const tasksId = req.body.tasks_id;
            const duration = req.body.duration;

<<<<<<< HEAD
<<<<<<< HEAD
            const sql = "INSERT INTO observations (users_id, student_id, tasks_id, duration, name) VALUES(" + usersId + ", " + studentsId + ", " + tasksId + ", " + duration + 
            ", " + taskName +
             ") RETURNING id as new_id;";
=======
            // const tables = await client.query(
            //     "CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT NOT NULL, password TEXT NOT NULL); CREATE TABLE students(id SERIAL PRIMARY KEY, name TEXT NOT NULL, school TEXT NOT NULL, expires DATE NOT NULL); CREATE TABLE schools( id SERIAL PRIMARY KEY, name TEXT NOT NULL, address TEXT NOT NULL ); CREATE TABLE observations( id SERIAL PRIMARY KEY, users_id INT NOT NULL, student_id INT NOT NULL, tasks_id INT NOT NULL, duration INTERVAL NOT NULL ); CREATE TABLE tasks(id SERIAL PRIMARY KEY, name TEXT NOT NULL); SELECT c.relname AS table, a.attname AS column, t.typname AS type FROM pg_catalog.pg_class AS c LEFT JOIN pg_catalog.pg_attribute AS a ON c.oid = a.attrelid AND a.attnum > 0 LEFT JOIN pg_catalog.pg_type AS t ON a.atttypid = t.oid WHERE c.relname IN('users', 'observations', 'students', 'schools', 'tasks') ORDER BY c.relname, a.attnum; "
            // );
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
=======
            const sql = "INSERT INTO observations (users_id, student_id, tasks_id, duration) VALUES(" + usersId + ", " + studentsId + ", " + tasksId + ", " + duration + ") RETURNING id as new_id;";
>>>>>>> parent of 0001ca0 (test)
=======
            // const tables = await client.query(
            //     "CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT NOT NULL, password TEXT NOT NULL); CREATE TABLE students(id SERIAL PRIMARY KEY, name TEXT NOT NULL, school TEXT NOT NULL, expires DATE NOT NULL); CREATE TABLE schools( id SERIAL PRIMARY KEY, name TEXT NOT NULL, address TEXT NOT NULL ); CREATE TABLE observations( id SERIAL PRIMARY KEY, users_id INT NOT NULL, student_id INT NOT NULL, tasks_id INT NOT NULL, duration INTERVAL NOT NULL ); CREATE TABLE tasks(id SERIAL PRIMARY KEY, name TEXT NOT NULL); SELECT c.relname AS table, a.attname AS column, t.typname AS type FROM pg_catalog.pg_class AS c LEFT JOIN pg_catalog.pg_attribute AS a ON c.oid = a.attrelid AND a.attnum > 0 LEFT JOIN pg_catalog.pg_type AS t ON a.atttypid = t.oid WHERE c.relname IN('users', 'observations', 'students', 'schools', 'tasks') ORDER BY c.relname, a.attnum; "
            // );
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)


const locals = {
    'tables': (tables) ? tables.rows : null
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
            const sql = "INSERT INTO observations (users_id, student_id, tasks_id, duration) VALUES(" + usersId + ", " + studentsId + ", " + tasksId + ", " + duration + ") RETURNING id as new_id;";

            const sqlInsert = await client.query(sql);

            console.log("Tracking task ${tasksId}");

>>>>>>> parent of 0001ca0 (test)
            const result = {
                "response": (sqlInsert) ? (sqlInsert.rows[0]) : null
            }

            res.set({
                'Content-Type': 'application/json'
            });

            res.json({ requestBody: result });

            client.release();

        } catch (err) {
            console.error(err);
            res.send("Error: " + err);
        }
=======
res.render('pages/db-info', locals);
client.release();

        } catch (err) {
    console.error(err);
    res.send("Error: " + err);
}
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
=======
res.render('pages/db-info', locals);
client.release();

        } catch (err) {
    console.error(err);
    res.send("Error: " + err);
}
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
    })
    .listen(PORT, () => console.log('Listening on ${PORT}'));