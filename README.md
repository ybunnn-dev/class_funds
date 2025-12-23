# Class Funds – Class Treasurer Management System

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.19.0-2D3748)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1)

**Class Funds** is a full-stack web application designed to help **class treasurers** manage class finances efficiently and transparently. It enables secure user authentication, structured class sections, contribution tracking, and an intuitive dashboard for financial oversight.

Built with **Next.js 16 (App Router)**, **Prisma**, **MySQL**, and **Tailwind CSS**, this project is production-ready and optimized for modern web development.

---

## ✨ Features

* 🔐 **User Authentication** – Secure signup & login using JWT-based sessions
* 🏫 **Class Sections** – Organize students by sections (e.g., BSIT 3-A)
* 💰 **Contributions Tracking** – Record and monitor class fund payments
* 📊 **Dashboard Overview** – Treasurer-focused analytics per section
* 📱 **Responsive Design** – Mobile-first dashboard with a sliding auth UI
* 🗄 **MySQL Backend** – Reliable relational database with Prisma ORM
* 🛡 **Protected Routes** – Middleware-secured dashboard access

---

## 🛠 Tech Stack

### Frontend

* Next.js 16 (App Router)
* React 19
* Tailwind CSS 4
* TypeScript

### Backend

* Prisma ORM 6.19
* MySQL
* NextAuth v5 (Credentials Provider)

### Authentication & Utilities

* JWT Sessions
* bcrypt
* Zod Validation
* Lucide React Icons

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/ybunnn-dev/class_funds.git
cd class_funds
npm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Update `.env` with your credentials:

```env
# MySQL Database
DATABASE_URL="mysql://root:yourpassword@localhost:3306/class_funds"

# NextAuth
NEXTAUTH_SECRET="your-super-secret-key-32-chars-minimum"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Create database
mysql -u root -p -e "CREATE DATABASE class_funds;"

# Run migrations
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Development Server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```text
app/
├── api/
│   ├── auth/[...nextauth]/route.ts   # NextAuth API
│   └── signup/route.ts               # User registration
├── lib/prisma.ts                     # Prisma singleton
├── models/user.ts                    # User data access layer
├── providers.tsx                     # NextAuth SessionProvider
├── middleware.ts                     # Route protection
└── view/auth/login/                  # Sliding authentication UI
```

---

## 🌟 Usage Flow

1. **Signup** – Create an account and assign a class section
2. **Login** – Access via a clean, sliding authentication UI
3. **Dashboard** – View contributions and manage class funds
4. **Protected Access** – All dashboard routes are secured by middleware

---

## 🔧 Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
npm run deps    # List project dependencies
```

---

## 🐛 Troubleshooting

| Issue                     | Solution                                           |
| ------------------------- | -------------------------------------------------- |
| Prisma types missing      | `npx prisma generate`                              |
| Auth 500 error            | `rm -rf .next && npm run dev`                      |
| Database connection error | Verify `DATABASE_URL` in `.env`                    |
| Session issues            | Ensure `NEXTAUTH_SECRET` is at least 32 characters |

---

## 📦 Dependencies

### Production

* `@prisma/client@6.19.0`
* `bcrypt@6.0.0`
* `next-auth@5.0.0-beta.30`
* `next@16.0.3`
* `react@19.2.0`

### Development

* `prisma@6.19.0`
* `typescript@5.9.3`
* `eslint@9.39.2`
* `tailwindcss@4.1.18`

---

## 📱 Screenshots

![Dashboard](screenshots/dashboard.png)
![Contributions](screenshots/contributions.png)
![Students](screenshots/students.png)
![Profile](screenshots/profile.png)
---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your branch

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

Built for **class treasurers and student organizations** by full-stack developers.

⭐ If this project helps your class manage funds better, consider starring the repository!
