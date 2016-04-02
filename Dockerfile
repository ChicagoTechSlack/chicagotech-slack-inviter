FROM node:5.1.1

ENV PORT 3000

RUN npm install -g gulp bower grunt-cli
ADD . /srv/www

WORKDIR /srv/www

RUN npm install --unsafe-perm
RUN gulp

EXPOSE 3000

CMD ./bin/slackin --channels "$SLACK_CHANNELS" --port $PORT $SLACK_SUBDOMAIN $SLACK_API_TOKEN
