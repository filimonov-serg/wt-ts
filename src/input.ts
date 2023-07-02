interface Person {
    id: string
    fullname: string
}
interface PagedItems<T> {
    total: number
    items: T[]
}
interface IError {
    code: string
    message: string
    level: number
}
interface Result<T> {
    error: IError | null
    success: boolean
    result: T
}

function GetPersonById(data: any) : Result<PagedItems<Person>>
{
    let res: Result<PagedItems<Person>> = {
        error: null,
        success: false,
        result: {
            total: 0,
            items: []
        }
    };

    try
    {
        let id = OptInt(data.GetOptProperty('id', null), null);
        let sql = ["sql: "];
        sql.push("select * from collaborators where id = " + id);
        let qry = XQuery(sql.join('\r\n')) as Person[];
        
        res.result.total = ArrayCount(qry);


        let item;
        for(let i=0; i < res.result.total; i++)
        {
            item = qry[i];
            res.result.items.push({
                id: RValue(item.id),
                fullname: RValue(item.fullname)
            });
        }
        res.success = true;
    }
    catch(err: any)
    {
        res.success = false;
        res.error = err;
    }
    return res;
}