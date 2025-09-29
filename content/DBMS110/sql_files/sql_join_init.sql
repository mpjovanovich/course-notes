-- Drop tables if they exist
DROP TABLE IF EXISTS Assignment;
DROP TABLE IF EXISTS Module;

-- Create Module table
CREATE TABLE Module (
    module_id INTEGER PRIMARY KEY,
    presentation_order INTEGER NOT NULL UNIQUE,
    module_name TEXT NOT NULL,
    published INTEGER NOT NULL
);

-- Create Assignment table
CREATE TABLE Assignment (
    assignment_id INTEGER PRIMARY KEY,
    module_id INTEGER NOT NULL,
    assignment_name TEXT NOT NULL,
    due_date TEXT NOT NULL,
    FOREIGN KEY (module_id) REFERENCES Module(module_id)
);

-- Insert data into Module table
INSERT INTO Module (module_id, presentation_order, module_name, published) VALUES
(1, 1, 'Introduction to Databases', 1),
(2, 2, 'Fundamentals of Sets', 1),
(3, 3, 'Data Modeling and ERDs', 0);

-- Insert data into Assignment table
INSERT INTO Assignment (assignment_id, module_id, assignment_name, due_date) VALUES
(1, 1, 'Ch1 Knowledge Check', '2025-08-31'),
(2, 1, 'Ch2-5 Knowledge Check', '2025-08-31'),
(3, 1, 'Exercise: Data Journeys', '2025-08-26'),
(4, 1, 'SQL: Working with SQL Technologies', '2025-08-28'),
(5, 2, 'SQL: SELECT Basics', '2025-09-14'),
(6, 3, 'Ch2-1, Ch2-3, Ch2-4 Knowledge Check', '2025-09-28'),
(7, 3, 'Ch4 Knowledge Check', '2025-09-28'),
(8, 3, 'ERD Basics', '2025-09-14');