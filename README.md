# 🛠️ Multi-Service Docker Setup with CI/CD

This project demonstrates a simple DevOps setup that includes:
- A Node.js backend API connected to MongoDB
- Containerized services using Docker and Docker Compose
- Continuous integration via GitHub Actions

---

## 🚀 Features

- ✅ REST API to store a message in MongoDB  
- ✅ Dockerized Node.js and MongoDB services  
- ✅ Continuous integration and environment separation  
- ✅ CI pipeline for linting and testing with GitHub Actions  
- ✅ Easily reproducible local development setup

---

## 📦 Technologies Used

- **Node.js + Express** – REST API backend  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **Docker** – Containerization  
- **Docker Compose** – Multi-container orchestration  
- **GitHub Actions** – CI for linting and testing  
- **Jest** – JavaScript testing framework  

---

## 📁 Project Structure

```
multi-service-docker-task/
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
├── README.md
├── .github/
│   └── workflows/
│       └── ci.yml
└── test/
    └── app.test.js
```

---

## 🧪 API Usage

### 🔸 Save a Message

**Endpoint:** `POST /save`  
**Payload:**
```json
{
  "message": "Hello World"
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:3000/save \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello from Docker!"}'
```

---

## 🐳 Running the Project Locally

Make sure you have Docker installed, then:

```bash
git clone https://github.com/nikhil3939/multi-service-docker-task.git
cd multi-service-docker-task
docker-compose up --build
```

- Node.js app: [http://localhost:3000](http://localhost:3000)  
- MongoDB: inside Docker network as `mongo:27017`

---

## 🔁 CI/CD Workflow

This project uses GitHub Actions to automatically:
- Install dependencies (`npm install`)
- Run linter (`npm run lint`)
- Run tests (`npm test`)

Workflow file: `.github/workflows/ci.yml`



## 🙋‍♂️ Author

**Nikhil B**  
DevOps & Full-Stack Enthusiast

---

## 📬 Questions or Feedback?

If you have any feedback or suggestions, feel free to [open an issue](https://github.com/nikhil3939/multi-service-docker-task/issues).
