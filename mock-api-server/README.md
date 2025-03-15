# Mock API Server

This project is a mock API server for managing music collections. It provides endpoints to retrieve a list of music collections and detailed information about specific collections.

## Project Structure

```
mock-api-server
├── src
│   ├── index.ts               # Entry point of the application
│   ├── routes
│   │   └── collections.ts      # Defines routes for the collections API
│   ├── controllers
│   │   └── collectionsController.ts # Contains logic for handling collections
│   └── models
│       └── collection.ts       # Defines data models for collections
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mock-api-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   npm start
   ```

## API Usage

### Get All Music Collections

- **Endpoint:** `GET /collections`
- **Description:** Retrieve a list of all music collections.
- **Response:**
  - Status: 200 OK
  - Content: A JSON array of collections.

### Get Collection Details

- **Endpoint:** `GET /collections/{collectionId}`
- **Description:** Retrieve detailed information about a specific collection.
- **Parameters:**
  - `collectionId` (string): The ID of the collection to retrieve.
- **Response:**
  - Status: 200 OK
  - Content: A JSON object containing the details of the specified collection.

## License

This project is licensed under the MIT License.