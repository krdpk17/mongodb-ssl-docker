# mongodb-docker
 
## Step to start server

docker-compose up -d

## To verify Setup

### TLS verification
* docker logs -f <mongo-server-container-file>
* Look for log line with ["ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"on"}}]


## Other hints

### Python client to test TLS


### To access server via web
* In browser paste "http://localhost:8081" url and enter

### To stop server
docker-compose down

### To disable non-sercure connection
* Open the mongod.conf
* Edit net.tls.mode to requireTLS

### To disable TLS

* Open the mongod.conf
* Edit net.tls.mode to disable

### Links
https://sites.google.com/site/jbsakabffoi12449ujkn/
