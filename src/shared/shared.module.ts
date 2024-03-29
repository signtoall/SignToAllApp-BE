import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
        JwtModule.registerAsync({
            imports: [ConfigModule],
                  useFactory: async (configService: ConfigService) => ({
                      secretOrPrivateKey: configService.get('JWT_SECRET'),
                      signOptions: {
                          expiresIn: 3600,
                      },
                  }),
                  inject: [ConfigService],
          }),
    ]
})
export class SharedModule {}
