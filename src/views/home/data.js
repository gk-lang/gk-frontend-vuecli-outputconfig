export default [
  {
    label: '出库运营状态',
    component: 'out',
    section: ['section1', 'section2', 'section3'],
    current: 'section1'
  },
  {
    label: '入库运营状态',
    component: 'in',
    section: ['section1', 'section2', 'section3'],
    current: 'section2'
  },
  {
    label: '当日库存',
    component: 'storage',
    section: ['section1', 'section2', 'section3'],
    current: ''
  },
  {
    label: '资源情况',
    component: 'resource',
    section: ['section1', 'section2', 'section3'],
    current: ''
  },
  {
    label: '今日销量',
    component: 'sale',
    section: ['section1', 'section2', 'section3'],
    current: 'section3'
  },

  {
    label: '全国各仓订单处理时效排名',
    component: 'map',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 4,
    current: 'section4',
    graphText: '单位：分钟'
  },
  {
    label: '收货岗当日工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：单据数'
  },
  {
    label: '收货岗当月工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：条目数'
  },
  {
    label: '收货岗当日所有区域仓工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：件数'
  },
  {
    label: '收货岗当月所有区域仓工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：品规数'
  },
  {
    label: '拣货岗当日工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：单据数'
  },
  {
    label: '拣货岗当月工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：条目数'
  },
  {
    label: '拣货岗当日所有区域仓工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：件数'
  },
  {
    label: '拣货岗当月所有区域仓工作量TOP10',
    component: 'bar',
    section: ['section4', 'section5', 'section6', 'section7', 'section8'],
    span: 1,
    current: '',
    graphText: '单位：品规数'
  }
]
