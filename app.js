const accountSid = AC3bde980418244db77dfe1e7bb992eed3;
const authToken = 88fcfbef539a9e745195fa1f913abfc6;
const notifyServiceSid = IS7d840ce0bcd3eab4d9c0e0b7fb999240;

const client = require('twilio')(AC3bde980418244db77dfe1e7bb992eed3, 88fcfbef539a9e745195fa1f913abfc6);

client.notify.services(IS7d840ce0bcd3eab4d9c0e0b7fb999240)
  .notifications.create({
    toBinding: JSON.stringify([
      binding_type: 'sms', address: '6477073954',
      binding_type: 'sms', address: '647-863-9232',
    ]),
    body: 'Test message!'
  })
  .then(notification => console.log(IS7d840ce0bcd3eab4d9c0e0b7fb999240))
  .catch(error => console.log(error));
