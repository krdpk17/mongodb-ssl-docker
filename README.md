# mongodb-docker
 
## Step to start server

docker-compose up -d

## To verify Setup

### TLS verification
* docker logs -f <mongo-server-container-file>
* Look for log line with ["ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"on"}}]


## Other hints

### To stop server
docker-compose down

### To disable TLS

* Open the mongod.conf
* Edit net.tls.mode to disable

### Links
https://sites.google.com/site/jbsakabffoi12449ujkn/
