function handleStream(blob) {
    for (var i = 0; i < blob.length; i ++){
        if (state === '/'){
            if (blob[i] === '/'){
                state = '//';
            }
            else if (blob[i] === '*'){
                state = '/*';
            }
            else {
                outputStream.write('/' + blob[i]);
                state = '';
            }
        }
        else if (state === '//'){
            if (blob[i] === '\n'){
                state = '';
            }
        }
        else if (state === '/*'){
            if (blob[i] === '*'){
                state = '/**';
            }
        }
        else if (state === '/**'){
            if (blob[i] === '/'){
                state = '';
            }
            else {
                state = '/*';
            }
        }
        else {
            if (blob[i] === '/'){
                state = '/';
            }
            else {
                outputStream.write(blob[i]);
            }
        }
    }
}