const cn = require('classnames');

export function foo() {
    const classnames = cn({a: 1});
    console.log(classnames);
    return classnames;
}
