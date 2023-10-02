# Selecting a base image
FROM node:19.6-bullseye-slim

# setting working directory
WORKDIR /usr/app

# copying the package.json file
COPY package.json ./
COPY package-lock.json ./

# installing the dependencies
RUN npm install 

# copy the source code
COPY --chown=node:node . .


# Exposing the port for vite server
EXPOSE 5173

# running the vite development server
CMD ["npm","run","dev"]