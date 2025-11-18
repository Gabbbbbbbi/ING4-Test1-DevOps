# LAB 10 – Istio & Kubernetes

## Starting Minikube
Command
```bash
minikube start --driver=docker --memory=6000 --cpus=4
```
Output
```bash
* minikube v1.37.0 on Ubuntu 24.04 (vbox/amd64)
* Using the docker driver with root privileges
* Starting control plane node "minikube" in cluster "minikube"
* Preparing Kubernetes v1.34.0...
* Verifying Kubernetes components...
* Enabled addons: default-storageclass, storage-provisioner
* Done! kubectl is now configured to use "minikube"
```

## Installing Istio
Command
```bash
curl -L https://istio.io/downloadIstio | sh -
```
Output
```bash
Istio 1.28.0 download complete!
The Istio release archive has been downloaded to the istio-1.28.0 directory.
```

## Configuring Istio CLI
Commands
```bash
cd istio-1.28.0/bin
export PATH=$PATH:$PWD
istioctl version
```
Output
```bash
2025-11-17T22:01:30.403958Z  warn  default revision watcher not synced, falling back to "default"
Istio is not present in the cluster: no running Istio pods in namespace "istio-system"
client version: 1.28.0
```

## Installing Istio Components
Command
```bash
istioctl install --set profile=demo -y
```

Output
```bash
✔ Istio core installed
✔ Istiod installed
✔ Egress gateways installed
✔ Ingress gateways installed
✔ Installation complete
```
## Checking Istio Pods
Command
```bash
kubectl get pods -n istio-system
```
Output
```bash
NAME                                      READY   STATUS    RESTARTS   AGE
istio-egressgateway-69b8465445-q6xr5      1/1     Running   0          6m53s
istio-ingressgateway-7554995647-pk6xd     1/1     Running   0          6m53s
istiod-d468976dc-thq5w                    1/1     Running   0          6m19s
```
## Deploying Bookinfo Application
Command
```bash
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
```
Output
```bash
service/details created
serviceaccount/bookinfo-details created
deployment.apps/details-v1 created
service/ratings created
deployment.apps/ratings-v1 created
service/reviews created
deployment.apps/reviews-v1 created
deployment.apps/reviews-v2 created
deployment.apps/reviews-v3 created
service/productpage created
deployment.apps/productpage-v1 created
```

## Checking Application Pods
Command
```bash
kubectl get pods -n default
```
Output
```bash
details-v1-776dbd5675-r74c        1/1 Running 0 16m
productpage-v1-bb87ff47b-x45fr    1/1 Running 0 16m
ratings-v1-8589f64b4c-pl5v9       1/1 Running 0 16m
reviews-v1-8cf7b9cc5-g9fpw        1/1 Running 0 16m
reviews-v2-67d565655f-vpxbv       1/1 Running 0 16m
reviews-v3-d587fc9d7-hd86k        1/1 Running 0 16m
```

## Installing the Gateway
Command
```bash
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
```
Output
```bash
gateway.networking.istio.io/bookinfo-gateway created
virtualservice.networking.istio.io/bookinfo created
```

## Retrieving IP and Port
Command
```bash
minikube ip
```

Output
```bash
192.168.49.2
```

## Command
```bash
kubectl -n istio-system get svc istio-ingressgateway
Real Output
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)
istio-ingressgateway   LoadBalancer   10.96.193.158  <pending>    15021:30782/TCP,80:32739/TCP,443:32004/TCP,31400:30113/TCP,15443:31657/TCP
```

Port used: 32739

## Final Access URL
```bash
http://192.168.49.2:32739/productpage
```
result:
The Bookinfo webpage loads successfully.
The reviews section randomly displays versions v1, v2, v3.

## Creating DestinationRules
Command
```bash
kubectl apply -f samples/bookinfo/networking/destination-rule-all.yaml
```
Output
```bash
destinationrule.networking.istio.io/productpage created
destinationrule.networking.istio.io/reviews created
destinationrule.networking.istio.io/ratings created
destinationrule.networking.istio.io/details created
```

## Applying VirtualService (route all traffic to v1)
Command
```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml
```
Output
```bash
virtualservice.networking.istio.io/productpage unchanged
virtualservice.networking.istio.io/reviews unchanged
virtualservice.networking.istio.io/ratings unchanged
virtualservice.networking.istio.io/details unchanged
```
