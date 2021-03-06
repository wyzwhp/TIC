## 确认服务已经开通
请确保您已经根据 [购买指南](./开通指南.md) 的指引，完成了正式/试用服务的开通。如未完成，请根据指引提交申请。我们会尽快给您回复确认开通的邮件，相关账号也会在邮件中说明。

## 控制台入口
控制台地址：[单击进入](https://tedu.console.qcloudtrtc.com/)。

## 控制台功能介绍

### 功能列表

| 功能描述 | 说明 |
|---------|---------|
| 登录 | -| 
|机构设置|修改机构和全局配置信息。|
|用户管理| 在这里（或通过云 API）增加使用互动课堂的学生和老师的账号。|
|课堂管理|在这里（或通过云 API）进行约课后，互动课堂客户端才能进入课堂。|
|班级管理|在这里（或通过云 API）可以创建和维护班级分组，在创建课堂是方便批量选择用户|
|录制管理|在这里（或通过云 API）可以查看互动课堂录制文件详情|

### 1. 登录
填写【机构ID】、【账号】和【密码】，以管理员身份登录控制台。
![](https://main.qcloudimg.com/raw/15fc49d71b0cf692c877234d985f080f.png)

### 2. 机构设置

在【机构设置】>【基本信息】页面，管理员可自行设置以下信息：
1. 基础信息

   | 填写信息 | 说明 |
   | :--: | :-- |
   | 机构 logo | 用户可填写机构 logo 图片的 URL 地址。<br>logo 图片大小要求为100px * 100px，类型为 png/jpg。<br>URL 地址更换后，桌面端上课页面左上角 logo 更换。|

   ![](https://main.qcloudimg.com/raw/b90d04c9e7b6fac7c380150a2cbced86.png)

2. 在线课堂信息

   | 填写信息 | 说明 |
   | :--: | :-- |
   | 应用名 | 应用名称。|
   | 回调URL | 当发生老师上课/下课、实时录制开始/结束等事件后，互动课堂后台会将此信息回调给客户。<br>客户可自行配置。详细内容请参考 [云 API-事件回调](https://cloud.tencent.com/document/product/680/37540#.E4.BA.8B.E4.BB.B6.E5.9B.9E.E8.B0.83)。|
   | 联系人 | 机构联系人的姓名（必填）。|
   | 联系电话 | 机构联系人的联系电话（必填）。|
   | 邮箱 | 机构联系人的联系邮箱（必填）。|

   ![](https://main.qcloudimg.com/raw/a2c2f43080e666be2ada26b95c396bc8.png)

3. 基础云产品信息

   | 填写信息 | 说明 |
   | :--: | --- |
   | bizid | 机构的bizid码。|
   | 推流域名 | 直播的推流域名。|
   | 播放域名 | 直播的播放域名。|
   | 推流鉴权KEY | 直播推流时的鉴权信息。|
   | IM管理员账号 | IM功能的管理员账号（必填），可用于调用 REST API 接口、解散群以及全员等功能。|
   | IM私钥 | IM账号的安全保护签名（必填），使用IM服务时需要提供此密钥。详细内容请参考 [如何计算 UserSig](https://cloud.tencent.com/document/product/647/17275)。|
   
   ![](https://main.qcloudimg.com/raw/b4e4232b0f3b5ae30696847421b75a82.png)


### 3. 用户管理

####  添加用户（学生/教师）

1. 在【用户管理】页面，单击左上方【添加用户】。
![](https://main.qcloudimg.com/raw/c2d7973ee966717466dbfaa0c37ca886.png)
2. 在【角色类型】下拉列表中选择用户身份，完善用户信息，包括【用户id】、【昵称】、【密码】等。单击【保存】添加用户。添加成功将弹出“保存成功”提示，并自动跳转至【用户管理】，查看用户信息。
>?被添加的用户可通过添加时填写的【用户id】和【密码】登录课堂。

   ![](https://main.qcloudimg.com/raw/d3edc0607a22aa0c591750ad7cc69651.png)

#### 查看用户信息
管理员在【用户管理】页，可查看目前所有用户列表信息。可通过右上方搜索栏，搜索用户 ID 查看对应用户信息。
![](https://main.qcloudimg.com/raw/24919d01fcd620e39414a0eea7518a8d.png)

#### 编辑用户信息
管理员在【用户管理】页，可编辑单个用户的信息（操作同添加用户）。**用户 ID 不支持修改**。
![](https://main.qcloudimg.com/raw/4f1f4c187b5112ce011cff2af8c18e3c.png)

#### 重置用户密码
管理员在【用户管理】页，可以通过【重置密码】进行密码的重置。
![](https://main.qcloudimg.com/raw/6d3f0657f4e91c0bb85bb95a44a8fd24.png)

### 4. 课堂管理
####  创建课堂
创建课堂即进行约课。
1. 选择【教学管理】>【课堂管理】，单击左上方【创建课堂】。
![](https://main.qcloudimg.com/raw/f112ade9ae5b56168b5f39c6db868d87.png)
2. 管理员在创建课堂时可设置以下信息：
- 基本配置
   - 课堂主题：课堂名称。

   - 授课教师：该节课的教师。单击【授课教师】，在弹框列表中搜索或点击选择本节课程教师，教师 ID 将自动填写在课堂表单中。**只支持选择一个教师**。也可在弹框列表单击【添加老师】，创建老师后再进行选择（操作同添加用户）。
     ![](https://main.qcloudimg.com/raw/130a446d6ae5d756d2f0343d76a9736d.png)

   - 课堂简介（非必填）。

   - 布局：可选择竖屏布局或横屏布局。

   - 课堂时间：

     ![](https://main.qcloudimg.com/raw/963c7f92f90ce615c9e5b9740f5dd098.png)

   - 开始时间：预定的上课时间。

      - 预定上课时间的前一个小时可以进入课堂，并且开课前一小时不允许修改该节课教师。

      - 预定上课时间不影响上课按钮的点击 ，教师可自行决定上课时间。

      - 教师点击上课按钮后，教师和学生同步开始课堂计时，教师端展现涂鸦工具栏，可开始上课。

   - 结束时间：预定的下课时间。

      - 预定下课时间不影响下课按钮的点击 ，教师可自行决定下课时间。

      - 教师点击下课按钮并确认后，计时停止，课堂结束，所有课堂内的学生都会收到课堂结束的提示，退出房间。

      - 预定下课时间到达，且课堂内没有任何成员时，将自动结束课堂。

  ![](https://main.qcloudimg.com/raw/b3d5b7a679d22764d1c3c7e3dba177b3.png)

- 高级选项

   | 选项 | 说明 |
   | :--: | :-- |
   | 助教 | 选择该节课的助教（非必选）。<br>助教协助老师进行上课，拥有老师角色的几乎所有权限。|
   | 学生 | 允许进入该节课的学生列表，若不填写则登录课堂的用户都可进入。<br>单击【学生】，在弹框列表中搜索或点击选择允许进入课堂的学生，学生 ID 将自动填写在课堂表单中。<br>可选择多个学生或通过班级批量选择学生，也可在弹框列表单击【添加学生】，创建学生后再进行选择（操作同添加用户）。|
   | 进房人数限制 | 每个在线课堂可容纳的学生人数，默认10000人。<br>超过限制时，新的人员无法进入课堂。用户可自行设置。|
   | 音视频 | 默认学生不开启摄像头和麦克风，用户可自行设置。|
   | 分辨率 | 视频的编码分辨率。|
   | 帧率 | 视频的编码帧率。|
   | 录制类型 | 默认开启在线录制。在线录制指后台在线实时录制从开始上课到结束上课期间的视频以及白板内容。|

  ![](https://main.qcloudimg.com/raw/3cfe215072664d15f6090e3f05acdcf5.png)

3. 完善课堂信息后单击【创建】，创建课堂。创建成功将弹出“保存成功”提示，并自动跳转至【课堂管理】，查看课堂信息。


####  查看课堂信息
管理员在【教学管理】>【课堂管理】页，可查看目前所有课堂信息，包括【课堂ID】、【课堂名称】、【状态】（未开课/上课中/已结束）、【开始时间/结束时间】等。可通过右上方搜索栏，搜索【课堂ID】查看对应课堂信息。
![](https://main.qcloudimg.com/raw/b3da8e59b935922067736206d4c636d6.png)

#### 课堂管理操作
管理员选择【教学管理】>【课堂管理】，管理课堂。
![](https://main.qcloudimg.com/raw/5f6536df827cdafeabed6357a6b90fd9.png)

- **编辑：**选择【操作】>【编辑】进入【课堂信息】页面（也可单击【课堂名称】进入【课堂信息】页面），重新编辑课堂信息（操作同创建课堂）。**已结束的课堂不支持编辑课堂信息。**
- **查看详情：**选择【操作】>【查看详情】，即可获取【课堂地址】。【课堂地址】主要包含机构码和课程 ID。管理员可以将地址分享给老师/学生，老师/学生在互动课堂桌面端/移动端/web 端输入地址，直接进入课堂。**已结束的课堂不支持【查看详情】。**
  ![](https://main.qcloudimg.com/raw/1c796968e879ae663d95a182f26743b5.png)

### 5. 课件管理

#### 上传课件
1. 选择【教学管理】>【课件管理】，单击左上方【上传课件】。
![](https://main.qcloudimg.com/raw/f534fd7b9199e314503ec67fb46f13bd.png)
2. 管理员在上传课件时可设置以下信息：
 - 单击【上传文件】，控制台将根据上传的课件自动填充课件名字。支持上传 ppt、pptx、pdf、doc、docx 文件。
 - 单击【课件名字】，填入课件名字。
 - 单击【课件归属】，选择教师为课件归属人。
 - 若选择文档权限为【私有】，则该课件只有课件归属人和管理员可以查看。【公开】则所有人都可查看。
   
   ![](https://main.qcloudimg.com/raw/e65a32ec876eeeca6e88a526e96d3497.png)

3. 单击【立即创建】，创建课件。创建成功将弹出“添加成功”提示，并自动跳转至【课件管理】，查看课件信息。 


#### 查看课件信息
管理员在【教学管理】>【课件管理】页面，可查看目前所有课件信息，包括【课件id】、【课件名称】、【类型】等。通过右上方搜索栏，搜索“课件名关键字”可查看对应课堂信息。
![](https://main.qcloudimg.com/raw/8db0ec28d1f81bbc33a6a02e093cb297.png)

#### 课件管理操作
管理员在【教学管理】>【课件管理】页面，可自行【下载】、【删除】课件。

![](https://main.qcloudimg.com/raw/b9261239fa254aceaea69705f64a7b1e.png)

### 6. 班级管理

【班级功能】用于管理学生群组，方便为课堂批量添加学生。注意，班级内学生的变化对已创建的课堂没有影响，即在创建课堂后，新进入（或离开）班级的学生不会自动添加到当前课堂的学生列表里。

#### 添加班级

1. 选择【班级管理】，单击左上方【添加班级】。

   ![](https://main.qcloudimg.com/raw/e07c15cc11fb1e43af9e537fe4f5ad33.png)

2. 填入相应的班级名称，点击【确定】。

   ![](https://main.qcloudimg.com/raw/4653aee177df3222e156bc295e622724.png)

#### 查看班级信息
管理员在【班级管理】页面，可以查看目前所有的班级信息，包括【班级名称】、【创建人】等。

![](https://main.qcloudimg.com/raw/0805486f612aee1efb234375202768c8.png)

#### 班级管理操作
管理员在【班级管理】页面，可自行删除班级和查看班级详情。

![](https://main.qcloudimg.com/raw/0426efc9425442fd1b031cbb24a54432.png)

#### 班级详情
管理员在【班级管理】> 【班级详情信息】页面，可查看班级的学员信息和【删除】相应学员。输入用户名可进行查询对应学生。

![](https://main.qcloudimg.com/raw/cdac0ee398255f03154e398a6b548958.png)

#### 新增班级学员
1. 选择【班级详情信息】，单击左上方【新增学员】。

   ![](https://main.qcloudimg.com/raw/0c01453d4d7c15c4e17c80e2e3e52815.png)

2. 在弹框列表中搜索或点击选择本班学生，点击【保存】。

   ![](https://main.qcloudimg.com/raw/4336396d36d29b71df12260e496a47f8.png)

### 7. 录制管理
管理员在【录制管理】页面，可查看互动课堂的录制文件详情。右上角可以根据【课堂编号】、【文件id】、【用户id】查询相应的录制文件

![](https://main.qcloudimg.com/raw/dc98ad161400e8b2e30dbd187e2b7864.png)

用户可以选择【播放】录制文件，也可以自行【下载】录制文件到本地

![](https://main.qcloudimg.com/raw/82139ee08e2f90111541878df3d09e1c.png)