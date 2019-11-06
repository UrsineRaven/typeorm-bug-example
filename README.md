# TypeORM Bug Example

A small example repo for reproducing the bug reported in [issue #5047](https://github.com/typeorm/typeorm/issues/5047);  

Steps to run this project:

1. Run `npm i` command
2. Run `node index.js` command

## Explaination of bug

When you add the column to return the id of a relationship, it does not return the
id for entities added to the database after that point. The console logging walks
you through this and better shows the issue.
