function baseHeading(type = 'p') {
  return {
    name: type,
    iconURL: `https://dummyimage.com/100x100/fff/000.png&text=${type}`,
    exec(editor) {
      const parser = new DOMParser();
      const preHtml = editor.selection.getHTML();
      // myString = myString.replace(/(\r\n|\n|\r)/gm, "<br />");
      const el = parser.parseFromString(preHtml, 'text/html');
      const choosedText = el.body.innerText;
      editor.selection.insertHTML(`<${type}>${choosedText}</${type}>`);
    },
  };
}


const extraButtons = {
  p: baseHeading(),
  h1: baseHeading('h1'),
  h2: baseHeading('h2'),
  h3: baseHeading('h3'),
  h4: baseHeading('h4'),
  h5: baseHeading('h5'),
  h6: baseHeading('h6'),
};
const dummy = null;

export {
  extraButtons,
  dummy,
};
