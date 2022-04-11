CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    school TEXT NOT NULL,
    expires DATE NOT NULL
);

CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE observations (
    id SERIAL PRIMARY KEY,
    users_id INT NOT NULL,
    student_id INT NOT NULL,
    tasks_id INT NOT NULL,
    duration INTERVAL NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
<<<<<<< HEAD
<<<<<<< HEAD
);

INSERT INTO tasks (name) VALUES
<<<<<<< HEAD
<<<<<<< HEAD
    ('Planned Pres.'), ('Response Pres.'), ('Monitoring'), ('Perform. Feedbk.'), 
    ('Motive. Feedbk.'), ('Beg/End Class'), ('Equip. Mgt.'), 
    ('Organization'), ('Behavior Mgt.'), ('Other Tasks');
=======
);
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
=======
    ('Planned Pres.');
>>>>>>> parent of 0001ca0 (test)
=======
);
>>>>>>> parent of 29b1569 ([Finishes #181782739]Validated Technology Stack)
=======
    ('Planned Pres.');
>>>>>>> parent of 0001ca0 (test)
