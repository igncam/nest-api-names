import { Module } from '@nestjs/common';

import { NamesModule } from './modules/names/names.module';

@Module({
  controllers: [],
  providers: [],
  imports: [NamesModule],
})
export class AppModule {}
