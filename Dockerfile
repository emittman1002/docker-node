# Run a Node.js script in Docker
FROM node:latest

ARG port=2000
ENV port=$port

USER node

WORKDIR [ "/home/node/webhello/" ]
ADD --chown=node:node \
    ./index.js \
    ./package-lock.json \
    ./package.json \
    ./
ADD --chown=node:node \
    ./node_modules/ \
    ./node_modules/
ADD --chown=node:node \
    ./static/ \
    ./static/

ENTRYPOINT [ "npx", "node", "index.js" ]
CMD ["${port}"]
