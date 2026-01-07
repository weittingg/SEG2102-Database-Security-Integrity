-- Demonstration of Data Integrity Constraints in SQL

-- Entity Integrity
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) UNIQUE
);

-- Referential Integrity
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATE,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES Users(user_id)
        ON DELETE CASCADE
);

-- Domain Integrity
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    amount DECIMAL(10,2) CHECK (amount > 0),
    payment_method VARCHAR(20)
        CHECK (payment_method IN ('CASH', 'CARD', 'ONLINE'))
);
