/*
  Warnings:

  - You are about to drop the `_DescToProjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectsToTechnology` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `secondIcon` on the `SkillIcons` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_DescToProjects_B_index";

-- DropIndex
DROP INDEX "_DescToProjects_AB_unique";

-- DropIndex
DROP INDEX "_ProjectsToTechnology_B_index";

-- DropIndex
DROP INDEX "_ProjectsToTechnology_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DescToProjects";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProjectsToTechnology";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_ProjectTechnologies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProjectTechnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectTechnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProjectDescriptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProjectDescriptions_A_fkey" FOREIGN KEY ("A") REFERENCES "Desc" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectDescriptions_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SkillIcons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_SkillIcons" ("color", "icon", "id", "name") SELECT "color", "icon", "id", "name" FROM "SkillIcons";
DROP TABLE "SkillIcons";
ALTER TABLE "new_SkillIcons" RENAME TO "SkillIcons";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectTechnologies_AB_unique" ON "_ProjectTechnologies"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectTechnologies_B_index" ON "_ProjectTechnologies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectDescriptions_AB_unique" ON "_ProjectDescriptions"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectDescriptions_B_index" ON "_ProjectDescriptions"("B");
