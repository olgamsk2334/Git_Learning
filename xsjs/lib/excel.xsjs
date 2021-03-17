var excel = $.require("node-xlsx");

var conn = $.hdb.getConnection();
var query = "SELECT * FROM COLORS";
var res = conn.executeQuery(query);

var body = "";
var out = [];
for(var i = 0; i < res.length; i++){
	out.push([res[i]["ID"], res[i]["COLOR"], res[i]["NUMBER"]]);
}
var resExcel = excel.build([{name: "Color table",
							data: out}]);
							
$.response.setBody(resExcel);
$.response.contentType = "application/vnd.ms-excel;"
$.response.headers.set("Content-Transfer-Encoding",
	"binary");
$.response.headers.set("Content-Disposition",
	"attachment; filename=Excel.xlsx");
$.response.status = $.net.http.OK;