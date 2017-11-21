const { createMessage } = require('./message-factory');

const messengerIdentity = require('./protocol/identity').MESSENGER;

const arnauxCheckin = 'checkin';

exports.checkin = function (identity) {
    if (!identity) {
        throw new TypeError('Identity is required for arnaux checkin message');
    }

    return createMessage(messengerIdentity, { name: arnauxCheckin, identity });
};
