5.3 — What happened to the web page?

After running kubectl set image deployments/$DEPLOYMENT_NAME kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2, the web page now shows v=2.

During the rolling update, refreshing several times may display both v=1 and v=2 until all pods have been updated.
The service remains available at all times because Kubernetes gradually replaces the old pods with new ones while maintaining load balancing.

5.5 — What is happening here?

![5.5.1](../images/5.5.1.png)
![5.5.2](./images/5.5.2.png)

After updating to v3, the new pods enter the ErrImagePull / ImagePullBackOff state because the image jocatalin/kubernetes-bootcamp:v3 does not exist on Docker Hub.

Kubernetes therefore halts the deployment and continues serving traffic using the old, still-running pods (v2).
The rollout is stalled until you either rollback (kubectl rollout undo …).

5.6

![5.6](./images/5.6.png)

5.7

![5.7](./images/5.7.png)
