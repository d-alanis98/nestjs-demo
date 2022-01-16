declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DB_HOST: string,
        DB_PORT: number,
        DB_DATABASE: string,
        DB_USERNAME: string,
        DB_PASSWORD: string
        DB_CONNECTION: 'mysql' | 'mariadb' | 'postgres' | 'mongodb',
        [key: string]: string,
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}