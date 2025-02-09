# Digital Portfolio Builder

## Overview
The Digital Portfolio Builder is a web application that allows users to create, showcase, and share their digital portfolios. It integrates multimedia, code, and project documentation to provide an interactive portfolio experience.

## Tech Stack
- **Backend:** Django with Django REST Framework
- **Frontend:** React.js with Bootstrap
- **Database:** SQLite (Can be configured for PostgreSQL or MongoDB)

## Features
- **Interactive Portfolio Templates**: Choose from a range of customizable portfolio templates.
- **Code Integration**: Embed GitHub repositories and live code demos.
- **Multimedia Support**: Upload images, videos, and project descriptions.
- **Skill Showcase**: Highlight key skills, certifications, and accomplishments.
- **Portfolio Sharing**: Share portfolios via unique links.

## Project Structure
backend/
  ├── manage.py
  ├── portfolio_builder/
  │   ├── settings.py
  │   ├── urls.py
  │   ├── wsgi.py
  ├── api/
  │   ├── models.py
  │   ├── views.py
  │   ├── serializers.py
  │   ├── urls.py
frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── styles/

## Installation & Setup

### Backend (Django)
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/digital-portfolio-builder.git
   cd digital-portfolio-builder/backend
   ```

2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4.Run database migrations:
  ```sh
  python manage.py migrate
  ```
5.Start the backend server:
  ```sh
  python manage.py runserver
  ```

##Frontend (React.js)

1. Navigate to the frontend directory:

   ```sh 
   cd ../frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```


