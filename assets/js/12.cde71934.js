(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{509:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ol",[a("li",[s._v("基于 Yum 的 方式安装 Nginx")])]),s._v(" "),a("p",[s._v("先来查看 yum 是否存在\n"),a("code",[s._v("yum list | grep nginx")]),s._v("\n如果存在并且系统的 nginx 源 也存在，但是版本有些低。我们可以自己配置 yum 源")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/\ngpgcheck=0\nenabled=1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("复制上面的代码，然后在终端输入\n"),a("code",[s._v("vim /etc/yum.repos.d/nginx.repo")]),s._v(" 把上面的代码复制上去。\n并且修改 baseurl。 我的是 centos 7 的版本，就修改对应自己的 linux 版本\n例子： baseurl=http://nginx.org/packages/centos/7/$basearch/")]),s._v(" "),a("p",[s._v("然后 再次 "),a("code",[s._v("yum list | grep nginx")]),s._v(" 查看 是否有更高的版本")]),s._v(" "),a("p",[s._v("再开始安装 "),a("code",[s._v("yum install nginx")])]),s._v(" "),a("p",[s._v("查看是否安装完成 "),a("code",[s._v("nginx -v")])]),s._v(" "),a("h2",{attrs:{id:"查看-nginx-的安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-nginx-的安装目录"}},[s._v("#")]),s._v(" 查看 Nginx 的安装目录")]),s._v(" "),a("p",[a("code",[s._v("rpm -ql nginx")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1757552627,1854744688&fm=11&gp=0.jpg",alt:""}})]),s._v(" "),a("p",[s._v("主要关注的文件夹有这几个")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("/etc/nginx/conf.d/default.conf")]),s._v(" 文件是我们进行子配置的配置项存放处")]),s._v(" "),a("li",[a("code",[s._v("/etc/nginx/nginx.conf")]),s._v("主配置文件会默认把这个文件夹中所有子配置项都引入")]),s._v(" "),a("li",[a("code",[s._v("/usr/share/nginx/html/")]),s._v(" 文件夹，通常静态文件都再这个文件夹")])]),s._v(" "),a("p",[s._v("主配置文件"),a("code",[s._v("nginx.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("main        # 全局配置，对全局生效\n├── events  # 配置影响 Nginx 服务器或与用户的网络连接\n├── http    # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置\n│   ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分\n│   ├── server   # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块\n│   ├── server\n│   │   ├── location  # server 块可以包含多个 location 块，location 指令用于匹配 uri\n│   │   ├── location\n│   │   └── ...\n│   └── ...\n└── ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("子配置文件 大概 结构 "),a("code",[s._v("default.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;   #配置监听端口\n    server_name  localhost;  //配置域名\n\n    #charset koi8-r;\n    #access_log  /var/log/nginx/host.access.log  main;\n\n    location / {\n        root   /usr/share/nginx/html;     #服务默认启动目录\n        index  index.html index.htm;    #默认访问文件\n    }\n\n    #error_page  404              /404.html;   # 配置404页面\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n    # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n    #\n    #location ~ \\.php$ {\n    #    proxy_pass   http://127.0.0.1;\n    #}\n\n    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n    #\n    #location ~ \\.php$ {\n    #    root           html;\n    #    fastcgi_pass   127.0.0.1:9000;\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #}\n\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #    deny  all;\n    #}\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("Nginx 服务启动 、 停止 、 重启")]),s._v(" "),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("p",[s._v("默认的情况下，Nginx 是不会自动启动的，需要我们手动进行启动，当然启动 Nginx 的方法也不是单一的。")]),s._v(" "),a("h4",{attrs:{id:"_1-直接启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接启动"}},[s._v("#")]),s._v(" 1. 直接启动")]),s._v(" "),a("p",[s._v("在 CentOS7.4 版本里（低版本是不行的），是可以直接直接使用"),a("code",[s._v("nginx")]),s._v("启动服务的。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("nginx")])])]),s._v(" "),a("h4",{attrs:{id:"_2-使用-systemctl-命令启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-systemctl-命令启动"}},[s._v("#")]),s._v(" 2. 使用 systemctl 命令启动")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("systemctl start nginx.service")])])]),s._v(" "),a("p",[s._v("输入命令后，没有任何提示，那我们如何知道 Nginx 服务已经启动了哪？可以使用 Linux 的组合命令，进行查询服务的运行状况。")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("ps aux | grep nginx")])])]),s._v(" "),a("li",[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root     11482  0.0  0.0  46452   980 ?        Ss   12:41   0:00 nginx: master process nginx\nnginx    11483  0.0  0.0  46848  2168 ?        S    12:41   0:00 nginx: worker process\nroot     11491  0.0  0.0 112708   984 pts/0    S+   12:44   0:00 grep --color=auto nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("出现这 3 条命令，就代表启动成功了")])])]),s._v(" "),a("p",[a("strong",[s._v("启动后就可以通过 公网 IP 访问了，访问前提是开放服务器的 80 端口")])]),s._v(" "),a("h3",{attrs:{id:"停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),a("h4",{attrs:{id:"_1-从容停止服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-从容停止服务"}},[s._v("#")]),s._v(" 1. 从容停止服务")]),s._v(" "),a("p",[s._v("这种方法比较温和，需要进程完成当前工作后再停止")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("nginx -s quit")])])]),s._v(" "),a("h4",{attrs:{id:"_2-立即停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-立即停止"}},[s._v("#")]),s._v(" 2. 立即停止")]),s._v(" "),a("p",[s._v("这种方法比较强硬，无论进程是否再工作都停止")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("nginx -s stop")])])]),s._v(" "),a("h4",{attrs:{id:"_3-killall-方法杀死进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-killall-方法杀死进程"}},[s._v("#")]),s._v(" 3. killall 方法杀死进程")]),s._v(" "),a("p",[s._v("这种方法也是比较野蛮的，我们直接杀死进程")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("killall nginx")])])]),s._v(" "),a("h4",{attrs:{id:"_4-systemctl-停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-systemctl-停止"}},[s._v("#")]),s._v(" 4. systemctl 停止")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("systemctl stop nginx.service")])])]),s._v(" "),a("h3",{attrs:{id:"重启-nginx-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx-服务"}},[s._v("#")]),s._v(" 重启 Nginx 服务")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("systemctl restart nginx.service")])])]),s._v(" "),a("h3",{attrs:{id:"重新载入配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新载入配置文件"}},[s._v("#")]),s._v(" 重新载入配置文件")]),s._v(" "),a("p",[s._v("在重新编写或者修改 Nginx 的配置文件后，都需要作一下重新载入，这时候可以用 Nginx 给的命令")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("nginx -s reload")])])]),s._v(" "),a("h3",{attrs:{id:"查看端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口号"}},[s._v("#")]),s._v(" 查看端口号")]),s._v(" "),a("p",[s._v("在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。我么可以使用"),a("code",[s._v("netstat -tlnp")]),s._v("命令查看端口号的占用情况。")]),s._v(" "),a("h2",{attrs:{id:"nginx-自定义错误页面设置-和-简介访问设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-自定义错误页面设置-和-简介访问设置"}},[s._v("#")]),s._v(" Nginx 自定义错误页面设置 和 简介访问设置")]),s._v(" "),a("h3",{attrs:{id:"自定义错误页面设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义错误页面设置"}},[s._v("#")]),s._v(" 自定义错误页面设置")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/etc/nginx/conf.d/default.conf")]),s._v(" 是可以看到下面这条代码的")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("error_page 500 502 503 504 /50x.html;")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("error_page指令用于自定义错误页面，500，502，503，504 这些就是HTTP中最常见的错误代码，/50.html 用于表示当发生上述指定的任意一个错误的时候，都是用网站根目录下的/50.html文件进行处理。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("有些时候是要把这些错误页面单独的表现出来，**给用户更好的体验。**所以就要为每个错误码设置不同的页面。设置方法如下：")]),s._v(" "),a("ul",[a("li",[s._v("我们在 "),a("code",[s._v("error_page 500 502 503 504 /50x.html;")]),s._v(" 下在添加一条 "),a("code",[s._v("error_page 404 /404_error.html;")])])]),s._v(" "),a("p",[s._v("然后再 "),a("code",[s._v("/usr/share/nginx/html")]),s._v(" 去写这个 404_error.html 文件")]),s._v(" "),a("p",[s._v("然后重启 Nginx 服务 "),a("code",[s._v("nginx -s reload")])]),s._v(" "),a("h3",{attrs:{id:"简介访问设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介访问设置"}},[s._v("#")]),s._v(" 简介访问设置")]),s._v(" "),a("blockquote",[a("p",[s._v("有时候我们的服务器只"),a("strong",[s._v("允许特定主机访问")]),s._v("，比如内部 OA 系统，或者应用的管理后台系统，更或者是某些应用接口，这时候我们就需要控制一些 IP 访问，我们可以直接在"),a("code",[s._v("location")]),s._v("里进行配置。")])]),s._v(" "),a("p",[s._v("可以直接在"),a("strong",[s._v("default.conf 里进行配置")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location / {\n    deny   xxx.x.xx.xx;   禁止谁不能访问\n    allow  xx.xx.xxx.xxx; 允许谁能访问\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("配置完成后，"),a("strong",[s._v("重启一下服务器")]),s._v("就可以实现限制和允许访问了。")]),s._v(" "),a("h2",{attrs:{id:"nginx-设置虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-设置虚拟主机"}},[s._v("#")]),s._v(" Nginx 设置虚拟主机")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("虚拟主机")]),s._v("： 是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供 Web 服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用。")])]),s._v(" "),a("p",[s._v("配置虚拟主机 可以"),a("strong",[s._v("基于端口号")]),s._v("、"),a("strong",[s._v("基于 IP")]),s._v(" 和"),a("strong",[s._v("基于域名")])]),s._v(" "),a("h3",{attrs:{id:"基于端口号设置虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于端口号设置虚拟主机"}},[s._v("#")]),s._v(" 基于端口号设置虚拟主机")]),s._v(" "),a("ul",[a("li",[s._v("基于端口号来配置虚拟主机，算是 Nginx 中最简单的一种方式了。原理就是 Nginx 监听多个端口，根据不同的端口号，来区分不同的网站。")])]),s._v(" "),a("p",[s._v("可以直接配置在主文件里"),a("code",[s._v("etc/nginx/nginx.conf")]),s._v("文件里， 也可以配置在子配置文件里"),a("code",[s._v("etc/nginx/conf.d/default.conf")]),s._v("。为了配置方便，配置在子文件较好。也可以直接在"),a("code",[s._v("conf.d")]),s._v("文件夹下 再创建一个 文件 (后缀必须为"),a("code",[s._v(".conf")]),s._v(")。分开独立配置更好维护。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：\n\nserver{\n    listen 8001;\n    server_name localhost;\n    root /usr/share/nginx/html/html8001;\n    index index.html;\n}\n监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"基于-ip-的虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-ip-的虚拟主机"}},[s._v("#")]),s._v(" 基于 IP 的虚拟主机")]),s._v(" "),a("ul",[a("li",[s._v("基于 IP 和基于端口的配置几乎一样，只是把"),a("code",[s._v("server_name")]),s._v("选项，配置成 IP 就可以了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("比如上面的配置 可以修改为\nserver{\n    listen 80;\n    server_name xxx.xx.xxx.xxx;\n    root /usr/share/nginx/html/html8001;\n    index index.html;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"基于-nginx-使用-域名设置虚拟主机-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-nginx-使用-域名设置虚拟主机-常用"}},[s._v("#")]),s._v(" 基于 Nginx 使用 域名设置虚拟主机 （常用）")]),s._v(" "),a("p",[s._v("首先必须先做"),a("strong",[s._v("域名解析")]),s._v("，才能去 服务器上进行配置。")]),s._v(" "),a("p",[s._v("那 上面 "),a("strong",[s._v("基于端口号设置虚拟主机")]),s._v(" 的例子来说明：")]),s._v(" "),a("p",[s._v("如果是修改 "),a("code",[s._v("nginx")]),s._v(" 下面的 "),a("code",[s._v("/etcnginx/conf.d/default.conf")]),s._v("文件， 它默认的 "),a("strong",[s._v("监听端口就是 80")]),s._v("， 所以我们只需要修改一处配置就行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;\n    server_name  xxx.xxx.com/cn;  // 修改这处配置 为你配置的域名\n    ... 其他配置\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果修改的是 我们自己新建的 "),a("code",[s._v("xxx.conf")]),s._v("文件。 例如 "),a("strong",[s._v("基于端口号设置虚拟主机")]),s._v(" 时的例子 "),a("code",[s._v("8001nginx.conf 文件")]),s._v(" 的一些配置信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：\n\nserver{\n    listen 8001;             listen 80;         // 可以把 listen 监听端口 改成   80 端口\n    server_name localhost;            // 修改这处配置 为你配置的域名\n    root /usr/share/nginx/html/html8001;\n    index index.html;\n}\n监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("注意：\n\t上面两个 可以同时存在的， 虽然监听的端口一样 但是 对应着不同的域名 和 root 服务默认启动目录 不一样\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);