# DevOps Project 1 - Jenkins CI Pipeline
![Linux](https://img.shields.io/badge/Linux-Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Application-339933?style=for-the-badge&logo=node.js&logoColor=white)
## 📌 Project Overview

This project demonstrates a Continuous Integration (CI) pipeline using Jenkins, Docker, GitHub, and AWS EC2.

The pipeline automatically:

- Clones the GitHub repository
- Checks Docker availability
- Builds a Docker image
- Reports build status

---
## 🏗️ Architecture

```text
                +--------------------+
                |     Developer      |
                +---------+----------+
                          |
                          | git push
                          v
                +--------------------+
                |      GitHub        |
                +---------+----------+
                          |
                          | Webhook / Poll SCM
                          v
                +--------------------+
                |      Jenkins       |
                +---------+----------+
                          |
                          | Build Pipeline
                          v
                +--------------------+
                |   Docker Build     |
                +---------+----------+
                          |
                          | Creates
                          v
                +--------------------+
                |   Docker Image     |
                +--------------------+
```
## 🛠️ Tech Stack

- AWS EC2
- Ubuntu Linux
- Git
- GitHub
- Docker
- Jenkins
- Node.js

---

## ⚙️ Jenkins Pipeline Stages

1. Clone Repository
2. Docker Version Check
3. Build Docker Image

---

## 🏗️ Architecture

```text
Developer
     │
     ▼
GitHub
     │
     ▼
Jenkins (AWS EC2)
     │
     ▼
Clone Repository
     │
     ▼
Docker Build
     │
     ▼
Docker Image
```

---

## 🚀 Result

- Successfully integrated Jenkins with GitHub
- Automated Docker image creation
- Learned CI Pipeline implementation
- Resolved Docker permission issues inside Jenkins

---

## 📚 Skills Learned

- Linux
- Git & GitHub
- Docker
- Jenkins
- AWS EC2
- CI Pipeline
---

# 📸 Project Screenshots

## Jenkins Dashboard

![Jenkins Dashboard](screenshots/jenkins-dashboard.png)

---

## Successful Jenkins Pipeline Build

![Pipeline Build](screenshots/jenkins-pipeline-success.png)
---

## Docker Images

![Docker Images](screenshots/docker-images.png)
