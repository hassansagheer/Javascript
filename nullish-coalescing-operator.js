const a = 1.5 ?? 100;
console.log(a);//1.5

const b = 2.0 ?? null;
console.log(b);//2

const c = null ?? 5;
console.log(c);//5

const d = null ?? undefined;
console.log(d);//undefined

const e = undefined ?? null;
console.log(e);//null