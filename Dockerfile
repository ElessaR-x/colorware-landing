# Base image
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kaynak kodları kopyala
COPY . .

# Next.js uygulamasını build et
RUN npm run build

# Uygulamayı çalıştır
CMD ["npm", "start"]

# Port 3000'i dışa aç
EXPOSE 3000 