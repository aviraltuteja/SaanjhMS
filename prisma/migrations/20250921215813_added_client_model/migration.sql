-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('NeverMarried', 'Divorced', 'Widowed', 'Separated');

-- CreateEnum
CREATE TYPE "public"."Diet" AS ENUM ('Jain', 'Veg', 'Eggetarian', 'NonVeg');

-- CreateEnum
CREATE TYPE "public"."Religion" AS ENUM ('Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi', 'Jewish', 'Other');

-- CreateTable
CREATE TABLE "public"."Client" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "imageUrl" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "timeOfBirth" TEXT,
    "placeOfBirth" TEXT,
    "rashi" TEXT,
    "height" TEXT,
    "weight" INTEGER,
    "maritalStatus" "public"."MaritalStatus" NOT NULL,
    "complexion" TEXT,
    "diet" "public"."Diet" NOT NULL,
    "drink" BOOLEAN NOT NULL DEFAULT false,
    "smoke" BOOLEAN NOT NULL DEFAULT false,
    "hobbies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "religion" "public"."Religion" NOT NULL,
    "motherTongue" TEXT,
    "caste" TEXT,
    "subCaste" TEXT,
    "gotra" TEXT,
    "manglik" BOOLEAN NOT NULL DEFAULT false,
    "education" TEXT,
    "collegeName" TEXT,
    "collegeYear" INTEGER,
    "schoolName" TEXT,
    "schoolYear" INTEGER,
    "otherDegree" TEXT,
    "otherOrg" TEXT,
    "otherYear" INTEGER,
    "employedIn" TEXT,
    "workingSince" INTEGER,
    "organization" TEXT,
    "annualIncome" TEXT,
    "familyType" TEXT,
    "fatherName" TEXT,
    "fatherOccupation" TEXT,
    "motherName" TEXT,
    "motherOccupation" TEXT,
    "familyIncome" TEXT,
    "permanentAddress" TEXT,
    "residentialAddress" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "numberOfCars" INTEGER DEFAULT 0,
    "numberOfBikes" INTEGER DEFAULT 0,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_userId_key" ON "public"."Client"("userId");

-- AddForeignKey
ALTER TABLE "public"."Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
