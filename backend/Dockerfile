FROM node:18-alpine

WORKDIR /app

# Install dependencies required for Prisma
RUN apk add --no-cache python3 make g++ postgresql-client

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma files specifically
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Copy wait-for script to ensure database is ready
COPY ./scripts/wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

# Create start script
RUN echo "#!/bin/sh\n\
/wait-for-db.sh db:5432 -- npx prisma migrate deploy\n\
npm run dev" > /start.sh && chmod +x /start.sh

EXPOSE 4000

CMD ["/start.sh"]
