# Alpha Mackie Freight API

Backend API for a freight forwarding platform.

## Features

• User authentication (JWT)
• Package submission
• Package tracking
• Admin approval workflow

## Tech Stack

Node.js
Express
MongoDB
JWT Authentication

## API Endpoints

POST /api/auth/register
POST /api/auth/login
GET /api/user/profile

POST /api/packages
GET /api/packages/my
GET /api/packages
GET /api/packages/:id

PATCH /api/packages/:id/approve
PATCH /api/packages/:id/received
PATCH /api/packages/:id/shipped
PATCH /api/packages/:id/delivered

POST /api/payments/checkout
