.PHONY: setup

setup:
	npm install
	npx prisma db pull
	npx prisma generate
	npx prisma generate --sql

	echo "Setup complete ✅"