import notFound from '../../images/not-found.svg';

export function imageChecker(url) {

let regex=/^(https:)$/gmi;

if (url===null || url.match(regex) || url===''){
   return url = notFound;
} else {
    return url;
}
}

