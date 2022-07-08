# Run a Node.js script in Docker
FROM node:latest

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

CMD [ "npx", "node", "index.js" ]
