FROM node:18-alpine

    WORKDIR /app

    COPY package*.json ./

    RUN apk add --no-cache python3 make g++ \
        && npm install \
        && mkdir -p /app/data

    COPY . .

    ENV VITE_PORT=3452

    RUN npm run build

    EXPOSE 3452

    CMD ["npm", "run", "preview"]
