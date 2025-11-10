# Lab
## 3. Learn to expose a Kubernetes service to the outside

Q1.
Command : 
```
minikube kubectl -- expose deployment kubernetes-bootcamp --type=NodePort --port=8080
```

Response :
```
service/kubernetes-bootcamp exposed
```

Q2.
Command : 
```
kubectl get services
```

Response :
```
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP          34m
kubernetes-bootcamp   NodePort    10.103.143.223   <none>        8080:32010/TCP   15s
```

Q3.
Command : 
```
minikube ip
```

Response : 
```
192.168.59.100
```

Q4.
Open your web browser and try to reach the web app

Response : 
http://192.168.59.100:32010
