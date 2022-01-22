(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1184:function(t,a,s){"use strict";s.r(a);var r=s(65),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"第二十二章-linux-可视化管理-webmin和bt运维工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二十二章-linux-可视化管理-webmin和bt运维工具"}},[t._v("#")]),t._v(" 第二十二章 Linux 可视化管理-webmin和bt运维工具")]),t._v(" "),r("h2",{attrs:{id:"_22-1-webmin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-1-webmin"}},[t._v("#")]),t._v(" 22.1 webmin")]),t._v(" "),r("h3",{attrs:{id:"_22-1-1-基本介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-1-1-基本介绍"}},[t._v("#")]),t._v(" 22.1.1 基本介绍")]),t._v(" "),r("p",[t._v("Webmin是功能强大的基于Web的Unix/linux系统管理工具。管理员通过浏览器访问Webmin的各种管理功能并完成相应的管理操作。除了各版本的linux以外还可用于: AIX、 HPUX、Solaris、 Unixware、Irix 和FreeBSD等系统")]),t._v(" "),r("p",[r("img",{attrs:{src:s(521),alt:"1632821942592"}})]),t._v(" "),r("h3",{attrs:{id:"_22-1-2-安装webmin-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-1-2-安装webmin-配置"}},[t._v("#")]),t._v(" 22.1.2 安装webmin&配置")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"http://download.webmin.com/download/yum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),r("OutboundLink")],1),t._v(",用下载工具下载即可")]),t._v(" "),r("p",[t._v("也可以使用wget http://download. webmin.com/download/yum/webmin-1.700-1.noarch.rpm")])]),t._v(" "),r("li",[r("p",[t._v("安装:"),r("strong",[t._v("rpm -ivh webmin-1.700-1.noarch.rpm")])])]),t._v(" "),r("li",[r("p",[t._v("重置密码 "),r("strong",[t._v("/usr/libexec/webmin/changepass.pl /etc/webmin root 123")])])]),t._v(" "),r("li",[r("p",[t._v("修改webmin服务的端口号(默认是10000出于安全目的)")]),t._v(" "),r("p",[r("strong",[t._v("vim /etc/webmin/miniserv .conf")]),t._v(" #修改端口")])]),t._v(" "),r("li",[r("p",[t._v("将port= 10000修改为其他端口号，如port=6666")])]),t._v(" "),r("li",[r("p",[t._v("重启webmin")]),t._v(" "),r("p",[r("strong",[t._v("/etc/webmin/restart")]),t._v("#重启")]),t._v(" "),r("p",[r("strong",[t._v("/etc/webmin/start")]),t._v("#启动")]),t._v(" "),r("p",[r("strong",[t._v("/etc/webmin/stop")]),t._v("#停止")])]),t._v(" "),r("li",[r("p",[t._v("防火墙打开端口6666端口")]),t._v(" "),r("p",[r("strong",[t._v("firewall-cmd --zone=public --add-port=6666/tcp --permanent")]),t._v(" #配置防火墙开放6666端口")]),t._v(" "),r("p",[r("strong",[t._v("firewall-cmd --reload")]),t._v(" #更新防火墙配置")]),t._v(" "),r("p",[r("strong",[t._v("firewall-cmd --zone=public --list-ports")]),t._v("#查看已经开放的端口号")])]),t._v(" "),r("li",[r("p",[t._v("登录webmin")]),t._v(" "),r("p",[t._v("http:ip:6666可以访问了")]),t._v(" "),r("p",[r("img",{attrs:{src:s(522),alt:"1632822451038"}})])])]),t._v(" "),r("h3",{attrs:{id:"_22-1-3-简单使用演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-1-3-简单使用演示"}},[t._v("#")]),t._v(" 22.1.3 简单使用演示")]),t._v(" "),r("p",[t._v("修改语言设置，IP访问控制，查看进程，修改密码，任务调度，mysql等")]),t._v(" "),r("p",[r("img",{attrs:{src:s(523),alt:"1632822506139"}})]),t._v(" "),r("h2",{attrs:{id:"_22-2-bt-宝塔"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-bt-宝塔"}},[t._v("#")]),t._v(" 22.2 bt(宝塔)")]),t._v(" "),r("h3",{attrs:{id:"_22-2-1-基本介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-1-基本介绍"}},[t._v("#")]),t._v(" 22.2.1 基本介绍")]),t._v(" "),r("p",[t._v("bt宝塔Linux面板是提升运维效率的服务器管理软件，支持一键 LAMP/LNMP/集群/监控/网站/FTP/数据库/JAVA等多项服务器管理功能。")]),t._v(" "),r("h3",{attrs:{id:"_22-2-2-安装和使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-2-安装和使用"}},[t._v("#")]),t._v(" 22.2.2 安装和使用")]),t._v(" "),r("ol",[r("li",[t._v("安装:"),r("strong",[t._v("yum install -y wget && wget -O install. sh http://download.bt. cn/install/install_6.0.sh && sh install.sh")])]),t._v(" "),r("li",[t._v("安装成功后控制台会显示登录地址，账户密码，复制浏览器打开登录")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(524),alt:"1632824655366"}})]),t._v(" "),r("h3",{attrs:{id:"_22-2-3-使用介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-3-使用介绍"}},[t._v("#")]),t._v(" 22.2.3 使用介绍")]),t._v(" "),r("p",[t._v("可以登录终端，配置，快捷安转运行环境和系统工具，添加计划任务脚本等")]),t._v(" "),r("h3",{attrs:{id:"_22-2-4-如果bt的用户名-密码忘记了-使用bt-default-可以查看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-4-如果bt的用户名-密码忘记了-使用bt-default-可以查看"}},[t._v("#")]),t._v(" 22.2.4 如果bt的用户名，密码忘记了，使用bt default 可以查看")]),t._v(" "),r("p",[r("img",{attrs:{src:s(525),alt:"1632824781227"}})])])}),[],!1,null,null,null);a.default=e.exports},521:function(t,a,s){t.exports=s.p+"assets/img/01.ba6e5686.png"},522:function(t,a,s){t.exports=s.p+"assets/img/02.8a5f2ad8.png"},523:function(t,a,s){t.exports=s.p+"assets/img/03.21305e3e.png"},524:function(t,a,s){t.exports=s.p+"assets/img/04.d528c300.png"},525:function(t,a,s){t.exports=s.p+"assets/img/05.05b30fb3.png"}}]);