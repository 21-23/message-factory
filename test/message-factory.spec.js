/* global describe, it */

const assert = require('assert');

const messageFactory = require('../app/message-factory');

describe('message factory', () => {

    describe('createMessage', () => {
        it('should return a string ready to be sent to messanger', () => {
            const message = messageFactory.createMessage('destination', 'type', { payload: 'payload' });

            assert.equal(typeof message, 'string');
        });
        it('should throw if destination is not passed', () => {
            assert.throws(() => {
                messageFactory.createMessage(null, 'type', { payload: 'payload' });
            }, TypeError);
        });
        it('should throw if message type is not passed', () => {
            assert.throws(() => {
                messageFactory.createMessage('destination', '', { payload: 'payload' });
            }, TypeError);
        });
    });

    describe('parsePayload', () => {
        it('should return the same value as passed if payload is empty-ish', () => {
            const payload = null;
            const result = messageFactory.parsePayload(payload);

            assert.equal(result, payload);
        });
        it('should return the same object if it is not a string', () => {
            const payload = { pay: 'load' };
            const result = messageFactory.parsePayload(payload);

            assert.equal(result, payload);
        });
        it('should correctly parse the given payload-string', () => {
            const payload = '{"pay":"load"}';
            const result = messageFactory.parsePayload(payload);

            assert.deepEqual(result, { pay: 'load' });
        });
    });

    describe('parseMessage', () => {
        it('should throw if message is not passed', () => {
            assert.throws(() => {
                messageFactory.parseMessage();
            }, TypeError);
        });
        it('should correctly parse the given message', () => {
            const messageStr = '{"destination":"dest","type":"type","payload":"{\\"pay\\":\\"load\\"}"}';
            const message = messageFactory.parseMessage(messageStr);

            assert.deepEqual(message, { destination: 'dest', type: 'type', payload: '{"pay":"load"}' });
        });
        it('should correctly parse the given message and payload', () => {
            const messageStr = '{"destination":"dest","type":"type","payload":"{\\"pay\\":\\"load\\"}"}';
            const message = messageFactory.parseMessage(messageStr, true);

            assert.deepEqual(message, { destination: 'dest', type: 'type', payload: { pay: 'load' } });
        });
    });

});
