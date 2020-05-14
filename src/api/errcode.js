/**
 * Created by qin on 2018/8/8.
 * 该工具类是错误代码提示工具类
 */
//自定义全局错误代码提示(详情参照后台提供的错误代码文档：http://wiki.antiantech.com/pages/viewpage.action?pageId=10584561)
//PS：标注有改动的，是将后台的提示语修改成 前台合适给用户展现的提示语
const STATIC_ERRORCDDE = {
  RTN_000000: "成功",
  RTN_999999: "系统错误",
  EXCEPTION:"网络错误",
  RTN_201017: "办卡时的手机号格式不正确",
  RTN_201018: "手机号格式不正确",
  PWDINPUTERROR:"密码为6-12位数字+字母的组合",
  RTN_000010: "验证码输入错误,请重新输入",
  RTN_201019: "邮箱格式不正确",
  RTN_201020: "银行卡号格式不正确",
  RTN_201021: "身份证号码格式不正确",
  RTN_201022: "护照格式不正确",
  RTN_201023: "港澳通行证格式不正确",
  RTN_201024: "统一社会信用代码格式不正确",
  RTN_201025: "组织机构代码格式不正确",
  CHECKBOXSTU_REGISTER_ERROR: '请勾选阅读并同意签署《中农网用户注册协议》',
  CHECKBOXSTU_IDENTITY_ERROR: '请勾选阅读并同意签署《免责说明》',
};

// new一个键值对的对象
var errorCodeMap = new Map();
errorCodeMap.set("000000",STATIC_ERRORCDDE.RTN_000000);
errorCodeMap.set("999999",STATIC_ERRORCDDE.RTN_999999);

//根据后台返回的错误代码，提示对应的 提示语
function getErrorCode(error) {
  if (error != null && error != '') {
    return errorCodeMap.get(error)//调用常量map方法，
  }
}

//暴露方法
export default {
  getErrorCode,
  STATIC_ERRORCDDE
}
