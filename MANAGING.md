check subgraph logs:

```
kubectl logs -n graph-node deployment/graphprotocol-node-index -f
```

handy port forwarding:

```
kubectl port-forward -n graph-node svc/graphprotocol-node-index 8020:8020 # graph node
kubectl port-forward -n graph-node svc/ipfs-ipfs 5001:5001 # ipfs
kubectl port-forward -n graph-node svc/graphprotocol-node-index 8030:8030 # admin panel
```
