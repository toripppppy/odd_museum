//---奇数コード美術館へようこそ！---//

/*
    Welcome to Odd Museum!

    奇数を導く、そのソースコードの美しさを体感しよう！
    ※敬称略
*/


//すべての始まり、それは偶数と奇数であろう
//偶数
let n = 30, m = 31;
//初期化用
const init = () => {
    n = 30;
    m = 31;
}


/*--本館--*/

/* 安心と信頼のif文 */
init()

const commonIf = (x) => {
    if (x % 2 === 0) { //偶数なら
        x++;
    }
    return x;
}

console.log( commonIf(n) )
//31
console.log( commonIf(m) )
//31



/* 心配性のif文 */
init()

const worrierIf = (x) => {
    if (x % 2 === 0) { //偶数なら
        x++;
    } else {
        x = x; //念のため
    }
    return x;
}

console.log( worrierIf(n) )
//31
console.log( worrierIf(m) )
//31



/* 一行if文 */
init()

const smartIf = (x) => {
    if (x % 2 === 0) x++;

    return x;
}

console.log( smartIf(n) )
//31
console.log( smartIf(m) )
//31



/* 端数追加 */
init()

const addOdd = (x) => {
    return x + 1 - (x % 2);
}

console.log( addOdd(n) )
//31
console.log( addOdd(m) )
//31



/* 三項演算子 */

//from muguet
init()

const ternaryIf = (x) => {
    return (x % 2 === 0) ? x + 1 : x;
}

console.log( ternaryIf(n) )
//31
console.log( ternaryIf(m) )
//31



/* 三項演算子 boolタイプ */

//from chabo
init()

const boolTernaryIf = (x) => {
    return Boolean(x % 2) ? x : x + 1;
}

console.log( boolTernaryIf(n) )
//31
console.log( boolTernaryIf(m) )
//31



/* ビット演算 */

//最短賞
//from hachitai
init()

const bitwiseOp = (x) => {
    return x | 1;
}

console.log( bitwiseOp(n) )
//31
console.log( bitwiseOp(m) )
//31
