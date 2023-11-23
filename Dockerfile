FROM node:latest AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM tomcat:latest

COPY --from=builder /app/dist/ /usr/local/tomcat/webapps/ecommerce
