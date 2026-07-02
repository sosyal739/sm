const fs = require('fs');
const newPosts = require('./new_posts.js');

let content = fs.readFileSync('app/blog/[slug]/page.js', 'utf8');

// Find the index of 'google-ads-pmax-optimization'
const pmaxIndex = content.indexOf("'google-ads-pmax-optimization':");
if (pmaxIndex === -1) throw new Error('Could not find pmax post');

// Find the end of the blogPosts object. It's the last "};" before "export default function BlogDetailPage"
const exportIndex = content.indexOf('export default function BlogDetailPage');
if (exportIndex === -1) throw new Error('Could not find export');

const beforeExport = content.substring(0, exportIndex);
const lastBraceIndex = beforeExport.lastIndexOf('};');

// Generate the new string to inject.
let newContentStr = JSON.stringify(newPosts, null, 2);
newContentStr = newContentStr.substring(1, newContentStr.length - 1);

const newFileContent = content.substring(0, pmaxIndex) + newContentStr.trim() + '\n' + content.substring(lastBraceIndex);

fs.writeFileSync('app/blog/[slug]/page.js', newFileContent, 'utf8');
console.log('Successfully updated page.js');
