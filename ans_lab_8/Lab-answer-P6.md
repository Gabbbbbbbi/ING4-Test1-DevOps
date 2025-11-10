6.3

![6.3](./images/6.3.png)

Yes, the pods are running. The kubectl get pods command confirms that the containers have been created and are in the Running state.

6.5

![6.5](./images/6.5.png)

Yes, the service is accessible through the web browser. The web page successfully loads and shows the expected output from the running
Kubernetes pod, confirming that the Service correctly exposes the Deployment to the outside.

6.7

Yes, refreshing the browser sometimes shows a different pod name because the Service load-balances traffic across the three replicas.
