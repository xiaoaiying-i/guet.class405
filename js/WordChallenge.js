// JavaScript Document
	var i = 1;//输入正确单词数
	var j = 1;//共输入几次
	var pro_in_word = '';//记录上一个输入的单词是什么
	var wds = "";
	//载入函数
	$(function(){
		//获取所有单词内容
		//var wds = $("#wds").text();
		$('#wd').bind('keypress',function(event){//键盘监听事件
			if(event.keyCode == 13){//输入框内回车了
				//获取输入的值
				var in_word = $('#wd').val();
				//清空输入框的值 
				$('#wd').val("");
				
				//获取单词操作选项
				var wd_option = $('#wd_option').val();
				//alert(wd_option);
				//单词长度必须大于2
				
				if(in_word.length>=2){
					
					//正则匹配输入的单词
					var patt1 = new RegExp(in_word);
					if(patt1.test(wds)){
						//匹配到字符
						//把输入单词加入单词容器
						$("#in_wd").append(i+"-"+in_word+"\t\t\t\t");
						
						if(wd_option==1){
							//把上一个单词替换为空
							var re_wds = $("#wds").html().replace('<span style="color:#903;font-size:34px;">'+(i-1)+'-'+pro_in_word+'</span>','');
							pro_in_word = in_word;//更新上一个单词
						}else if(wd_option==2){
							//把上一个单词替换为"--"
							var re_wds = $("#wds").html().replace('<span style="color:#903;font-size:34px;">'+(i-1)+'-'+pro_in_word+'</span>','<span style="color:#069;font-size:28px;">--</span>');
							pro_in_word = in_word;//更新上一个单词
							
						}else{
							//把拉大的字体先缩小及修改颜色
							var re_wds = $("#wds").html().replace('<span style="color:#903;font-size:34px;">','<span style="color:#069;font-size:28px;">');
							pro_in_word = in_word;//更新上一个单词
						}
						
						$("#wds").html(re_wds)
						//当前输入字体变大
						re_wds = $("#wds").html().replace(in_word,'<span style="color:#903;font-size:34px;">'+i+'-'+in_word+'</span>');
						$("#wds").html(re_wds)
						i=i+1;
					}
				}
				
				//显示输入了几次：
				$("#insum").html(j);
				j++;
				$("#container_wdsum").html((i-1));//显示容器单词数
         	} 
			
			//清空单词容器
			$("#clear_in_wd").click(function(){
				i=1;
				$("#in_wd").html('<input id="clear_in_wd" type="button" style="position: absolute;right: 0;bottom: 0;" value="清空"/>');
			});
			
    	});
		
		//复原内容按钮
		$("#conback_wds").click(function(){
			$("#wds").text(wds);
			$("#in_wd").html('<input id="clear_in_wd" type="button" style="position: absolute;right: 0;bottom: 0;" value="清空"/>');
			i=1;
			$("#container_wdsum").html((i-1));//显示容器单词数
		});
		
		//提交内容
		$("#sub_context").click(function(){
			//获取文本域内容
			var wds_textarea = $("#wds_textarea").val();
			wds = wds_textarea;//把文本域内容赋值给变量wds
			$("#wds").text(wds_textarea)//把单词div的内容设置该文本
		});
		
		//添加时间
		var time = document.getElementById('time');
		var stop_second = 0;//页面停留秒数
		var stop_realSecond = 0;//停留页面过去的秒数
		setInterval(//定时器：每秒执行一次函数
			function(){
				time.innerHTML = new Date().toLocaleString();//每一秒更新当前时间
				
				//设置计时器
				if(stop_second>=60){
					stop_second = 0;//秒数大于60秒置零
				}
				stop_second++;//一秒后时间加1秒
				stop_realSecond++
				//设置停留时间
				$("#stop_hour").html(Math.floor((stop_realSecond/60)/60));//设置停留小时
				$("#stop_minute").html(Math.floor(stop_realSecond/60)); //设置停留分钟
				$("#stop_second").html(stop_second);//设置秒数
			}, 
			1000
		);
		
	});
    
	/*function readLine(filename,line){
	//读第几行
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var f = fso.OpenTextFile(filename,1);
		var s = "";
		var wl= 0;//读到第几行
		while (!f.AtEndOfStream){
			wl= wl+1;
			s = f.ReadLine();
			if(wl==line){
			//第几行的数据
			alert(s);
			} ;
		} ;
		f.Close();
	}*/