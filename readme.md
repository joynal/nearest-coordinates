## Overview

The program read log file as a stdin and NodeJS streams are compatible with the stdin. So no need to handle filesystem code. It can easily process larger file without any problem(until defined variable's memory allocation exceeds, which can be extended with database).

## Install packages

```bash
npm i
```

## Run test

```bash
npm run test
```

## Build project

```bash
npm run build
```

## How to run

After `cat` command place your log file path.

```bash
cat data/customers.txt | node dist/main.js
```
