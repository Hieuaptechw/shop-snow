# Setup Guide


Welcome to our project! Below is the setup guide.

## 1. Project Overview

The project is built using Laravel and React.js.

## 2. Workflow

### **Step 1: Download and Extract the Project**

1. **Set Up Backend**
   - Navigate to the `backend` directory:

     ```bash
     cd ./backend
     ```

   - Install PHP dependencies:

     ```bash
     composer install
     ```

   - Copy the example environment file to create your `.env` file:

     ```bash
     cp .env.example .env
     ```

   - Ensure the database connection settings in your `.env` file are correctly configured for your hosting environment:

     ```plaintext
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=enter_database_name_here
     DB_USERNAME=enter_database_user_here
     DB_PASSWORD=enter_database_password_here
     ```

   - Generate the application key:

     ```bash
     php artisan key:generate
     ```

   - Create the symbolic link for storage:

     ```bash
     php artisan storage:link
     ```

   - Run migrations to set up the database schema:

     ```bash
     php artisan migrate
     ```
   - Navigate to the storage directory and unzip product images:

     ```bash
     cd ./backend/public/storage
     ```

   - In the archive folder, unzip `images.zip` (containing product images).
   
     ```bash
     cd ./backend/public/storage/images/product.jpg
     ```
   - Start the Laravel development server:

     ```bash
     php artisan serve
     ```



2. **Set Up Frontend**
   - Navigate to the `frontend` directory:

     ```bash
     cd ./frontend
     ```

   - Install Node.js dependencies:

     ```bash
     npm install
     ```

   - Install additional packages:

     ```bash
     npm install react-slick slick-carousel
     npm install react-toastify
     ```

   - Start the React development server:

     ```bash
     npm start
     ```

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

- After downloading and extracting the project, follow the steps outlined above to set up and run the project.
