FROM node:lts-alpine as builder
WORKDIR /src
COPY . .
RUN npm i -g typescript
RUN tsc

FROM node:lts-alpine
WORKDIR /src
COPY --from=builder /src .
EXPOSE 3001
CMD ["npm", "start"]