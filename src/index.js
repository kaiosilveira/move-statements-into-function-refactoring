export function renderPerson(_outStream, aPerson) {
  const result = [];
  result.push(`<p>${aPerson.name}</p>`);
  result.push(renderPhoto(aPerson.photo));
  result.push(zznew(aPerson.photo));
  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', zznew(p), '</div>'].join('\n');
}

function renderPhoto(_aPhoto) {
  return `<p>🌃</p>`;
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function zznew(p) {
  return [
    `<p>title: ${p.title}</p>`,
    `<p>location: ${p.location}</p>`,
    `<p>date: ${p.date.toDateString()}</p>`,
  ].join('\n');
}
