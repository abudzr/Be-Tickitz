# Week4-RestFulAPI

rest API ini menggunakan express.js dan menggunakan MySQL sebagai databasenya.

CRUD API

1. Users
   -GET (http://localhost:8000/users/)
   -GET by ID (http://localhost:8000/users/:id)
   -POST (http://localhost:8000/users/)
   -PUT (http://localhost:8000/users/:id)
   -DELETE (http://localhost:8000/users/:id)

2. Movie
   -GET data and pagination (http://localhost:8000/movies?page=1&limit=2)
   -GET data by SearchNameMOVIE (http://localhost:8000/movies/search/:param)
   -GET data by ID (http://localhost:8000/movies/:id)
   -POST (http://localhost:8000/movies/)
   -PUT (http://localhost:8000/movies/:id)
   -DELETE (http://localhost:8000/movies/:id)

3. Tickets
   -GET (http://localhost:8000/tickets/)
   -GET by ID (http://localhost:8000/tickets/:id)
   -POST (http://localhost:8000/tickets/)
   -PUT (http://localhost:8000/tickets/:id)
   -DELETE (http://localhost:8000/tickets/:id)

4. Transaction
   -GET (http://localhost:8000/transactions/)
   -GET by ID (http://localhost:8000/transactions/:id)
   -POST (http://localhost:8000/transactions/)
   -PUT (http://localhost:8000/transactions/:id)
   -DELETE (http://localhost:8000/transactions/:id)
