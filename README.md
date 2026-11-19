<p align="center">
  <img src="./frontend/customer/web/public/logo.png" alt="Sator Logo" width="300">
</p>

# Sator

**Sator** is a food delivery platform that connects customers, restaurants, and delivery drivers through an integrated system.

The platform consists of four main applications, each designed for a specific type of user, supported by a centralized backend API.

## Tech Stack

### Frontend

| Application | Technologies |
|---|---|
| Customer App | Flutter, Dart |
| Customer Dashboard | Next.js, TypeScript, Tailwind CSS |
| Delivery App | Flutter, Dart |
| Restaurant Dashboard | Next.js, TypeScript, Tailwind CSS |
| Admin Dashboard | Next.js, TypeScript, Tailwind CSS |

### Backend

- **Language:** Go
- **Framework:** Gin
- **Database:** PostgreSQL
- **Architecture:** RESTful API

## Project Structure

```text
Sator/
│
├── frontend/
│   ├── customer/       # Customer Mobile Application
│   |   ├── mobile/     # Customer Mobile Application
│   |   └── web/        # Customer Dashboard
│   ├── delivery/       # Delivery Mobile Application
│   ├── restaurant/     # Restaurant Dashboard
│   └── admin/          # Admin Dashboard
│
├── backend/            # Go + Gin Backend API
│
├── docs/               # Project Documentation
│
├── .gitignore
└── README.md
```

## Applications

### 1. Customer Application
A mobile application that allows customers to:
- Browse available restaurants
- Explore menus and food items
- Add items to cart and place orders
- Track their orders

### 2. Delivery Application
A mobile application for delivery drivers to:
- View assigned orders
- Access restaurant and customer locations
- Manage delivery status
- Track delivery tasks

### 3. Restaurant Dashboard
A web dashboard that allows restaurants to:
- Manage restaurant information
- Add, update, and remove menu items
- Manage prices and food categories
- Receive and manage incoming orders

### 4. Admin Dashboard
A web dashboard for platform administration:
- Manage customers and restaurants
- Manage delivery drivers
- Monitor and manage orders
- Oversee platform operations

## Backend

The backend provides a centralized API that connects all four applications.

Main responsibilities include:
- Authentication and authorization
- User and role management
- Restaurant and menu management
- Order processing
- Delivery management
- Database operations

## Development Status

**Sator** is currently under development. More details, features, and documentation will be added as the project progresses.