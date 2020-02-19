(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{418:function(a,t,s){"use strict";s.r(t);var e=s(40),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"shell命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell命令","aria-hidden":"true"}},[a._v("#")]),a._v(" Shell命令")]),a._v(" "),s("p",[a._v("熟练使用*nix系统的第一步便是熟练它的常用命令，大部分服务器的使用的Linux环境是没有GUI的，我们只能够通过命令来操控系统。对于前端开发来说，我们无需掌握大部分的高难度命令，只需掌握工作开发中常用的命令即可。")]),a._v(" "),s("h2",{attrs:{id:"文件相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件相关命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件相关命令")]),a._v(" "),s("p",[a._v("熟练使用*nix系统下的复制 移动命令可以帮助我们写一些小的自动化shell脚本。例如在前端构建完毕后，将构建产物移动到指定目录或者重命名")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cp ./a.txt ../b.txt // 将当前目录下的a.txt文件复制到上级目录并更名\n$ mv ./a.txt ../b.txt // 将当前目录下的a.txt文件移动到上级目录并更名\n$ mv ./a.txt ./b.txt // 重命名当前目录下的a.txt文件\n")])])]),s("h2",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find","aria-hidden":"true"}},[a._v("#")]),a._v(" find")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("find")]),a._v("命令可以帮助我们查找符合要求的文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ find ./ -iname "*.js" // 查找当前目录下的所有js文件, 忽略大小写\n$ find ./ -size +25k  // 查找当前目录下文件大小大于25kb的文件\n')])])]),s("h2",{attrs:{id:"ack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ack","aria-hidden":"true"}},[a._v("#")]),a._v(" ack")]),a._v(" "),s("p",[a._v("find的功能是比较弱的，对全文检索有心无力，ack是更好的搜索代码神器")]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ brew install ack \n")])])]),s("p",[a._v("然后，通过ack加关键字搜索即可。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ ack targetCode\n")])])]),s("h2",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep","aria-hidden":"true"}},[a._v("#")]),a._v(" grep")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("grep")]),a._v("命令可以帮助我们筛选符合要求的内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ grep "browserRouter" -i ./src/entry.tsx // 在当前src目录下的entry.tsx文件中查找browserRouter关键字忽略大小写\n')])])]),s("h2",{attrs:{id:"awk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#awk","aria-hidden":"true"}},[a._v("#")]),a._v(" awk")]),a._v(" "),s("p",[a._v("通过awk命令我们可以筛选出符合要求的行或者列数据")]),a._v(" "),s("p",[a._v("以:为分隔符，将password分为多列，并且提取出第一列的内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cat /etc/passwd |awk -F ':' '{print $1}'\n")])])]),s("h2",{attrs:{id:"进程相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程相关命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程相关命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ lsof -i:8000 // 查看端口占用情况\n$ ps // 查看当前正在运行的进程，ps命令选项众多这里不一一介绍\n$ kill -9 pid // 根据进程pid来将进程强制退出\n")])])]),s("h2",{attrs:{id:"管道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道","aria-hidden":"true"}},[a._v("#")]),a._v(" 管道")]),a._v(" "),s("p",[a._v("管道可以将上一个命令的stdout输出，作为下一个命令的stdin输入。通过管道符我们可以实现一些稍微复杂的自动化的脚本功能")]),a._v(" "),s("p",[a._v("比如，查找当前正在运行的Node进程并提取出pid传给kill命令来退出进程。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ ps | grep -i \"node\" | awk '{print $2}' | xargs kill -9 \n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);