const { execSync } = require('child_process');

(function () {
  execSync('yarn patch-package', { stdio: 'inherit' }); //Fix broken node modules with no fuss
  execSync('npx react-native link', { stdio: 'inherit' });
  console.log('Link Done!!✨✨✨✨✨');
  if (process.platform === 'darwin') {
    execSync('cd ios && touch tmp.xcconfig');
    console.log(
      '                  🧐🧐🧐🧐🧐 Starting pod install!! 🧐🧐🧐🧐🧐',
    );
    execSync('cd ios && pod install', { stdio: 'inherit' });
    console.log('                      ✨✨✨✨✨ Pod done!!! ✨✨✨✨✨');
  }
})();
