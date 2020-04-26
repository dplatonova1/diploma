export function countMentions (elem, value) {
    let regex = new RegExp(value, 'gmi')
    return elem.match(regex);
  };