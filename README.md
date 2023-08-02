## https-proxy-test

use nodejs axios to get a url to test the http(s) proxy server availability.

## usage

```shell
# use latest image
# please replace all env value x
docker run --rm -w /app -e PROXY_AUTH_USERNAME=x -e PROXY_AUTH_PASSWORD=x -e PROXY_HOST=x ilaipi/https-proxy-test

# or create a .env
cp env.example .env
# edit .env
docker run --rm -w /app --env-file .env ilaipi/https-proxy-test
```

## sample usage

run squid-container on the same host to test

```shell
# start squid-container
# @see https://hub.docker.com/r/ilaipi/squid-https
docker run --restart always --name squid-container -dit -v $PWD/certs:/etc/squid/certs -p 30128:3128 -p 30129:3129 ilaipi/squid-https

docker run --rm -w /app --link squid-container -e PROXY_AUTH_USERNAME=proxy_admin -e PROXY_AUTH_PASSWORD=g7LnsN05RLoicbVLGQ -e PROXY_HOST=squid-container -e PROXY_PORT=3129 ilaipi/https-proxy-test
```
