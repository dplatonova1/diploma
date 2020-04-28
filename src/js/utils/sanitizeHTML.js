export function sanitizeHTML (str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };