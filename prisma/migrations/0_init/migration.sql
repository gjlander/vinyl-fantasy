-- CreateTable
CREATE TABLE "albums" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "artist" VARCHAR(255),
    "year" SMALLINT,
    "img_url" VARCHAR(510),
    "format" VARCHAR(255),
    "price" DECIMAL(5,2),
    "media" VARCHAR(255),
    "sleeve" VARCHAR(255),
    "spotify_url" VARCHAR(255),
    "comment" VARCHAR(10000),
    "genre" TEXT[],
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),
    "in_stock" BOOLEAN,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "profile_pic" VARCHAR(510),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

