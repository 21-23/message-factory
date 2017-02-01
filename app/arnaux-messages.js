const { createMessage } = require('./message-factory');

const arnauxDestination = 'messenger';
const arnauxChekin = 'checkin';

exports.checkin = function (identity) {
    if (!identity) {
        throw new TypeError('Identity is required for arnaux checkin message');
    }

    return createMessage(arnauxDestination, { name: arnauxChekin, identity });
};
