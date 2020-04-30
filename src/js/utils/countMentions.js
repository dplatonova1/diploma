export function countMentions (elem, value) {
    const regex = new RegExp(value, 'gmi')
    return elem.match(regex);
  };