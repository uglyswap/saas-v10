import { open } from 'sqlite'
    import sqlite3 from 'sqlite3'

    let db = null

    async function initializeDB() {
      if (!db) {
        db = await open({
          filename: './database.sqlite',
          driver: sqlite3.Database
        })

        await db.exec(`
          CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
          )
        `)
      }
      return db
    }

    export { initializeDB as default }
