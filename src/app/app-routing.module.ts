import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthComponent } from './auth/auth.component';
import { SchoolVerifyComponent } from './auth/school-verify/school-verify.component';
import { SchoolDetailsComponent } from './auth/school-details/school-details.component';
import { AllSetComponent } from './auth/all-set/all-set.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetEmailComponent } from './auth/reset-email/reset-email.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { WalletComponent } from './private/dashboard/wallet/wallet.component';
import { MarketPlaceComponent } from './private/market-place/market-place.component';
import { ItemSelectedComponent } from './private/market-place/item-selected/item-selected.component';
import { CartItemsComponent } from './private/market-place/cart-items/cart-items.component';
import { MyAccountComponent } from './private/my-account/my-account.component';

import { OrdersComponent } from './private/my-account/orders/orders.component';
import { OrdersListComponent } from './private/my-account/orders/orders-list/orders-list.component';
import { AccountDetailsComponent } from './private/my-account/account-details/account-details.component';
import { AddressBookComponent } from './private/my-account/address-book/address-book.component';

import { PaymentCardComponent } from './private/my-account/payment-card/payment-card.component';
import { MarketingPreferencesComponent } from './private/my-account/marketing-preferences/marketing-preferences.component';
import { ReferTeacherComponent } from './private/my-account/refer-teacher/refer-teacher.component';
import { InviteSuccessComponent } from "./private/my-account/refer-teacher/invite-success/invite-success.component";
import { FavoritesComponent } from "../app/private/favorites/favorites.component";
import { SearchResultComponent } from "./components/search-result/search-result.component"
import { ReviewInputComponent } from "./private/my-account/orders/review-input/review-input.component";
import { StudentDataComponent } from './private/dashboard/home/your-class/student-data/student-data.component';
import { ReviewDataComponent } from './private/market-place/item-selected/review-data/review-data.component';
import { InvitedTeachersComponent } from './private/dashboard/home/colleagues/invited-teachers/invited-teachers.component';
const routes: Routes = [
  
  // { path:'', component: PublicComponent },

  { path:'', component: AuthComponent },

  { path:'signup/school-details', component: SchoolDetailsComponent },

  { path:'signup/school-details/school-verify', component: SchoolVerifyComponent },

  { path:'signup/school-details/school-verify/all-set', component: AllSetComponent },

  { path:'forgot', component: ForgotComponent },

  { path:'forgot/reset-email/reset', component: ResetComponent },

  { path:'forgot/reset-email', component: ResetEmailComponent },

  { path:'dashboard', component: DashboardComponent },

  { path:'dashboard/wallet', component: WalletComponent },

  { path:'market-place', component: MarketPlaceComponent },

  { path:'market-place/item-selected', component: ItemSelectedComponent },

  { path:'market-place/item-selected/cart-items', component: CartItemsComponent },

  { path:'my-account', component: MyAccountComponent },

  { path:'my-account/search-result', component: SearchResultComponent },

  { path:'my-account/orders', component: OrdersComponent },

  { path:'my-account/account-details', component: AccountDetailsComponent },

  { path:'my-account/address-book', component: AddressBookComponent },

  { path:'my-account/savedcard', component: PaymentCardComponent },

  { path:'my-account/preferences', component: MarketingPreferencesComponent },

  { path:'my-account/refer', component: ReferTeacherComponent },

  { path:'my-account/orders/orders-list', component: OrdersListComponent },

  { path:'favorites', component: FavoritesComponent },

  { path: 'invite-success', component: InviteSuccessComponent },

  { path: 'review-input', component: ReviewInputComponent },

  { path: 'dashboard/student-data', component: StudentDataComponent },

  { path: 'review-data', component: ReviewDataComponent },

  { path: 'dashboard/Invited_teacher', component: InvitedTeachersComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
