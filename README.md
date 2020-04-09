# JSintro
Introduction for JavaScript, including some lessons that cover different topics.

## Setting up NodeJS
#### Installing and download
* Go and [download](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi) NodeJS
* Install NodeJS on your computer by executing the downloaded .exe-file
  * Just use the standard configuration the installer suggests
#### Configure NodeJS
* To be able to access NodeJS servers, proxy server must be set
* Open command line tool and run following commands 
``` 
//First this (don't forget to enter username and password)
npm config set proxy http://"<username>:<password>"@10.9.104.20:8080/

//Second this to deactivate SSL certification 
npm config set strict-ssl false

//Third to test if connection was made
npm ping
```

## Setting up GIT and GitHub project on desktop 
#### Installing and download
* Go and [download](https://git-scm.com/download/win) GIT
* Install GIT on your computer by executing the downloaded .exe-file
#### Configure GIT
* To be able to access GitHub, proxy server must be set
* Open command line tool and run following commands 
``` 
//First this (don't forget to enter username and password)
git config --global http.proxy http://"<username>:<password>"@10.9.104.20:8080/

//Second this to deactivate SSL certification 
git config http.sslVerify false
```
#### Checkout repository from GitHub
* Go to GitHub and get the link to the desired repository 
* Create a new folder on your system 
* Open this folder in command line tool 
* Run following command
``` 
git clone <URL repository>
```
* Cd into the the downloaded project folder
 



