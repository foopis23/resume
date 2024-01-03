FROM node:18-alpine as builder
WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.25-alpine as rumtime
COPY --from=builder /home/node/app/templates /etc/nginx/templates
COPY --from=builder /home/node/app/dist/index.html /usr/share/nginx/html

EXPOSE 80
