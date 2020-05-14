import Vue from 'vue'
import RM from '../api/RouterManager'
import Router from 'vue-router'
///////////////////////////////
import HomePage from '@/page/home/Home'
import MinePage from '@/page/mine/Mine'
import LoginPage from '@/page/login/Login'
import Navigation from '@/page/Navigation'
import RegisterPage from '@/page/register/Register'
import ForgetPwdPage from '@/page/forget/ForgetPwd'
import ReGisterProtocol from '@/page/setting/ReGisterProtocol'
import SettingPage from '@/page/setting/Setting'
import FinancingProgress from '@/page/financing/FinancingProgress'
import ContractPage from '@/page/contract/Contract'
import ContractPdf from '@/page/contract/ContractPdf'
import Receivables from '@/page/receivables/Receivables'
import BusinessApplyChange from '@/page/business/BusinessApplyChange'
import BusinessApplyDetail from '@/page/business/BusinessApplyDetail'
import DraftApply from '@/page/draft/DraftApply'
import DraftApplyDetail from '@/page/draft/DraftApplyDetail'

import AddReceivables from '@/page/receivables/AddReceivables'
import ReceivablesList from '@/page/receivables/ReceivablesList'
import AuthenticateId from '@/page/authenticate/identity'
import IdentityAct from '@/page/authenticate/identityAct'
import IdentityProtocol from '@/page/setting/IdentityProtocol'
import AboutPage from '@/page/setting/About'
import FinancingProgressDetail from '@/page/financing/FinancingProgressDetail'
import ReceivablesDetail from '@/page/receivables/ReceivablesDetail'
import ReceivesApplyList from '@/page/receivables/ReceivesApplyList'
import ReceivablesApplyDetail from '@/page/receivables/ReceivablesApplyDetail'
import AddReceivablesApply from '@/page/receivables/AddReceivablesApply'

import CalculateList from '@/page/calculate/CalculateList'
import CalculateDetail from '@/page/calculate/CalculateDetail'
import FianancingApply from '@/page/financing/FianancingApply'

import LedgerList from '@/page/ledger/LedgerList'
import LedgerDetail from '@/page/ledger/LedgerDetail'
import LedgerPayment from '@/page/ledger/LedgerPayment'
import LedgerRepayment from '@/page/ledger/LedgerRepayment'



import BrokerProgress from '@/page/broker/BrokerProgress'
import BrokerProgressDetail from '@/page/broker/BrokerProgressDetail'
import BrokerDetail from '@/page/broker/BrokerDetail'
import RefactoringProgress from '@/page/refactoring/RefactoringProgress'
import RefactoringProgressDetail from '@/page/refactoring/RefactoringProgressDetail'
import RefactoringDetail from '@/page/refactoring/RefactoringDetail'
import FianancingEOI from '@/page/financing/FianancingEOI'

import CompanyInfo from '@/page/setting/CompanyInfo'
import CompanyInfoUpdata from '@/page/setting/CompanyInfoUpdata'
import PersonInfo from '@/page/setting/PersonInfo'
import PersonInfoUpdata from '@/page/setting/PersonInfoUpdata'
import PersonInfoName from '@/page/setting/PersonInfoName'
import PersonInfoPsw from '@/page/setting/PersonInfoPsw'
import PersonInfoEmail from '@/page/setting/PersonInfoEmail'
import PersonInfoPhone from '@/page/setting/PersonInfoPhone'


Vue.use(Router);

