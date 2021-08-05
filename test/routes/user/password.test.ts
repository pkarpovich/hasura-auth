import { Client } from 'pg';

import { request } from '../../server';
import { SignInTokens } from '../../../src/utils/tokens';
import { mailHogSearch } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

describe('user password', () => {
  let client: any;

  beforeAll(async () => {
    client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
  });

  afterAll(() => {
    client.end();
  });

  beforeEach(async () => {
    await client.query(`DELETE FROM auth.users;`);
  });

  it('should change password with old password', async () => {
    await request.post('/change-env').send({
      MFA_ENABLED: true,
      DISABLE_NEW_USERS: false,
      SIGNIN_EMAIL_VERIFIED_REQUIRED: false,
      WHITELIST_ENABLED: false,
    });

    let accessToken = '';

    const email = 'asdasd@asdasd.com';
    const password = '123123123';

    await request
      .post('/signup/email-password')
      .send({ email, password })
      .expect(200);

    const { body }: { body: SignInTokens } = await request
      .post('/signin/email-password')
      .send({ email, password })
      .expect(200);

    accessToken = body.accessToken as string;

    const oldPassword = password;
    const newPassword = '543543543';

    await request
      .post('/user/password')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ oldPassword, newPassword })
      .expect(200);

    await request
      .post('/signin/email-password')
      .send({ email, password: oldPassword })
      .expect(401);

    await request
      .post('/signin/email-password')
      .send({ email, password: newPassword })
      .expect(200);
  });

  it('should change password with ticket', async () => {
    await request.post('/change-env').send({
      MFA_ENABLED: true,
      DISABLE_NEW_USERS: false,
      SIGNIN_EMAIL_VERIFIED_REQUIRED: false,
      WHITELIST_ENABLED: false,
    });

    const accessToken = '';

    const email = 'asdasd@asdasd.com';
    const password = '123123123';

    await request
      .post('/signup/email-password')
      .send({ email, password })
      .expect(200);

    await request.post('/user/password/reset').send({ email }).expect(200);

    // get ticket from email
    const [message] = await mailHogSearch(email);
    expect(message).toBeTruthy();

    const ticket = message.Content.Headers['X-Ticket'][0];
    expect(ticket.startsWith('passwordReset:')).toBeTruthy();

    const emailType = message.Content.Headers['X-Email-Template'][0];
    expect(emailType).toBe('password-reset');

    const oldPassword = password;
    const newPassword = '543543543';

    await request
      .post('/user/password')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ticket: 'incorrect', newPassword })
      .expect(400);

    await request
      .post('/user/password')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ticket: `passwordReset:${uuidv4()}`, newPassword })
      .expect(401);

    await request
      .post('/user/password')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ticket, newPassword })
      .expect(200);

    await request
      .post('/signin/email-password')
      .send({ email, password: oldPassword })
      .expect(401);

    await request
      .post('/signin/email-password')
      .send({ email, password: newPassword })
      .expect(200);
  });
});