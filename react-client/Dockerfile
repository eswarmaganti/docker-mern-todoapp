# Selecting a base image
FROM node:19.6-bullseye-slim as build

# setting working directory
WORKDIR /usr/app

# copying the package.json file
COPY package.json ./
COPY package-lock.json ./

# installing the dependencies
RUN --mount=type=cache,target=/usr/app/.npm \
    npm set cache /usr/app/.npm && \
    npm install 

# copy the source code
COPY --chown=node:node . .

# building the static files
RUN npm run build

# Choosing nginx base image
FROM nginxinc/nginx-unprivileged:1.23-alpine-perl

# copying nginx.conf
COPY --link nginx.conf /etc/nginx/conf.d/default.conf

# copying the react static build
COPY --link --from=build usr/app/dist /usr/share/nginx/html

EXPOSE 80
