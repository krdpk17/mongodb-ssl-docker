# mongodb-docker
 
## Step to start server
```
sudo docker-compose up -d
```

## To verify Setup

### TLS verification
```
sudo docker logs -f [mongo-server-container-file]
```

* Look for log line with ["ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"on"}}]


## Other hints

### Python client to test TLS
https://github.com/krdpk17/mongoclient-helloworld

### To access server via web
* In browser paste "http://localhost:8081" url and enter

### To stop server
```
sudo docker-compose down
```

### To disable non-secure connection
* Open the mongod.conf
* Edit net.tls.mode to requireTLS

### To disable TLS

* Open the mongod.conf
* Edit net.tls.mode to disable
