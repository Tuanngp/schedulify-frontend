const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  // Xóa dữ liệu cũ
  await prisma.user.deleteMany()

  // Tạo user thường
  const hashedPassword = await bcrypt.hash("123456", 12)
  
  await prisma.user.create({
    data: {
      name: "User Demo",
      email: "user@demo.com",
      hashedPassword,
      role: "USER",
      emailVerified: new Date(),
    },
  })

  // Tạo user premium
  await prisma.user.create({
    data: {
      name: "Premium User",
      email: "premium@demo.com",
      hashedPassword,
      role: "PREMIUM",
      emailVerified: new Date(),
    },
  })

  // Tạo admin
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@demo.com",
      hashedPassword,
      role: "ADMIN",
      emailVerified: new Date(),
    },
  })

  console.log("Seeded database successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 