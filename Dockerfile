FROM node:15.10.0-alpine3.10 as build
WORKDIR /dgm
ENV PATH /dgm/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

FROM nginx:1.19.7-alpine
COPY --from=build /dgm/build /usr/share/nginx/html
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

