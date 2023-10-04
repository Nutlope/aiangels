# [aiangels.fund](https://www.aiangels.fund)

A list of active angel investors that invest in AI startups.

[![AI Angels screenshot](./public/og-image.png)](https://aiangels.fund/)

## Powered by

This example is powered by the following services:

- Next.js App Router (Framework)
- Vercel Postgres & Prisma (Database)
- Vercel (Analytics and hosting)
- Tailwind (CSS Framework)

## Future Tasks

- [ ] Dark mode
- [ ] Profile pages with a full angel investor profile. Should include all the info in the table + maybe sections like previous investments

# Installation

Follow the steps below to install and setup the project:

## Step 1: Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Nutlope/aiangels.git
```

Navigate into the `aiangels` directory
```bash
cd aiangels
```

## Step 2: Install Node.js and npm/yarn

Ensure that you have Node.js and npm or yarn installed on your machine. You can download Node.js and npm from [here](https://nodejs.org/en/download/). If you prefer yarn, you can install it using the following command:

```bash
npm install -g yarn
```

## Step 3: Install Dependencies

Navigate to the project directory and install the required dependencies using the following command:

```bash
npm i
```

Or if you are using yarn:

```bash
yarn install
```

## Step 4: Setup Environment Variables

Create a `.env` file in the root directory of the project and add the following:

```bash
POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

Replace `user`, `password`, `localhost`, `5432`, `mydb`, and `public` with your PostgreSQL credentials.

## Step 5: Run the Project

Finally, you can run the project using the following command:

```bash
npm run dev
```

Or if you are using yarn:

```bash
yarn dev
```

You should now be able to access the project at `http://localhost:3000`.
