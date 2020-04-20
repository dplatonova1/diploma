import notFound from '../../images/not-found.svg';

export function imageChecker(url) {

let regex=/^(https:)$/gmi;

// console.log(this.onerror)
if (url===null || url.match(regex) || url===''){
   return url = notFound;
} else {
    return url;
}
}

