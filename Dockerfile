FROM node:19-alpine AS build
WORKDIR /build
COPY . .
RUN yarn
RUN yarn build

FROM node:19-alpine
WORKDIR /app
COPY --from=build /build/dist .
RUN npm install --global serve
CMD ["serve", "-l", "80", "-s", "/app"]
EXPOSE 80