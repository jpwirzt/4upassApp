export class StringUtils {
    static capitalize(val: string): string {
        if (!val || val.length === 0) return val;
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    static toPascalCase(val: string): string {
        if (!val || val.length === 0) return val;
        return val.split(" ").filter(x => x.length > 0).map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join("");
    }
}