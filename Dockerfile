FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
