import { FuseDB, FileAdapter } from 'fusedb';

export const FusedbProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      const dbConnection = FuseDB.setup({ 
        adapter : FileAdapter({
          path: process.env.FUSEDB_PATH,
          database: process.env.FUSEDB_DATABASE 
        }) 
      });
      return dbConnection;
    },
  },
];