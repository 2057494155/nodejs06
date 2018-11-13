var fs = require('fs')


/**
 * ! ./a.txt 其实是相对于执行 node 命令所处的终端路径
 * ! 文件操作的路径不是相对于文件
 * !  这不是错误, Node 就是这样设计的
 *! 也就是说,文件操作路径中,相对路径设计的就是
 */
fs.readFile(path.join(__dirname,'/a.txt') ,'utf8',function(err,data){
    if(err){
        throw err
    }
    console.log(data);
})
