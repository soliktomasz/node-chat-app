var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = "Test";
        var text = "Test message"
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
    })
});

describe('generateLocationMessage', () => {
    it('Should generate correct location message object', () => {
        var from = "Test";
        var latitude = "52.4112655";
        var longitude = "16.9405408";
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({ from, url: `https://google.com/maps?q=${latitude},${longitude}` });
    })
});