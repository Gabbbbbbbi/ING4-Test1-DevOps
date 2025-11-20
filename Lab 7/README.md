# Main Purpose of the Lab

This lab was designed to master the fundamentals of Containerization using Docker and Docker Compose. The core objectives were to package, distribute, and orchestrate applications by:
	•	Writing a Dockerfile to define an application environment.
	•	Building and running isolated containers.    
	•	Sharing images via Docker Hub.
	•	Using Docker Compose to define and manage a multi-container application 

# Possible Uses in a Company

In a professional setting, the knowledge gained is important for modern software development and operations:
	•	Uniform Development Environments : Ensuring applications run consistently across all environments.
	•	Microservices Orchestration: Using Docker Compose for locally managing multi-service architectures (APIs, databases, caches).
	•	Continuous Deployment : Docker images are the standard artifact for deployment on cloud platforms and orchestrators like Kubernetes.

# Step in the DevOps Cycle

This lab covers the essential Build and Run phases of the DevOps cycle:

1. Package/Build:
	•	Writing and optimizing the Dockerfile.
	•	Building the immutable Docker Image (docker build).

2. Release/Run (Local Deployment):
	•	Executing single containers (docker run).
	•	Orchestrating interconnected services using Docker Compose (docker-compose up).

3. Distribute/Share:
	•	Tagging and pushing the final image to a Container Registry.

# Problems Encountered During the Lab & How They Were Solved

The Redis container's data was stored ephemerally within the container's file system (/data). Removing the container deleted the data

Misunderstanding the mapping between internal and external ports.
Solution:
Used the -p HOST_PORT:CONTAINER_PORT flag correctly

# Final State of the Lab

The lab is fully completed.
