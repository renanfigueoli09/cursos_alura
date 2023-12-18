FROM node:18-alpine
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 80:80
CMD  cd /app && npm install && npm start
