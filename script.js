// 1
{
    let str = 'madsion';
    let reStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reStr += str[i];
    }

    console.log(reStr);
}


// 2
{

    function camelize(str) {
        let cutStr = str.split(' ')
        for (let i = 0; i < cutStr.length; i++) {
            cutStr[i] = cutStr[i][0].toUpperCase() + cutStr[i].slice(1);
        }
        return cutStr.join('');
    }

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));

}

// 3
{
    function textTruncate(str, limit, signEnd = '...') {
        if (str.length > limit) {
            return str.slice(0, limit - signEnd.length) + signEnd;
        }
        return str;
    }

    console.log(textTruncate('We are doing JS string exercises.'))
    console.log(textTruncate('We are doing JS string exercises.', 19))
    console.log(textTruncate('We are doing JS string exercises.', 15, '!!'))
}

// 4

{
    function isColorBoard(str) {
        if (typeof str !== 'string') {
            return 'It must be a string.'
        }

        for(let i = 0; i < str.length/2; i++){
            if(str[i] != str[str.length-1-i]){
                return false;
            }
        }
        return true;

        // let count = 0;
        // strLength = Math.floor(str.length / 2);
        //     for (let i = 0; i < strLength; i++) {
        //         for (j = str.length - 1; j >= strLength; j--) {
        //             if (str[i] === str[j]) {
        //                 count += 1;
        //             }
        //         }
        //     }
        //     if (count == strLength) {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
    }
    
    console.log(isColorBoard('maam'));
    console.log(isColorBoard('civic'));
    console.log(isColorBoard('IO'));
    console.log(isColorBoard(12321));

}

//5
{
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    // mm-dd-yyyy
    let format1 = `${month}-${day}-${year}`;
    // mm/dd/yyyy
    let format2 = `${month}/${day}/${year}`;
    // dd-mm-yyyy
    let format3 = `${day}-${month}-${year}`;
    // dd/mm/yyyy
    let format4 = `${day}/${month}/${year}`;

    format1
    format2
    format3
    format4
}

// 7
{
    function isDiagonalMatrix(matrix) {
        if (matrix.length !== matrix[0].length) {
            return false;
        }
        else {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                    if (i !== j && matrix[i][j] !== 0) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    const matrixA = [
        [1, 0, 0],
        [0, 2, 0],
        [0, 0, 3]
    ];

    console.log(isDiagonalMatrix(matrixA));
}


