-- Add migration script here
-- https://docs.rs/sqlx/latest/sqlx/migrate/index.html
-- 001_create_user_table.sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP
);

-- 002_create_project_table.sql
CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    created_by INTEGER REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 003_create_project_member_table.sql
CREATE TABLE project_members (
    project_member_id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(project_id),
    user_id INTEGER REFERENCES users(user_id),
    is_admin BOOLEAN
);

-- 004_create_category_table.sql
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    created_by INTEGER REFERENCES users(user_id)
);

-- 005_create_todo_table.sql
CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date TIMESTAMP,
    created_by INTEGER REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    project_id INTEGER REFERENCES projects(project_id),
    category_id INTEGER REFERENCES categories(category_id)
);

-- 006_create_todo_category_table.sql
CREATE TABLE todo_categories (
    todo_category_id SERIAL PRIMARY KEY,
    todo_id INTEGER REFERENCES todos(todo_id),
    category_id INTEGER REFERENCES categories(category_id)
);
