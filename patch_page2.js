const fs = require('fs');
const newPosts = require('./new_posts.js');

let content = fs.readFileSync('app/blog/[slug]/page.js', 'utf8');

// Find the index of 'google-ads-pmax-optimization'
const pmaxIndex = content.indexOf("    'google-ads-pmax-optimization': {");
if (pmaxIndex === -1) throw new Error('Could not find pmax post');

// Find the export default
const exportIndex = content.indexOf('export default function BlogDetailPage');
if (exportIndex === -1) throw new Error('Could not find export');

let newContentStr = JSON.stringify(newPosts, null, 2);
// Remove first '{' and last '}'
newContentStr = newContentStr.substring(1, newContentStr.length - 1);
// Ensure we just trim it correctly
newContentStr = newContentStr.trim();
// Prepend the spaces so it aligns
newContentStr = '    ' + newContentStr;

const newFileContent = 
  content.substring(0, pmaxIndex) + 
  newContentStr + 
  '\n}\n\n' + 
  content.substring(exportIndex);

fs.writeFileSync('app/blog/[slug]/page.js', newFileContent, 'utf8');
console.log('Successfully updated page.js');
