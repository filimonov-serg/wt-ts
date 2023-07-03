"use strict";
function GetPersonById(data) {
    var res = {
        error: null,
        success: false,
        result: {
            total: 0,
            items: []
        }
    };
    try {
        var id = OptInt(data.GetOptProperty('id', null), null);
        var sql = ["sql: "];
        sql.push("select * from collaborators where id = " + id);
        var qry = XQuery(sql.join('\r\n'));
        res.result.total = ArrayCount(qry);
        var item = void 0;
        for (var i = 0; i < res.result.total; i++) {
            item = qry[i];
            res.result.items.push({
                id: RValue(item.id),
                fullname: RValue(item.fullname)
            });
        }
        var oDoc = OpenNewDoc('x-local://wtv/wtv_collaborator.xmd');
        oDoc.BindToDb(DefaultDb);
        oDoc.TopElem.name.ObtainChildByKey('some val').Value = "Limon";
        oDoc.TopElem.Child(1).Value = "asd";
        var d = Date("10.01.2023");
        tools_gpn.log('limon', 'some log');
        res.success = true;
    }
    catch (err) {
        res.success = false;
        res.error = err;
    }
    return res;
}
