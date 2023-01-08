FROM node

WORKDIR /usr/app

COPY package.json ./

RUN apt-get -qy update && apt-get -qy install openssl

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]