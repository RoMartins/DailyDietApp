-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "inTheDiet" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);
