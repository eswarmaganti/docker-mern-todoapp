# Multistage containers

# ----------------------- BASE Stage ------------------------------ #

# pinning the base image
FROM node:19.6-bullseye-slim as base

# setting working directory
WORKDIR /usr/app

# adding meta data
LABEL org.opencontiners.image.authors="maganti.ek@gmail.com"

# copying only the required files to download dependencies
COPY package*.json ./


# ------------------------------ Dev Stage ------------------------ #
# # using the base stage to create a dev image
# FROM base as dev


# # using cache mount for speeding up the dependency installation
# # installing only production dependencies using clean install

# RUN --mount=type=cache,target=/usr/app/.npm \
#     npm set cache /usr/app/.npm && \
#     npm install

# # copying the source code
# COPY . . 

# # running development server
# CMD ["npm","run","dev"]


# ----------------- Production image ----------------------#

# using base image to create production image
FROM base As production

# configuring the node environment 
ENV NODE_ENV production

# installing the production dependencies using cache mount
RUN --mount=type=cache,target=/usr/app/.npm \
    npm set cache /usr/app/.npm && \
    npm ci --only=production

# configuring non root user
USER node

# copying and owning the files to user
COPY  --chown=node:node src/ ./src/

EXPOSE 5000

CMD ["node","src/server.js"]