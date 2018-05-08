import { Module, Global } from '@nestjs/common';
import { FusedbProvider } from './fusedb.provider';

@Global()
@Module({
  providers: [...FusedbProvider],
  exports: [...FusedbProvider],
})

export class DatabaseModule {}