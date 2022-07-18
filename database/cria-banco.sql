CREATE TYPE "cardsTypes" AS ENUM ('credit', 'debit', 'both');

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
)

CREATE TABLE "credentials"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "URL" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE "notes"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE "cards"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "printedName" TEXT NOT NULL,
    "CVV" TEXT NOT NULL,
    "expireDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOL NOT NULL DEFAULT FALSE,
    "type" "cardsTypes" NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES users(id)
);