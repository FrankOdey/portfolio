var fs = require('fs');

if (fs.existsSync('temp')){
    console.log('Directory exists, removing...');
    if (fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');

} 

fs.mkdirSync('temp', function(err){
    fs.exists('temp', function(exists){
        if (exist){
            process.chdir('temp');
            fs.writeFileSync('test.txt', 'This is the text for the files', function(err) {
                fs.renameSync('test.txt', 'new.txt', function(err){
                    fs.stat('new.txt', function(err, stats){
                        console.log('File has size: ' + stats.size + 'bytes');
                        fs.readFile('new.txt', function(err, data){
                            console.log('File contents: ' + data.toString());
                        });

                    });
                });
            });
        }
    });
});

