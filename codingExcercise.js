#!/usr/bin/env node

const changeNumberToWords = (number) => {
    if(number !== undefined) {
        let string = number.toString();
        // check if the number is zero
        if (number === 0) {
            return 'zero';
        }
    
        let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
        let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        let scales = ['', 'thousand', 'million', 'billion'];
    
        let start = string.length;
        let chunks = [];
        while (start > 0) {
            let end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
    
        let chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
    
        let words = [];
        let word = '';
        for (let i = 0; i < chunksLen; i++) {
    
            let chunk = parseInt(chunks[i]);
    
            if (chunk) {
                
                let ints = chunks[i].split('').reverse().map(parseFloat);
    
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
    
                if ((word = scales[i])) {
                    words.push(word);
                }
    
                if ((word = ones[ints[0]])) {
                    words.push(word);
                }
    
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }

                if ((word = ones[ints[2]])) {
                    words.push(word + ' hundred');
                }
    
            }
    
        }
    
        return words.reverse().join(' ');

    }

    return "You have to provide a number";
};

module.exports = changeNumberToWords;
