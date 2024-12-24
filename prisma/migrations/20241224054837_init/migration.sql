-- CreateEnum
CREATE TYPE "ComplianceType" AS ENUM ('GDPR', 'HIPAA', 'PCRDSS');

-- CreateEnum
CREATE TYPE "PriorityLevel" AS ENUM ('HIGH', 'LOW', 'MEDIUM');

-- CreateEnum
CREATE TYPE "RulesType" AS ENUM ('INPUTVALIDATION', 'OUTPUTFILTER', 'GENERALCONSTRAINTS');

-- CreateTable
CREATE TABLE "Guardrails" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rules" VARCHAR(255) NOT NULL,
    "pdfImage" TEXT,
    "compliancetype" "ComplianceType",
    "prioritylevel" "PriorityLevel" NOT NULL DEFAULT 'LOW',
    "rulestype" "RulesType" NOT NULL DEFAULT 'GENERALCONSTRAINTS',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Guardrails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "isLoggedIn" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Guardrails" ADD CONSTRAINT "Guardrails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
