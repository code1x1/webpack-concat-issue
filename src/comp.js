import * as classNames from "classnames";

export function foo() {
    const classnames = classNames({a: 1});
    console.log(classnames);
    return classnames;
}
