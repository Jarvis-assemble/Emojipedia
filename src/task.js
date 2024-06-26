import emojipedia from "./emojipedia";
//substring(0, 100);
function truncate(obj) {
  return obj.meaning.substring(0, 100); //(included,excluded)
}
const newarr = emojipedia.map(obj);
console.log(newarr);

/*import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia); */
