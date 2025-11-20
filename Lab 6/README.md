# Main Purpose of the Lab

The primary goal of this lab was to learn and practice Infrastructure as Code by provisioning and configuring Virtual Machines using both imperative and declarative approaches.
	•	Imperative IaC (Part 1): Using Vagrant with a Shell Provisioner to execute sequential configuration steps on a VM.
	•	Declarative IaC (Part 2 & 3): Employing Vagrant alongside Ansible to define the desired final state of the infrastructure.

# Possible Uses in a Company

Mastering these tools and concepts is essential for modern IT operations and DevOps teams:

	•	Reproducible Environments: IaC ensures every environment is provisioned identically, eliminating manual errors and "works on my machine" issues.
	•	Configuration Management: Ansible is a leading tool used to automatically install software, manage configurations, and enforce security policies across thousands of servers.
	•	Accelerated Deployment: Automating the setup of complex applications like GitLab drastically reduces deployment time.
	•	Auditing and Version Control: Infrastructure definitions are stored in version control, allowing changes to be tracked and reviewed.

# Step in the DevOps Cycle

This lab heavily focuses on the Provisioning and Configuration phases of the DevOps lifecycle:

1. Provisioning:
	•	Creating and managing the underlying compute resources using the vagrant up, vagrant halt, and vagrant destroy commands.

2. Configuration:
	•	Imperative: Applying step-by-step changes via Shell scripts.
	•	Declarative: Defining the complete configuration state using Ansible Playbooks.

3. Testing/Validation:
	•	Implementing and running Readiness and Liveness checks to confirm that the deployed application is fully operational and healthy.

# Problems Encountered During the Lab & How They Were Solved

Using the Shell provisioner for dynamic changes requires re-running the configuration steps.
Solution:
Instead of running the full vagrant up, the vagrant provision command was used to re-run only the shell scripts

Ansible is not installed on the host machine, but is required to configure the VM.
Solution:
Used the ansible_local provisioner in the Vagrantfile. This provisioner automatically installs a version of Ansible inside the guest VM before running the playbooks, eliminating the need for a host installation.

# Final State of the Lab

The lab is fully completed.
