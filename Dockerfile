FROM node:20 AS builder
WORKDIR /app
COPY frontend/package*.json frontend/yarn.lock* ./
RUN yarn install --frozen-lockfile || npm install
COPY frontend/ ./
RUN yarn build || npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
