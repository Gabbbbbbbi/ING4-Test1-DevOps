#Lab
## 2. Learn to use `kubectl` commands

Q2.
Command : 
```
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

Response :
```
> kubectl.exe.sha256:  64 B / 64 B [---------------------] 100.00% ? p/s 0s
> kubectl.exe:  59.26 MiB / 59.26 MiB [----------] 100.00% 3.52 MiB p/s 17s
```

Q3.
Command : 
```
kubectl get pods
```

Response :
```
NAME                                   READY   STATUS    RESTARTS        AGE
kubernetes-bootcamp-658f6cbd58-9569g   1/1     Running   1 (2m35s ago)   10m
```

Q4.
Command : 
```
kubectl logs $POD_NAME
```

Response :
```
Kubernetes Bootcamp App Started At: 2025-10-29T14:06:53.318Z | Running On:  kubernetes-bootcamp-658f6cbd58-9569g
```

Q5.
Command : 
```
kubectl exec $POD_NAME -- cat /etc/os-release
```

Response :
```
PRETTY_NAME="Debian GNU/Linux 8 (jessie)"
NAME="Debian GNU/Linux"
VERSION_ID="8"
VERSION="8 (jessie)"
ID=debian
HOME_URL="http://www.debian.org/"
SUPPORT_URL="http://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

Q6.
Command : 
```
kubectl exec -it $POD_NAME -- bash
```

Response :
```
root@kubernetes-bootcamp-658f6cbd58-9569g:/# 
```

Q7.
Command : 
```
ls -la
```

Response :
```
root@kubernetes-bootcamp-658f6cbd58-9569g:/# ls -la
total 460
drwxr-xr-x   1 root root   4096 Oct 29 14:06 .
drwxr-xr-x   1 root root   4096 Oct 29 14:06 ..
-rwxr-xr-x   1 root root      0 Oct 29 14:06 .dockerenv
drwxr-xr-x   2 root root   4096 Jun  8  2016 bin
drwxr-xr-x   2 root root   4096 May 30  2016 boot
-rw-------   1 root root 393216 Jun  9  2016 core
drwxr-xr-x   5 root root    360 Oct 29 14:06 dev
drwxr-xr-x   1 root root   4096 Oct 29 14:06 etc
drwxr-xr-x   2 root root   4096 May 30  2016 home
drwxr-xr-x   1 root root   4096 Jun  9  2016 lib
drwxr-xr-x   2 root root   4096 Jun  8  2016 lib64
drwxr-xr-x   2 root root   4096 Jun  8  2016 media
drwxr-xr-x   2 root root   4096 Jun  8  2016 mnt
drwxr-xr-x   2 root root   4096 Jun  8  2016 opt
dr-xr-xr-x 262 root root      0 Oct 29 14:06 proc
drwx------   1 root root   4096 Jul 22  2016 root
drwxr-xr-x   1 root root   4096 Oct 29 14:06 run
drwxr-xr-x   2 root root   4096 Jun  8  2016 sbin
-rw-r--r--   1 root root    742 Jul 29  2016 server.js
drwxr-xr-x   2 root root   4096 Jun  8  2016 srv
dr-xr-xr-x  12 root root      0 Oct 29 14:06 sys
drwxrwxrwt   1 root root   4096 Jul 22  2016 tmp
drwxr-xr-x   1 root root   4096 Jul 22  2016 usr
drwxr-xr-x   1 root root   4096 Jul 22  2016 var
```

Q8.
Command : 
```
curl localhost:8080
```

Response :
```
Hello Kubernetes bootcamp! | Running on: kubernetes-bootcamp-658f6cbd58-9569g | v=1
```

Q9.
Command : 
```
kubectl port-forward pod/$POD_NAME 8080:8080
```

Response :
We can now acces to the website using : http://localhost:8080/