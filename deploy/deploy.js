const path = require('path');
const nodeCmd = require('node-cmd');
const config = require('./config.json');
const buildPath = path.join(__dirname, '../dist');

console.log('start emptying the bucket..');
console.log(nodeCmd.runSync(`aws s3 rm s3://${config.bucket} --recursive`));

console.log('start copying dist to the bucket..');
console.log(nodeCmd.runSync(`aws s3 cp ${buildPath} s3://${config.bucket}/ --recursive`));

console.log('start clearing cloudfront cache..');
console.log(nodeCmd.runSync(`aws cloudfront create-invalidation --distribution-id ${config.distribution} --paths "/*"`));
