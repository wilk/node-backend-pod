# node-backend-pod
node backend pode sample

## Usage
Create the pod and replica set:
```bash
$ kubectl create -f app-services.yml
```

Check the deployment status:
```bash
$ kubectl rollout status deployment/backend-node
```