export default new Router({
  //不加这个mode：history，二级路由的页面根本访问不了！！！
  //mode: 'history',
  routes: [{
      path: RM.HomePage,
      name: RM.HomePage,
      component: HomePage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: RM.ReceivablesApplyDetail,
      name: RM.ReceivablesApplyDetail,
      component: ReceivablesApplyDetail
    },

    {
      path: RM.AddReceivablesApply,
      name: RM.AddReceivablesApply,
      component: AddReceivablesApply
    },    
    
    {
      path: RM.FianancingApply,
      name: RM.FianancingApply,
      component: FianancingApply
    },
    
   {
     path: RM.CalculateDetail,
     name: RM.CalculateDetail,
     component: CalculateDetail
   },

    {
      path: RM.CalculateList,
      name: RM.CalculateList,
      component: CalculateList
    },

    {
      path: RM.ReceivablesDetail,
      name: RM.ReceivablesDetail,
      component: ReceivablesDetail
    },
    
    
   {
      path: RM.AddReceivables,
      name: RM.AddReceivables,
      component: AddReceivables
    },
    {
      path: RM.ReceivesApplyList,
      name: RM.ReceivesApplyList,
      component: ReceivesApplyList
    },


    {
      path: RM.FinancingProgressDetail,
      name: RM.FinancingProgressDetail,
      component: FinancingProgressDetail
    },

    {
      path: RM.ReceivablesList,
      name: RM.ReceivablesList,
      component: ReceivablesList
    },
    {
      path: RM.MinePage,
      name: RM.MinePage,
      component: MinePage
    },

    {
      path: RM.LoginPage,
      name: RM.LoginPage,
      component: LoginPage
    },

    {
      path: RM.Navigation,
      name: RM.Navigation,
      component: Navigation
    }, {
      path: RM.RegisterPage,
      name: RM.RegisterPage,
      component: RegisterPage
    }, {
      path: RM.ForgetPwdPage,
      name: RM.ForgetPwdPage,
      component: ForgetPwdPage
    },

    {
      path: RM.ReGisterProtocol,
      name: RM.ReGisterProtocol,
      component: ReGisterProtocol
    },
    {
      path: RM.SettingPage,
      name: RM.SettingPage,
      component: SettingPage
    },
    {
      path: RM.FinancingProgress,
      name: RM.FinancingProgress,
      component: FinancingProgress
    },
    {
      path: RM.ContractPage,
      name: RM.ContractPage,
      component: ContractPage
    },
    {
      path: RM.ContractPdf,
      name: RM.ContractPdf,
      component: ContractPdf
    },
    {
      path: RM.Receivables,
      name: RM.Receivables,
      component: Receivables
    },
    {
      path: RM.BusinessApplyChange,
      name: RM.BusinessApplyChange,
      component: BusinessApplyChange
    },

    {
      path: RM.BusinessApplyDetail,
      name: RM.BusinessApplyDetail,
      component: BusinessApplyDetail
    },

    {
      path: RM.DraftApply,
      name: RM.DraftApply,
      component: DraftApply
    },

    {
      path: RM.DraftApplyDetail,
      name: RM.DraftApplyDetail,
      component: DraftApplyDetail
    },
 
    {
      path: RM.AuthenticateId,
      name: RM.AuthenticateId,
      component: AuthenticateId

    },
    
    {
      path: RM.IdentityAct,
      name: RM.IdentityAct,
      component: IdentityAct,
      meta: {
        keepAlive: true,
        scollTopPosition: 0
      }
    },

    {
      path: RM.IdentityProtocol,
      name: RM.IdentityProtocol,
      component: IdentityProtocol
    },
    {
      path: RM.AboutPage,
      name: RM.AboutPage,
      component: AboutPage
    },
    
    {
      path: RM.LedgerList,
      name: RM.LedgerList,
      component: LedgerList
    },
    
    {
      path: RM.LedgerDetail,
      name: RM.LedgerDetail,
      component: LedgerDetail
    },
    
    {
      path: RM.LedgerPayment,
      name: RM.LedgerPayment,
      component: LedgerPayment
    },

    {
      path: RM.LedgerRepayment,
      name: RM.LedgerRepayment,
      component: LedgerRepayment
    },
    
    {
      path: RM.BrokerProgress,
      name: RM.BrokerProgress,
      component: BrokerProgress
    },

    {
      path: RM.BrokerProgressDetail,
      name: RM.BrokerProgressDetail,
      component: BrokerProgressDetail
    },

    {
      path: RM.BrokerDetail,
      name: RM.BrokerDetail,
      component: BrokerDetail
    },  

    {
      path: RM.RefactoringProgress,
      name: RM.RefactoringProgress,
      component: RefactoringProgress
    },

    {
      path: RM.RefactoringProgressDetail,
      name: RM.RefactoringProgressDetail,
      component: RefactoringProgressDetail
    },

    {
      path: RM.RefactoringDetail,
      name: RM.RefactoringDetail,
      component: RefactoringDetail
    },

    {
      path: RM.FianancingEOI,
      name: RM.FianancingEOI,
      component: FianancingEOI
    },

    {
      path: RM.CompanyInfo,
      name: RM.CompanyInfo,
      component: CompanyInfo
    },

    {
      path: RM.CompanyInfoUpdata,
      name: RM.CompanyInfoUpdata,
      component: CompanyInfoUpdata
    },
   
    {
      path: RM.PersonInfo,
      name: RM.PersonInfo,
      component: PersonInfo
    },

    {
      path: RM.PersonInfoUpdata,
      name: RM.PersonInfoUpdata,
      component: PersonInfoUpdata
    },
 
    {
      path: RM.PersonInfoName,
      name: RM.PersonInfoName,
      component:PersonInfoName 
    },
    {
      path: RM.PersonInfoPsw,
      name: RM.PersonInfoPsw,
      component:PersonInfoPsw 
    },
    {
      path: RM.PersonInfoEmail,
      name: RM.PersonInfoEmail,
      component: PersonInfoEmail
    },
    {
      path: RM.PersonInfoPhone,
      name: RM.PersonInfoPhone,
      component: PersonInfoPhone
    },


  ],
  scrollBehavior(to,from,saveTop){ 
    if(saveTop){ return saveTop; }else{ return {x:0,y:0} }
   }

})
