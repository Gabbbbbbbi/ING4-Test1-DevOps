# Lab
## 4. Learn to scale up and down a Kubernetes deployment

Q1.
Command : 
```
minikube kubectl -- scale deployments/kubernetes-bootcamp --replicas=5
```

Response :
```
deployment.apps/kubernetes-bootcamp scaled
```

Q2.
Command : 
```
minikube kubectl -- get pods
```

Response :
```
NAME                                   READY   STATUS    RESTARTS   AGE
kubernetes-bootcamp-658f6cbd58-5bdcf   1/1     Running   0          47s
kubernetes-bootcamp-658f6cbd58-5g74m   1/1     Running   0          47s
kubernetes-bootcamp-658f6cbd58-cs9h5   1/1     Running   0          47s
kubernetes-bootcamp-658f6cbd58-l2tv4   1/1     Running   0          47s
kubernetes-bootcamp-658f6cbd58-pqj7p   1/1     Running   0          91s
```

Q3.
Command : 
http://192.168.59.100:32010

Response : 
When we ```CTRL+F5```, the pods are different in the message

Q3.
Command :
```
minikube kubectl -- scale deployments/kubernetes-bootcamp --replicas=2
```
Response : 
```
deployment.apps/kubernetes-bootcamp scaled
```
Command :
```
minikube kubectl -- get pods
```
Response : 
```
NAME                                   READY   STATUS    RESTARTS   AGE
kubernetes-bootcamp-658f6cbd58-l2tv4   1/1     Running   0          13m
kubernetes-bootcamp-658f6cbd58-pqj7p   1/1     Running   0          14m
```
