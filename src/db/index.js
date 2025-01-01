import fs from 'node:fs/promises'
    import path from 'node:path'

    const DB_PATH = path.join(process.cwd(), 'data', 'db.json')

    async function initDB() {
      try {
        await fs.access(DB_PATH)
      } catch {
        await fs.mkdir(path.dirname(DB_PATH), { recursive: true })
        await fs.writeFile(DB_PATH, JSON.stringify({
          settings: {},
          users: []
        }))
      }
    }

    export async function getSettings() {
      await initDB()
      const data = await fs.readFile(DB_PATH, 'utf-8')
      return JSON.parse(data).settings
    }

    export async function saveSettings(settings) {
      await initDB()
      const data = await fs.readFile(DB_PATH, 'utf-8')
      const db = JSON.parse(data)
      db.settings = { ...db.settings, ...settings }
      await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    }
