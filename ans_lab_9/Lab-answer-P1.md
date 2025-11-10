3. Enter to a container and curl localhost

![1.3.1](../images/1.3.1.png)

![1.3.2](../images/1.3.2.png)

4. Create index.html file with some content inside a container

![1.4](../images/1.4.png)

5. Verify

![1.5.1](../images/1.5.1.png)

emptyDir lives only as long as the Pod exists, nothing more.

![1.5.2](../images/1.5.2.png)

emptyDir is reset only when the Pod is deleted, not when a container restarts.
