<!-- vscode-markdown-toc -->
* 1. [Pre-requisites (if any)](#Pre-requisitesifany)
* 2. [Step to start server](#Steptostartserver)
* 3. [To verify Setup](#ToverifySetup)
	* 3.1. [TLS verification](#TLSverification)
* 4. [Other hints](#Otherhints)
	* 4.1. [Python client to test TLS](#PythonclienttotestTLS)
	* 4.2. [To access server via web](#Toaccessserverviaweb)
	* 4.3. [To stop server](#Tostopserver)
	* 4.4. [To disable non-secure connection](#Todisablenon-secureconnection)
	* 4.5. [To disable TLS](#TodisableTLS)
	* 4.6. [Links](#Links)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --># mongodb-docker
 
##  1. <a name='Pre-requisitesifany'></a>Pre-requisites (if any)
* If dokcer-compose is not installed, refer https://docs.docker.com/compose/install/

##  2. <a name='Steptostartserver'></a>Step to start server

docker-compose up -d

##  3. <a name='ToverifySetup'></a>To verify Setup

###  3.1. <a name='TLSverification'></a>TLS verification
* docker logs -f [mongo-server-container-file]
* Look for log line with ["ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"on"}}]


##  4. <a name='Otherhints'></a>Other hints

###  4.1. <a name='PythonclienttotestTLS'></a>Python client to test TLS
https://github.com/krdpk17/mongoclient-helloworld

###  4.2. <a name='Toaccessserverviaweb'></a>To access server via web
* In browser paste "http://localhost:8081" url and enter.  
* Note: Browser should run in same machine where container is

###  4.3. <a name='Tostopserver'></a>To stop server
docker-compose down

###  4.4. <a name='Todisablenon-secureconnection'></a>To disable non-secure connection
* Open the mongod.conf
* Edit net.tls.mode to requireTLS

###  4.5. <a name='TodisableTLS'></a>To disable TLS

* Open the mongod.conf
* Edit net.tls.mode to disable

###  4.6. <a name='Links'></a>Links
https://sites.google.com/site/jbsakabffoi12449ujkn/
