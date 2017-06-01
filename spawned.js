setInterval(function() {
    process.stdout.write('.');
}, 1000);

process.stdin.on('data', function () {
    console.log('Stopped by parent');
    process.exit();
});