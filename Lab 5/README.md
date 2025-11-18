# Main Purpose of the Lab

The main purpose of this lab was to implement a complete CI/CD pipeline for a Node.js application using:
	•	GitHub Actions for Continuous Integration (CI)
	•	Render for Continuous Deployment (CD)

The lab focused on automatically testing the application using Redis inside GitHub Actions, building the project, and deploying it to a hosting platform.

# Possible Uses in a Company

In a real company, this setup is extremely common and useful:
	•	Ensuring every code change is automatically tested before being merged
	•	Preventing bugs from being deployed into production
	•	Providing fast feedback to developers through automated pipelines
	•	Deploying applications automatically on a remote server after CI validation
	•	Maintaining code quality and stability thanks to continuous testing

# Step in the DevOps Cycle

This lab covers two major phases of the DevOps lifecycle:

1. Continuous Integration (CI)
	•	Automated testing
	•	Automated builds
	•	Verification of code quality
	•	Integration of test environments (Redis container in Actions)

2. Continuous Deployment (CD)
	•	Remote deployment to Render
	•	Automatic build and run of the application
	•	Delivery pipeline triggered by GitHub pushes

# Problems Encountered During the Lab & How They Were Solved

GitHub Actions looking in the wrong directory

Cause:
The application was inside: Lab 4/lab/

But GitHub Actions executed at the repository root, so it could not find package.json.

Solution:
Added:

'''
defaults:
  run:
    working-directory: "Lab 4/lab"
'''

# Final State of the Lab

The lab is fully completed.
