function translate(str) {
 var words = str.split(' ');
 for (var word in words) {
    var re = /^([^a|e|i|o|u]+)(\w*)/gi;
    var arr = words[word].split(re);
    
    if (!re.exec(words[word])) {
        arr.push('way');
        words[word] = arr.join('');
    } else {
        arr.splice(3, 0, arr[1] + 'ay');
        words[word] = arr.slice(2).join('');
    }
 }
 return words.join(' ');
}

translate("you know, I was young once too");
