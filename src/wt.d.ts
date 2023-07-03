declare interface XmlElem {
    [key: string]: XmlElem | any
    Doc: XmlDoc
    Value: any
    ForeignElem: XmlElem
    OptForeignElem?: XmlElem
    HasValue: boolean

    AddChild(name?: string, type?: string): XmlElem
    Child(name: string): XmlElem
    Child(index: number): XmlElem
    OptChild(name: string): XmlElem | undefined
    Clear(): void
    Delete(): void
    DeleteChildByKey(keyValue: any, keyName?: string): void
    DeleteOptChildByKey(keyValue: any, keyName?: string): void
    GetChildByKey(keyValue: any, keyName?: string): XmlElem
    GetOptChildByKey(keyValue: any, keyName?: string): XmlElem | undefined
    ObtainChildByKey(keyValue: any, keyName?: string): XmlElem
}
declare interface XmlDoc {
    DocID: number
    TopElem: XmlElem
    BindToDb(db?: string): void
    Save(): void
}
declare const DefaultDb: string
declare function OpenNewDoc(schema: string): XmlDoc
declare function OpenDoc(url: string, params?: string): XmlDoc
declare function DeleteDoc(url: string): void
declare function UrlFromDocID(docID: number): string

declare function XQuery(query: string): any[]
declare function SqlLiteral(value: string): string
declare function XQueryLiteral(value: string): string

declare function Int(value: string | number): number
declare function OptInt(value: string | number, defaultOut: number | null): number | undefined
declare function Real(value: string | number): number
declare function OptReal(value: string | number, defaultOut: number | null): number | undefined
declare function Trim(value: string): string
declare function UnifySpaces(value: string): string
declare function RValue(value: any): any

//declare function Date(date?: Date | string): Date
declare function OptDate(strDate: string): Date | undefined
declare function OptDate(year: number, month: number, day: number): Date | undefined
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number): Date | undefined
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number, second: number): Date | undefined
declare function DateDiff(date1: Date, date2: Date): number
declare function DateNewTime(date: Date, hour?: number, minute?: number, second?: number): Date
declare function DateOffset(date: Date, seconds: number): Date
declare function DateToRawSeconds(date: Date): number
declare function Day(date: Date): number
declare function Second(date: Date): number
declare function Minute(date: Date): number
declare function Hour(date: Date): number
declare function Month(date: Date): number
declare function Year(date: Date): number
declare function StrDate(date: Date): string
declare function StrDate(date: Date, params: {ShowTime?: boolean, ShowSeconds?: boolean, ShowLocalTime?: boolean}): string
declare function StrDate(date: Date, showTime: boolean, showSeconds?: boolean): string
declare function ParseDate(strDate: string): Date
declare function GetCurTicks(): number

declare function ArrayCount(array: any[]): number
declare function ArrayDirect(array: any[]): any[]
declare function ArrayExtract(array: any[], fieldExpr: string): any[]
declare function ArrayFirstElem(array: any[]): any
declare function ArrayOptFirstElem(array: any[], defaultValue: any): any | undefined
declare function ArrayMerge(array: any[], fieldExpr: string, delim?: string): string
declare function ArrayFind(array: any[], qualExpr: string): any
declare function ArrayOptFind(array: any[], qualExpr: string): any | undefined
declare function ArraySelectAll(array: any[]): any[]
declare function ArraySelectDistinct(array: any[], fieldExpr?: string): any[]
declare function ArraySum(array: any[], fieldExpr: string): number
declare function ArraySelect(array: any[], qualExpr: string): any[]
declare function ArraySort(array: any[], fieldExpr: string, order?: '+' | '-'): any[]
declare function ArraySort(array: any[], fieldExpr: string, order: '+' | '-', fieldExpr2: string, order2?: '+' | '-'): any[]
declare function ArrayDirect(array: any[]): any[]
declare function ArrayUnion(array1: any[], array2: any[], ...otherArrays?: any[]): any[]
/** 
 * Проверяет, является ли аргумент массивом
 * @param {any} value - Проверяемое значение
 * @returns {boolean} True, если это массив
 */
declare function IsArray(value: any): boolean

declare function GetOptProperty(propName: string, defaultVal: any): any | undefined

declare function OpenCodeLib<T>(url: string): T

declare namespace tools_gpn {
    function get_nci_data(code: string | null, catalog_code: string | null, field_code: string | null): {id: number, name: string, code: string, catalog_code: string, catalog_field_code: string}[]
    function log(log_name: string, text: string)
}