var S = require("./index");
var c = require("./c")
var fs = require("fs")
c.forEach(function(item,index){

  item[2] = S.s2t(item[2])
  // console.log(item)
  // console.log(',')
})

fs.writeFile('./test.json', JSON.stringify(c),function(err){
  if(err) console.log('写文件操作失败');
  else console.log('写文件操作成功');
});