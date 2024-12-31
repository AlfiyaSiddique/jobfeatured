# Behind The Take - Featured Jobs Section

A full-stack implementation of a Featured Jobs section using React Native, TypeScript, Node.js, and PostgreSQL. The application includes category filtering, featured job cards, and a complete testing suite.

## 🚀 Tech Stack

### Frontend
- React Native
- TypeScript
- TailwindCSS
- Jest for testing

### Backend
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose
- npm 

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/AlfiyaSiddique/jobfeatured.git
cd jobfeatured
```

2. Environment Setup:
```bash
# Copy environment files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

3. Manual Setup (Alternative):
```bash

# Frontend Setup
cd frontend
npm install
npm start

#Scan the expo Barcode to get the app on expo go

# Backend Setup
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

4. Using Docker:
```bash
# First time setup
docker-compose build

# Start the services
docker-compose up

# Run migrations (first time only)
docker-compose exec backend npx prisma migrate deploy
```

## 📜 API Documentation

### Get Featured Jobs
Retrieves featured jobs filtered by category.

```
GET /api/jobs/featured
```

Query Parameters:
- `category` (optional): Filter jobs by category name ("All" returns all featured jobs)

Response Example:
```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Lead Actor",
      "company": "FilmCity Studios",
      "location": "Hyderabad",
      "salary": "Rs. 3,000/day",
      "featured": true,
      "categoryId": 1,
      "category": {
        "id": 1,
        "name": "Acting"
      }
    }
  ]
}
```

### Get Categories
Retrieves all job categories.

```
GET /api/categories
```

Response Example:
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Acting"
    },
    {
      "id": 2,
      "name": "Photography"
    }
  ]
}
```

### Apply to Job
Submit a job application.

```
POST /api/jobs/apply
```

Request Body:
```json
{
  "jobId": 1
}
```

Response Example:
```json
{
  "success": true,
  "message": "Application submitted successfully"
}
```

## 🧪 Testing Instructions

### Frontend Tests
```bash
# Inside frontend directory
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Backend Tests
```bash
# Inside backend directory
npm run test
npm run test:coverage
```

## 🔍 Project Structure
```
|- docker-compose.yml
|- frontend/
|  |- src/
|  |  |- components/
|  |  |  |- CategoryFilter.tsx
|  |  |  |- FeaturedJobCard.tsx
|  |  |- __tests__/
|- backend/
|  |- src/
|  |  |- routes/
|  |  |- controllers/
|  |- prisma/
|  |  |- schema.prisma
```

## 📱 Screenshots

The Featured Jobs section includes:
- Horizontal scrolling category filter
- Featured job cards with gradient backgrounds
- Loading skeletons for better UX
- Responsive design for all screen sizes


