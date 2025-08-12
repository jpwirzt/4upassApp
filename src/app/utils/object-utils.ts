export class ObjectUtils {
    static deepCopy(obj: any): any {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.deepCopy(item));
        }

        const copy: Record<string, any> = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                copy[key] = this.deepCopy((obj as Record<string, any>)[key]);
            }
        }
        return copy;
    }
}