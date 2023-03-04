/* rsc */
import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroModalComponent from './wrap/IntroModalComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import GoTopComponent from './wrap/GoTopComponent';
import Main1Component from './wrap/sub_page/Main1Component';
import SignUpComponent from './wrap/sub_page/SignUpComponent';


export default function WrapComponent(){
   return (
      <div id = "wrap">
      
         <TopModalComponent/>
         <HeaderComponent/>
         <MainComponent/>
         <FooterComponent/>
         <IntroModalComponent/>
         <QuickMenuComponent/>
         <GoTopComponent/>
         <Main1Component/>       {/* 신상품  */}
         <SignUpComponent/>      {/* 회원가입 */}

      </div>
   );
};

