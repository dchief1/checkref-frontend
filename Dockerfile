FROM node:lts-alpine AS BUILD_IMAGE

# Work Directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install Dependencies
RUN yarn --fronzen-lockfile --production=true

COPY . .

# build application
RUN yarn build

# remove development dependencies
RUN npm prune --production


# ------------------------ SECOND IMAGE ------------------------

FROM node:lts-alpine

# Work Directory
WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app .


EXPOSE 3000

CMD [ "yarn", "start" ]
