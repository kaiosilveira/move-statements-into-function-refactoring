import { photoDiv, renderPerson } from './index';

const photo = { title: 'Me', location: 'Paris', date: new Date('2020-01-01') };
const person = { name: 'Kaio', photo };

describe('renderPerson', () => {
  it('should create markup for a person', () => {
    const markup = renderPerson({}, person);

    expect(markup).toEqual(
      [
        '<p>Kaio</p>',
        '<p>🌃</p>',
        '<p>title: Me</p>',
        '<p>location: Paris</p>',
        '<p>date: Wed Jan 01 2020</p>',
      ].join('\n')
    );
  });
});

describe('photoDiv', () => {
  it('should create markup for a photo', () => {
    expect(photoDiv(photo)).toEqual(
      [
        '<div>',
        '<p>title: Me</p>',
        '<p>location: Paris</p>',
        '<p>date: Wed Jan 01 2020</p>',
        '</div>',
      ].join('\n')
    );
  });
});
