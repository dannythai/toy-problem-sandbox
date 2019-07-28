
/**
 * https://leetcode.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 */

const codeMap = {
    'a': ".-",
    'b': "-...",
    'c': "-.-.",
    'd': "-..",
    'e': ".",
    'f': "..-.",
    'g': "--.",
    'h': "....",
    'i': "..",
    'j': ".---",
    'k': "-.-",
    'l': ".-..",
    'm': "--",
    'n': "-.",
    'o': "---",
    'p': ".--.",
    'q': "--.-",
    'r': ".-.",
    's': "...",
    't': "-",
    'u': "..-",
    'v': "...-",
    'w': ".--",
    'x': "-..-",
    'y': "-.--",
    'z': "--.."
}

var uniqueMorseRepresentations = function(words) {
    let results = [];
    results = words.map(word => {
        let morse = ""
        for (let i = 0; i< word.length; i++) {
            const char = word[i];
            morse += codeMap[char];
        }
        return morse;
    });
    const dedupe = {};
    results.forEach(res => {
        dedupe[res] = true;
    });
    
    const numOfTransforms = Object.keys(dedupe).length;
    return numOfTransforms;
};