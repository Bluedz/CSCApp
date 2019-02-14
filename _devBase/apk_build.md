# Android App 生成说明


## app与web版转换：
执行 工程目录/src/app/*.bat

# 生成APK
* 可以用android studio 打开 工程目录/platforms/android文件夹，来生成APK包

* debug ： ionic build android
	结果为： android-debug.apk
* release ：ionic build android --prod --release （无签名配置的话，apk为无签版）
	结果为： android-release-unsigned.apk

# 自动签名实现

1. 首先要生成签名文，命令为： ... ，这里结果是dccsc.jks
2.  工程目录/platforms/android目录下新建名为release-signing.properties的文件
3. release-signing.properties 的内容添加以下4行：
	```
	storeFile = dccsc.jks
	keyAlias=cscapp
	storePassword=wzg13852286548
	keyPassword=wzg13852286548
	```
4. 将dccsc.jks文件放入工程目录/platforms/android目录下

5. 执行命令，编译即可
ionic build android --prod --release
	结果为： android-release.apk

# 查看jks文件的内容，比如忘记了别名
```keytool -list  -v -keystore F:\appCode\Git\cscApp\platforms\android\dccsc.jks