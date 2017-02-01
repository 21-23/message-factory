/* global describe, it */

const assert = require('assert');

const messageFactory = require('../app/message-factory');

describe('message factory', () => {

    describe('createMessage', () => {
        it('should return a string ready to be sent to messanger', () => {
            const message = messageFactory.createMessage('destination', { payload: 'payload' });

            assert.equal(typeof message, 'string');
        });
        it('should throw if destination is not passed', () => {
            assert.throws(() => {
                messageFactory.createMessage(null, { payload: 'payload' });
            }, TypeError);
        });
    });

    describe('parseMessage', () => {
        it('should throw if message is not passed', () => {
            assert.throws(() => {
                messageFactory.parseMessage();
            }, TypeError);
        });
        it('should correctly parse the given message', () => {
            const messageStr = '{"to":"dest","message":{"pay":"load"}}';
            const message = messageFactory.parseMessage(messageStr);

            assert.deepEqual(message, { to: 'dest', message: { pay: 'load' } });
        });
    });

});
