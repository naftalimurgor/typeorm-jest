# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Mocking Entities
https://www.npmjs.com/package/@golevelup/ts-jest

```typescript
import {createMock} from ''@golevelup/ts-jest'
createMock<Entity>()
```