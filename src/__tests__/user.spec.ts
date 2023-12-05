import { TestHelper } from "./TestHelper"

describe('User entity tests', () => {
    beforeAll(() => {
        TestHelper.instance.setupTestDB()
    })

    afterAll(() => {
        // wouldn't be great to mock all operations(no hitting db)
        TestHelper.instance.teardownTestDB()
    })
    
})