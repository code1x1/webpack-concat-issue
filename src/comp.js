import * as cn from "classnames";

export function foo() {
    const classnames = cn({a: 1});
    console.log(classnames);
    return classnames;
}
