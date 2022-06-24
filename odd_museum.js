//---奇数コード美術館へようこそ！---//

/*
    Welcome to Odd Museum!

    奇数を導く、そのソースコードの美しさを体感しよう...
*/


//すべての始まり、それは偶数と奇数であろう。
//偶数・奇数
let n = 30, m = 31;
//初期化用
const init = () => {
    n = 30;
    m = 31;
}



/*-- 本館 --*/

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
/*
if文を使った一番典型的な形。
見慣れていること、またその視認性の良さからとても安心できるコード。
*/



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
/*
普通のif文にelseを加えて念押しの処理を足した形。
安心のためにコードを余分に書くのが特徴。
*/



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
/*
一行に収まったことでスタイリッシュな印象を与えるif文。
安心感、コンパクトさの二点で非常に優れている。
*/



/* 端数追加 */
init()

const addOdd = (x) => {

    return x + 1 - (x % 2);

}

console.log( addOdd(n) )
//31
console.log( addOdd(m) )
//31
/*
if文を使わずに代入式に落とし込んだ形。
コンパクトな反面、処理を直感的に認識できないのが難点。
*/



/* 三項演算子 */ //muguet様より寄贈
init()

const ternaryOp = (x) => {

    return x % 2 === 0 ? x + 1 : x;

}

console.log( ternaryOp(n) )
//31
console.log( ternaryOp(m) )
//31
/*
三項演算子を使った見慣れない形が特徴。
ifelse文と同じ処理が行われているため、安心感がある。
*/



/* 三項演算子 boolタイプ */ //chabo様より寄贈
init()

const boolTernaryOp = (x) => {

    return Boolean(x % 2) ? x : x + 1;

}

console.log( boolTernaryOp(n) )
//31
console.log( boolTernaryOp(m) )
//31
/*
三項演算子とboolを組み合わせて複雑化。
その色とりどりなコードから、他とは違う優越感が感じられる。
*/



/* ビット演算 */ //hachitai様より寄贈

//最短賞
init()

const bitwiseOp = (x) => { // bitwise operation

    return x | 1;

}

console.log( bitwiseOp(n) )
//31
console.log( bitwiseOp(m) )
//31
/*
管理人イチオシ
美術館最短コードであり、その処理のスタイリッシュさに思わず度肝を抜かれる。
二進数にした際の一番右の位を強制的に１にすることで奇数に変換。圧巻。理論値。
*/
