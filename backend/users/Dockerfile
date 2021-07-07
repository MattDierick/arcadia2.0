FROM node:12

ENV WEBPORT 8080
ENV USERSAPIHOST arcadia-users
ENV LOGINAPIHOST arcadia-login
ENV CASHTAPIHOST arcadia-cash-transfer
ENV STOCKTAPIHOST arcadia-stock-transfer
ENV STOCKSAPIHOST arcadia-stocks
ENV DB arcadia-db

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .

EXPOSE 8080
CMD ["sh","-c", "node index.js --db=$DB --webPort=$WEBPORT --usersApiHost=$USERSAPIHOST --loginApiHost=$LOGINAPIHOST --cashtApiHost=$CASHTAPIHOST --stocktApiHost=$STOCKTAPIHOST --stocksApiHost=$STOCKSAPIHOST"]
