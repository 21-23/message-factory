const { createMessage } = require('../message-factory');

const identity = require('./identity').INIT_SERVICE;

// a-z order, please
const MESSAGE_NAME = {
    participantCreated: 'participant.created'
};

exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantCreated = function (participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantCreated, participantId });
};
