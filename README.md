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
