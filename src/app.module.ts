import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { QuotesModule } from './quotes/quotes.module';
import { NotesModule } from './notes/notes.module';
import { AlertsController } from './alerts/alerts.controller';
import { AlertsModule } from './alerts/alerts.module';

@Module({
  imports: [AuthModule, QuotesModule, NotesModule, AlertsModule],
  controllers: [AppController, AlertsController],
  providers: [AppService],
})
export class AppModule {}
