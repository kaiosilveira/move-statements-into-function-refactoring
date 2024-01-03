export function renderPerson(_outStream, aPerson) {
  const result = [];
  result.push(`<p>${aPerson.name}</p>`);
  result.push(renderPhoto(aPerson.photo));
  result.push(emitPhotoData(aPerson.photo));
  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n');
}

function renderPhoto(_aPhoto) {
  return `<p>🌃</p>`;
}

function emitPhotoData(aPhoto) {
  return [
    `<p>title: ${aPhoto.title}</p>`,
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n');
}
