const { PrismaClient } =
  require('@prisma/client');
const { PrismaMariaDb } =
  require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = new PrismaClient({ adapter });
