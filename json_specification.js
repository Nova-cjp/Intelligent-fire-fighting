/*
    客户端登陆
 */

//客户端发送json
var login = {
    "operation":"login",//操作指令
    "info":"***",//邮箱或用户名
    "code":"***",//密码
};
//服务器回应
var respond_login={
    "status":"success/fail",
    "failInfo":"***",//出错信息
    /*
        以下是用于显示在客户端的信息
     */
    "userInfo":{
        "userName":"***",
        "phoneNum":"***",
        "email":"***",
        "grade":"ordinary/vip",//会员/非会员
    },
    /*
        隐藏信息
     */
    "serviceId":"***"//服务器建立与客户端连接后分配的唯一服务id
}

/*
    客户端添加场所、环境、硬件设备
    场所包含环境、环境包含硬件设备
 */

//客户端发送json
var addPlace={
    "operation":"addPlace",
    "serviceId":"***",
    "placeInfo":{
        "sort":"home/company/factory",
        "placeName":"***",
        "location":"***"
    }
}

var addEnvironment={
    "operation":"addEnvironment",
    "serviceId":"***",
    "environmentInfo":{
        "size":"**",//数字，空间占多少平方米
        "preciseLocation":"***",
        "environmentName":"***",
        "parent":"placeId"//包含在哪个场所下
    }
}

var addHardware={
    "operation":"addHardware",
    "serviceId":"***",
    hardwareInfo:{
        "parent":[
            "placeId","environmentId"
        ],
        "hardwareName":"***",
        "manufacturer":"***",//厂商
        "model":"***",//型号
        "type":["co2","temperature","humidity","..."]//这个硬件可以测什么
    }
}
//服务器回应
var respondAddItems={
    "status":"success/fail",
    "itemId":"***",//给成功添加的场所、环境、硬件分配唯一的标识符
    "failInfo":"***",//出错信息
}

/*
    客户端获取环境数据
 */
//客户端发送json
var getEnvironmentData={
    "serviceId":"***",
    "operation":"getEnvironmentData",
    "startTime":"xx-xx-xx-xx",//年-月-日-分
    "endTime":"xx-xx-xx-xx",//年-月-日-分
    "environmentInfo":[
        "placeId","environmentId"
    ],
    "type":["co2","temperature","humidity","..."],//需要环境的什么数据
    "timeInterval":{
        "num":"xx",//时间数值
        "unit":"min/hour/day"//时间单位
    }//环境采样时间间隔
}
//服务器回应
var respondEnvironmentData={
    "volume":{"total":"xxx","co2":"xxx","temperature":"xxx"},//查找到多少条数据
    "dataUnit":{"co2":"测量单位","temperature":"测量单位"},
    "data":{
        "co2":[
            {"num":"xx",time:"xx-xx-xx-xx"},//数值及测量时间
            {"num":"xx",time:"xx-xx-xx-xx"}
        ],
        "temperature":[
            {"num":"xx",time:"xx-xx-xx-xx"},//数值及测量时间
            {"num":"xx",time:"xx-xx-xx-xx"}
        ]
    }
}

/*
    客户端获取场所、环境、硬件信息用于初始化及刷新界面
 */
//客户端发送json
var getTreeWidget={
    "serviceId":"***",
    "operation":"getTreeWidget",
}

//服务器回应
var respondTreeWidget=[
    {
        "placeId":"xxx",
        "placeName":"xxx",
        "environmentList":[
            {
                "environmentId":"xxx",
                "environmentName":"xxx",
                "hardwareList":[
                    {
                        "hardwareId":"xxx",
                        "hardwareName":"xxx",
                    }//硬件字典
                ]//硬件字典数组
            }//环境字典
        ]//环境字典数组
    }//场所字典
]//场所字典数组


