FROM node:latest AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=production

# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy the build output from your local machine to the Nginx container
# Replace `your-app-name` with the name of your Angular project

COPY ./nginx.config /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/barra-libre-pos-v2/browser /usr/share/nginx/html/

EXPOSE 4201
