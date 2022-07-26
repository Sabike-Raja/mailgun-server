import { Injectable } from '@nestjs/common';
import { NodeMailgun } from 'ts-mailgun';

@Injectable()
export class AppService {
  getHello(): any {
    return 'Hello';
  }

  saveConfiguration(data): any {
    // add your db save query here
  }

  sendOtp({ email, otp }): any {
    const DOMAIN = 'sandbox4a417f038e1749aeb51c9585868c33da.mailgun.org';
    const API_KEY = '087da351a96402cdc50e3f58d001864d-787e6567-521d8642';
    const mailer = new NodeMailgun();
    mailer.apiKey = API_KEY;
    mailer.domain = DOMAIN;
    mailer.fromEmail = 'josesabike@calibraint.com';
    mailer.fromTitle = 'Maxis CRM';
    mailer.init();
    return mailer
      .send(email, `Test Mailgun`, `text: ${otp}`)
      .then((result) => {
        console.log('Done', result);
        return result;
      })
      .catch((error) => {
        console.error('Error: ', error);
        return error;
      });
  }
}
