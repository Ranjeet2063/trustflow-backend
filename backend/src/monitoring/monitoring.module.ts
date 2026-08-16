import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { MetricsService } from './metrics.service';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
  providers: [HealthService, MetricsService],
  exports: [HealthService, MetricsService],
})
export class MonitoringModule {}
