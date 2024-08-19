
# Work Assignment and Setup Guide

Welcome to our project! Below is the work assignment and setup guide.

## 1. Project Overview

The project is built using Laravel and React.js.

## 2. Workflow
### **Step 1: Download and Extract the Project**
Run the following commands in the backend directory:

    cd ./backend
    composer install
    cp .env.example .env
Ensure the database connection settings in your .env file are correctly configured for your hosting environment:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=enter_database_name_here
    DB_USERNAME=enter_database_user_here
    DB_PASSWORD=enter_database_password_here


Extract the image product

    cd ./backend/public/storage

In the archive 'folder', unzip images.zip(containing product images).

    cd ./backend/public/storage/images/product.jpg
    
Continue running the following command

    php artisan key:generate
    php artisan storage:link
    php artisan migrate
    php artisan serve


    
Then, run the following commands in the frontend directory:

    cd ./frontend
    npm i
    npm install react-slick slick-carousel
    npm install react-toastify
    npm start
    
### **Step 2: Upload the Database to Localhost**

1. **Using phpMyAdmin**:
   - Log in to phpMyAdmin on your localhost.
   - Create a new database or select an existing one.
   - Click on the **Import** tab.
   - Choose the file `databasenew.sql` from your local system.
   - Click **Go** to start the import process.

2. **Using Command Line**:
   - Open your terminal or command prompt.
   - Navigate to the directory where `databasenew.sql` is located.
   - Use the following command to import the SQL file into your MySQL database:

     ```bash
     mysql -u your_username -p your_database_name < databasenew.sql
     ```

   - Replace `your_username` with your MySQL username and `your_database_name` with the name of your database.
   - You will be prompted to enter the password for your MySQL user.

## 3. Note

- After downloading, extract the file and follow the steps outlined above.


