import { Module, Global } from '@nestjs/common';
import { FusedbProvider } from './fusedb.provider';

@Global()
@Module({
  components: [...FusedbProvider],
  exports: [...FusedbProvider],
})

export class DatabaseModule {}