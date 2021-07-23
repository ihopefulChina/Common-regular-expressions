export const regs = {
  // 昵称 汉字、数字、字母、'_'组成
  nickname: {
    reg: /^[\u4e00-\u9fa5_a-zA-Z]*$/,
    regText: `汉字、字母、'_' 组成`,
  },
  // 用户名 数字、字母、'_'组成
  account: {
    reg: /^[a-zA-Z0-9][a-zA-Z0-9_]{5,11}$/,
    regText: `5 到 11 位的数字、字母、'_' 组成，且不能是 '_' 开头`,
  },
  // 用户名 数字、字母、'_'组成
  idcard: {
    reg: /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/,
    regText: `有效身份证号`,
  },
  // 密码 6-20个数字、字母、符号两种及以上的组成
  password: {
    reg: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
    regText: `6-20个数字、字母、符号两种及以上的组成`,
  },
  // QQ号码
  qq: {
    reg: /^[1-9]\d{4,10}$/,
    regText: `QQ 号码`,
  },
  // 手机号码
  mobile: {
    reg: /^1[0-9]{10}$/,
    regText: `有效手机号码`,
  },
  // 整数
  integer: {
    reg: /^-?\d+$/,
    regText: `整数`,
  },
  // 浮点数
  float: {
    reg: /^(-?(0|[1-9][0-9]*))(\.\d+)?$/,
    regText: `数字`,
  },
  // 支付密码
  payPwd: {
    reg: /^\d{4}$/,
    regText: '四位数字组成',
  },
  bankCard: {
    reg: /^\d{14,20}$/,
    regText: '有效银行卡号',
  },
  // 域名，不包含协议的
  url: {
    reg: /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9]+(:\d+)?(\/[.a-zA-Z0-9_-]+)*(\?.*)?$/,
    regText: '域名',
  },
  // 邮箱
  email: {
    reg: /^[a-zA-Z0-9](\w|-|\.)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
    regText: '邮箱地址',
  },
  // 自由，非空字符串
  notEmpty: {
    reg: /./,
    regText: '非空字符',
  },
  remark: {
    reg: /[\s.]*/,
    regText: '',
  },
  ip: {
    reg: /^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
    regText: 'IP',
  },
  username: {
    reg: /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/,
    regText: '12以内有效姓名，中英文不可同时出现',
  },
  adminUrl: {
    reg: /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9*]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)$/,
    regText: '域名',
  },
  amount: {
    reg: /^(([1-9]\d*)(\.\d{1,2})?)$|(0\.0?([1-9]\d?))$/,
    regText: '金额，输入格式不正确！',
  },


};
