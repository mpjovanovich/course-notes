# Final Project: Item Assignment Application

## Overview

You will build a full-stack web application that allows administrators to assign items to clients, and allows all users to view their assigned items. This application demonstrates your ability to integrate authentication, cookie management, server-side rendering, client-side JavaScript, and database operations.

### Example Domains

You will customize the provided database schema to fit a domain of your choice. Consider domains such as:

- Patient Medication Tracker
- Exercise Coach Assignment System
- Employee Project Assignments
- Site Inventory Management
- Any other domain where items are assigned to users

---

## User Stories

### As a Client User

- I want to log in with my credentials so I can access my assigned items
- I want to view all items assigned to me so I know what I'm responsible for
- I want to see appropriate error messages if my login fails

### As an Admin User

- I want to log in with my admin credentials so I can manage assignments
- I want to view all clients and their assigned items so I can see the current state of the system
- I want to assign items to clients so they know what they're responsible for
- I want to see immediate feedback when I successfully assign an item
- I want to see my own assigned items just like a regular client can

---

## Technical Requirements

### Technology Stack

- **Backend**: Express.js with EJS templating
- **Database**: SQLite (initialization script provided)
- **Client-Side**: Vanilla JavaScript with Fetch API

You should be able to leverage code from course labs to build this application.

---

## Database Schema

You will receive a complete database initialization script containing three tables:

1. **User table** - stores user credentials and role information
2. **Item table** - stores the primary entities (items) that can be assigned
3. **Assignment table** - associative entity linking users to items

**Your Task**: Rename tables and columns to match your chosen domain while keeping the structure intact. All foreign key constraints and relationships must remain functional.

---

## Authentication & Authorization

### Credentials

- Use the instructor-provided hardcoded credentials (1 admin user, 3 client users)
- Token secret will be provided
  - **Note**: In production applications, secrets should NEVER be committed to version control. This is for academic purposes only.

### Session Management

- Implement token-based authentication using JSON Web Tokens (JWTs)
- Store user ID and role in browser cookie
- **Logout**: No logout currently required.

### Role-Based Access Control (Page Level)

- Two roles: `admin` and `client`
- All authenticated users initially land on `/my-items`
- Conditionally render navigation link to `/assign-items` only for admin users
- Protect routes as specified in the Routes section below

---

## Routes & Endpoints

### `GET /login`

**Description**: Displays the login page

**Access**: Public (unauthenticated users only)

**Response**:

- **200 OK**: Render login page with form
- **Redirect to `/my-items`**: If user is already authenticated

**Page Requirements**:

- Login form with username and password fields
- HTML5 client-side validation (required fields)
- Error message display area (hidden by default)

---

### `POST /login`

**Description**: Processes login credentials and creates session

**Access**: Public

**Request Format**:

- Content-Type: `application/x-www-form-urlencoded`
- Body: `username` and `password` fields
- Must use proper HTML encoding

**Response**:

- **302 Redirect to `/my-items`**: On successful authentication
- **401 Unauthorized**: Invalid credentials
  - Re-render login page with error message: "Invalid username or password"
- **400 Bad Request**: Missing username or password
  - Re-render login page with error message: "Username and password are required"

**Implementation Notes**:

- Use HTTP form submission (NOT Fetch API)
- Perform server-side validation
- Compare credentials against instructor-provided hardcoded values

---

### `GET /my-items`

**Description**: Displays all items assigned to the logged-in user

**Access**: All authenticated users (both admin and client)

**Response**:

- **200 OK**: Server-side rendered page displaying user's assigned items
- **302 Redirect to `/login`**: If not authenticated

**Page Requirements**:

- Display all items assigned to the logged-in user (public fields only)
- Use token to determine which user is logged in
- Display items in a clear, readable format (list or table)
- Admin users see only their own assigned items on this page (admins behave as regular users here)
- Include header with conditional navigation (show "Assign Items" link only for admin users)

**Data Display**:

- Show relevant item fields based on your domain (exclude sensitive data if applicable)
- If no items assigned, display appropriate message: "No items assigned to you yet"

---

### `GET /assign-items`

**Description**: Displays all client-item assignments and provides interface to create new assignments

**Access**: Admin users only

**Response**:

- **200 OK**: Server-side rendered page with assignment interface
- **302 Redirect to `/login`**: If not authenticated
- **302 Redirect to `/my-items`**: If authenticated but not admin role

**Page Requirements**:

- Two-column table displaying all existing client-item assignment pairs
  - Column 1: Client name/identifier
  - Column 2: Assigned item name/identifier
  - One row per assignment (if a client has 3 items, they appear in 3 rows)
- Assignment form with:
  - Dropdown to select a client (all clients listed)
  - Dropdown to select an item (all items listed)
  - Submit button
- Success/error message display area (hidden by default)

**Client-Side Functionality**:

- Form submission uses Fetch API (NOT traditional form submit)
- On successful assignment, append new row to table without page reload
- Show/hide success or error messages appropriately

---

### `POST /api/assignments`

**Description**: API endpoint to create a new client-item assignment

**Access**: Authenticated users (no role-based restrictions on API)

**Request Format**:

- Content-Type: `application/json`
- Body:

```json
{
  "userId": 123,
  "itemId": 456
}
```

**Response**:

- **201 Created**: Assignment successfully created
  ```json
  {
    "success": true,
    "assignment": {
      "userId": 123,
      "itemId": 456,
      "userName": "John Doe",
      "itemName": "Item Description"
    }
  }
  ```
- **400 Bad Request**: Invalid input (missing fields, non-numeric IDs)
  ```json
  {
    "success": false,
    "error": "Invalid user ID or item ID"
  }
  ```
- **500 Internal Server Error**: Database error (foreign key constraint violation, etc.)
  ```json
  {
    "success": false,
    "error": "Database error: unable to create assignment"
  }
  ```

**Implementation Notes**:

- Insert into the associative entity (assignment) table
- Handle database errors gracefully (e.g., invalid user/item IDs)
- No need to prevent duplicate assignments - let database constraints handle this
- Return enough information in success response for client-side table update

---

## View Requirements

### EJS Templates

- Create one EJS view file for each page: `login.ejs`, `my-items.ejs`, `assign-items.ejs`
- Create at least one EJS partial/component (recommended: header with conditional navigation)
- Use EJS to conditionally render content based on user role and data

### Partial/Component Example

A header partial that shows different navigation based on role:

- All users: Link to "My Items"
- Admin users only: Link to "Assign Items"

---

## Error Handling Requirements

### Client-Side Error Display

- Display user-friendly error messages (not raw error objects)
- Use show/hide of HTML elements rather than `alert()` dialogs
- Clear previous error messages before showing new ones

### Server-Side Error Handling

- Return appropriate HTTP status codes (400, 401, 404, 500)
- Handle database errors without crashing the application
- Log errors to console

### Specific Scenarios to Handle

1. Login with invalid credentials
2. Login with missing username or password
3. Accessing protected routes without authentication
4. Accessing admin routes as a client user
5. API requests with invalid IDs (non-existent user or item)
6. Database constraint violations (foreign key errors)

You should have a working application when you submit. Do not leave unfinished or broken code in your submission.

---

## Optional Enhancements (Bonus Points)

If you complete the core requirements and have time, consider implementing:

- Logout functionality (clear session and redirect to login)
- Encrypted password storage in the database
- Sorting and/or filtering on the assignments table
- API route protection (RBAC on POST endpoint)
- Environment variables for configuration (using dotenv)
