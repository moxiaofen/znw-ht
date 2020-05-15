
//登录
const APP_LOGIN = 'app/appLogin';
//注册
const APP_REGISTER = 'app/appRegister';
//手机验证码
const APP_SENDCODE = 'app/sendCode'; 
//校验验证码
const APP_CHECKCODE = 'app/checkCode'
//忘记密码第一步（确认帐号）
const APP_FORGETPSWA = 'app/forgetPasswordA'; 
//忘记密码第二步（安全认证）
const APP_FORGETPSWB = 'app/forgetPasswordB'; 
//忘记密码第三步（重置密码）
const APP_FORGETPSWC = 'app/forgetPasswordC'; 
//身份认证
const APP_IDCHECKAPPLY = 'app/appIdCheckApply'
//身份认证查询
const QUERY_AUTHENTY_RESULT = 'app/authenticationResult2'

//产品列表查询----返回的projectType是什么字段？？融资申请页面的融资比例数据从哪返回？？
const QUERY_PRODUCT_LIST = 'app/queryProductList';
//资产信息列表  
const QUERY_BROKER_LIST = 'app/findBrokerByPage';
//资产信息详情 
const QUERY_BROKER_DETAIL = "app/findBrokerById";
//再保理信息列表  
const QUERY_REFACTORING_LIST = 'app/fildRefactoringPage';
//再保理信息详情  
const QUERY_REFACTORING_DETAIL = 'app/fildRefactoringById';
//融资进度列表
const QUERY_FINANCING_LIST = 'app/getFactoringApplyList';
//融资进度详情 
const QUERY_FINANCING_DETAIL = 'app/financingApplyDetail';
//还款测算列表----没数据，未完成-----keep-alive刷新列表，待办
const QUERY_CALCULATE_LIST = 'app/getRepaymentCalList';
//还款测算详情----没数据，未完成 
const QUERY_CALCULATE_DETAIL = 'app/findRepaymentDetail';
//台账管理列表
const QUERY_LEDGER_LIST = 'app/getLedgerList';
//台账管理详情 
const QUERY_LEDGER_DETAIL = 'app/findLedgerDetail';
//台账对账
const LEDGER_CONFIRM = 'app/ledgerConfirm';

//合同管理列表----没数据，未完成, 接口不明   getContractList
const GET_CONTRACT_LIST = 'app/getContractList';
//应收账款列表----没数据，status应传什么
const QUERY_RECEIVABLES_LIST = 'app/findAccountByPage';
//应收账款详情---没数据---造假数据，数据回填
const QUERY_RECEIVABLES_DETAIL = 'app/findAccountByAcctCode';
//应收账款转让列表---没数据
const QUERY_RECEIVESAPPLY_LIST = 'app/findAccountTransferByPage';
//应收账款转让详情---没数据---造假数据，数据回填
const QUERY_RECEIVESAPPLY_DETAIL = 'app/findAccountTransferByApplyNo';
//应收账款转让申请
const ADD_RECEIVABLES_APPLY = 'app/submitTransfer';   
//融资意向申请
const APP_FINANCING_EOI = 'app/fncInttApply';
//融资申请
const APP_FINANCING_APPLY = 'app/financingApply';
//业务申请
const APP_TRANS_APPLY = 'app/transApplyMsg';
//提款申请详情
const APP_TRANS_APPLY_DETAIL = 'app/findAccountTransferByContractNo';      

//查询池保理池中可用余额(根据合同编号)
const FIND_POOL_LIMIT_AMOUNT = 'app/findPoolLimitAmount'  
//提款申请查询合同？
const FIND_CONTRACT_LIST = 'app/findContractList'  
//提款申请提交
const LOAD_INFO_APPLY = 'app/loanInfoApply'
//授信合同列表查询
const QUERY_CONTRACT_LIST = 'app/queryContractList';
//申请授权码
const APPLY_AUTHORIZE_CODE = 'app/applyAuthorizeCode';
//验证授权码
const COMFIRM_AUTHORIZE_CODE = 'app/confirmAuthorizeCode';
//人脸识别1
const FACE_IDENTIFY = 'app/faceIdAuthentication'
//人脸识别2
const GET_AUTH_RESULT = 'app/getAuthResult'
//企业信息查询
const GET_COMPANY_INFO = 'app/getCompanyInfoByCustNo'
//企业信息修改
const UPDATE_COMPANY_INFO = 'app/updateCompanyInfo'
//个人信息修改
const CHANGE_USERNAME = 'app/changeUsername'
const CHANGE_PSW = 'app/changePass'
const CHANGE_EMAIL = 'app/changeMail'
const CHANGE_PHONE = 'app/changePhone'
const CHANGE_HEADERIMG = 'app/headerimgsave'


export default {

  APP_LOGIN,
  APP_REGISTER,
  APP_SENDCODE,
  APP_CHECKCODE,
  APP_FORGETPSWA,
  APP_FORGETPSWB,
  APP_FORGETPSWC,
  APP_IDCHECKAPPLY,
  QUERY_AUTHENTY_RESULT,
  QUERY_PRODUCT_LIST,
  GET_CONTRACT_LIST,
  QUERY_BROKER_LIST,
  QUERY_BROKER_DETAIL,
  QUERY_REFACTORING_LIST,
  QUERY_REFACTORING_DETAIL,
  QUERY_FINANCING_LIST,
  QUERY_FINANCING_DETAIL,
  QUERY_CALCULATE_LIST,
  QUERY_CALCULATE_DETAIL,
  QUERY_LEDGER_LIST,
  QUERY_LEDGER_DETAIL,
  LEDGER_CONFIRM,
  QUERY_RECEIVABLES_LIST,
  QUERY_RECEIVABLES_DETAIL,
  QUERY_RECEIVESAPPLY_LIST,
  QUERY_RECEIVESAPPLY_DETAIL,
  ADD_RECEIVABLES_APPLY,
  APP_FINANCING_EOI,
  APP_FINANCING_APPLY,
  APP_TRANS_APPLY,
  APP_TRANS_APPLY_DETAIL,
  FIND_POOL_LIMIT_AMOUNT,
  FIND_CONTRACT_LIST,
  LOAD_INFO_APPLY,
  QUERY_CONTRACT_LIST,
  APPLY_AUTHORIZE_CODE,
  COMFIRM_AUTHORIZE_CODE,
  FACE_IDENTIFY,
  GET_AUTH_RESULT,
  GET_COMPANY_INFO,
  UPDATE_COMPANY_INFO,
  CHANGE_USERNAME,
  CHANGE_PSW,
  CHANGE_EMAIL,
  CHANGE_PHONE,
  CHANGE_HEADERIMG

}
