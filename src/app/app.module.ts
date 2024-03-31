import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { ComponentsComponent } from './components/components.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { AllSetComponent } from './auth/all-set/all-set.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetEmailComponent } from './auth/reset-email/reset-email.component';
import { SchoolDetailsComponent } from './auth/school-details/school-details.component';
import { SchoolVerifyComponent } from './auth/school-verify/school-verify.component';
import { BannerComponent } from './public/banner/banner.component';
import { ChangeComponent } from './public/change/change.component';
import { GivebackComponent } from './public/giveback/giveback.component';
import { KidsComponent } from './public/kids/kids.component';
import { ParentComponent } from './public/parent/parent.component';
import { SecurityComponent } from './public/security/security.component';
import { TeachersComponent } from './public/teachers/teachers.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { MarketPlaceComponent } from './private/market-place/market-place.component';
import { MyAccountComponent } from './private/my-account/my-account.component';
import { HomeComponent } from './private/dashboard/home/home.component';
import { WalletComponent } from './private/dashboard/wallet/wallet.component';
import { OverviewComponent } from './private/dashboard/home/overview/overview.component';
import { ColleaguesComponent } from './private/dashboard/home/colleagues/colleagues.component';
import { LastViewedComponent } from './private/dashboard/home/last-viewed/last-viewed.component';
import { MostViewedComponent } from './private/dashboard/home/most-viewed/most-viewed.component';
import { YourClassComponent } from './private/dashboard/home/your-class/your-class.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'  
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatMenuModule} from '@angular/material/menu';

import { WalletHistoryComponent } from './private/dashboard/wallet/wallet-history/wallet-history.component';
import { TransactionComponent } from './private/dashboard/wallet/transaction/transaction.component';
import { ItemListComponent } from './private/market-place/item-list/item-list.component';
import { ItemSelectedComponent } from './private/market-place/item-selected/item-selected.component';
import { CartItemsComponent } from './private/market-place/cart-items/cart-items.component';
import { ItemslistHeaderComponent } from './private/market-place/item-list/itemslist-header/itemslist-header.component';
import { ItemslistFilterComponent } from './private/market-place/item-list/itemslist-filter/itemslist-filter.component';
import { ItemslistProductsComponent } from './private/market-place/item-list/itemslist-products/itemslist-products.component';
import { CartHeaderComponent } from './private/market-place/cart-items/cart-header/cart-header.component';
import { AddingItemsComponent } from './private/market-place/cart-items/adding-items/adding-items.component';
import { DeliveryAddressComponent } from './private/market-place/cart-items/delivery-address/delivery-address.component';
import { PaymentMethComponent } from './private/market-place/cart-items/payment-meth/payment-meth.component';
import { ConfirmDeliveryComponent } from './private/market-place/cart-items/confirm-delivery/confirm-delivery.component';
import { SelectHeadComponent } from './private/market-place/item-selected/select-head/select-head.component';
import { DescriptionComponent } from './private/market-place/item-selected/description/description.component';
import { OptionsComponent } from './private/market-place/item-selected/options/options.component';
import { PricelistComponent } from './private/market-place/item-selected/pricelist/pricelist.component';
import { ReviewsComponent } from './private/market-place/item-selected/reviews/reviews.component';
import { ItemPriceComponent } from './private/market-place/item-selected/item-price/item-price.component';
import { SelectedOverviewComponent } from './private/market-place/item-selected/selected-overview/selected-overview.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ItemYoumayLikeComponent } from './private/market-place/item-selected/item-youmay-like/item-youmay-like.component';
import { ItemShortPopupComponent } from './private/market-place/item-list/itemslist-header/item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './private/market-place/item-list/itemslist-header/item-filter-popup/item-filter-popup.component';
import { OrdersComponent } from './private/my-account/orders/orders.component';
import { AccountDetailsComponent } from './private/my-account/account-details/account-details.component';
import { AddressBookComponent } from './private/my-account/address-book/address-book.component';
import { PaymentCardComponent } from './private/my-account/payment-card/payment-card.component';
import { MarketingPreferencesComponent } from './private/my-account/marketing-preferences/marketing-preferences.component';
import { ReferTeacherComponent } from './private/my-account/refer-teacher/refer-teacher.component';
import { OrdersListComponent } from './private/my-account/orders/orders-list/orders-list.component';
import { AddAddressBookComponent } from './private/my-account/address-book/add-address-book/add-address-book.component';
import { AddCardDetailsComponent } from './private/my-account/payment-card/add-card-details/add-card-details.component';
import { InviteTechComponent } from './private/dashboard/home/colleagues/invite-tech/invite-tech.component';
import { InviteStuComponent } from './private/dashboard/home/your-class/invite-stu/invite-stu.component';
import { GoogleClsComponent } from './private/dashboard/home/your-class/google-cls/google-cls.component';
import { ReUpdateClsComponent } from './private/dashboard/home/your-class/re-update-cls/re-update-cls.component';
import { AddStuClsComponent } from './private/dashboard/home/your-class/add-stu-cls/add-stu-cls.component';
import { RewardClassComponent } from './private/dashboard/home/your-class/reward-class/reward-class.component';
import { AddNewClsComponent } from './private/dashboard/home/your-class/add-new-cls/add-new-cls.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OverviewCardsComponent } from './components/overview-cards/overview-cards.component';
import { InvitedtlsCardsComponent } from './components/invitedtls-cards/invitedtls-cards.component';
import { ButtonsBtnComponent } from './components/buttons-btn/buttons-btn.component';
import { ListProductComponent } from './components/list-product/list-product.component';

import { HttpClientModule } from '@angular/common/http';
import { InviteBtnComponent } from './components/invitedtls-cards/invite-btn/invite-btn.component';
import { SubBtnComponent } from './components/buttons-btn/sub-btn/sub-btn.component';
import { SleProductCardComponent } from './components/product-card/sle-product-card/sle-product-card.component';
import { MyAccountDetailsComponent } from './components/my-account-details/my-account-details.component';
import { AddToCartDetlsComponent } from './components/add-to-cart-detls/add-to-cart-detls.component';
import { YourOrderCardComponent } from './components/my-account-details/your-order-card/your-order-card.component';
import { YourOrderDetailsComponent } from './components/my-account-details/your-order-details/your-order-details.component';
import { MyAccontHeaderComponent } from './private/my-account/my-accont-header/my-accont-header.component';
import { SideMenuComponent } from './private/my-account/side-menu/side-menu.component';
import { AddressBookCardComponent } from './components/my-account-details/address-book-card/address-book-card.component';
import { FavoritesComponent } from './private/favorites/favorites.component';
import { InviteSuccessComponent } from './private/my-account/refer-teacher/invite-success/invite-success.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ReviewInputComponent } from './private/my-account/orders/review-input/review-input.component';
import { ReviewSubmitPopupComponent } from './private/my-account/orders/review-input/review-submit-popup/review-submit-popup.component';
import { StudentListComponent } from './private/dashboard/home/your-class/student-list/student-list.component';
import { StudentDataComponent } from './private/dashboard/home/your-class/student-data/student-data.component';
import { ReviewDataComponent } from './private/market-place/item-selected/review-data/review-data.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { InviteConformComponent } from './components/invitedtls-cards/invite-conform/invite-conform.component';
import { InvitedTeachersComponent } from './private/dashboard/home/colleagues/invited-teachers/invited-teachers.component';
import { DatePipe } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { SavedcardDataComponent } from './components/my-account-details/savedcard-data/savedcard-data.component';
import { ShowmoreBtnComponent } from './components/invitedtls-cards/showmore-btn/showmore-btn.component';
import { AddAddresUpdateComponent } from './private/my-account/address-book/add-addres-update/add-addres-update.component';
import { NgxMaskModule } from 'ngx-mask'
import { ImgMagnifier } from "ng-img-magnifier";
import { NguCarouselModule } from '@ngu/carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MobListProductComponent } from './components/list-product/mob-list-product/mob-list-product.component';
import { SubmitDilogComponent } from './components/my-account-details/submit-dilog/submit-dilog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatAutocompleteScrollModule } from './directives/mat-autocomplete-scroll.module';
import { MobileNavComponent } from './components/main-header/mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDataComponent,
    ReviewDataComponent,
    AppComponent,
    AuthComponent,
    ComponentsComponent,
    PrivateComponent,
    PublicComponent,
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent,
    MainFooterComponent,
    AllSetComponent,
    ForgotComponent,
    ResetComponent,
    ResetEmailComponent,
    SchoolDetailsComponent,
    SchoolVerifyComponent,
    BannerComponent,
    ChangeComponent,
    GivebackComponent,
    KidsComponent,
    ParentComponent,
    SecurityComponent,
    TeachersComponent,
    DashboardComponent,
    MarketPlaceComponent,
    MyAccountComponent,
    HomeComponent,
    WalletComponent,
    OverviewComponent,
    ColleaguesComponent,
    LastViewedComponent,
    MostViewedComponent,
    YourClassComponent,
    WalletHistoryComponent,
    TransactionComponent,
    ItemListComponent,
    ItemSelectedComponent,
    CartItemsComponent,
    ItemslistHeaderComponent,
    ItemslistFilterComponent,
    ItemslistProductsComponent,
    CartHeaderComponent,
    AddingItemsComponent,
    DeliveryAddressComponent,
    PaymentMethComponent,
    ConfirmDeliveryComponent,
    SelectHeadComponent,
    DescriptionComponent,
    OptionsComponent,
    PricelistComponent,
    ReviewsComponent,
    ItemPriceComponent,
    SelectedOverviewComponent,
    ItemYoumayLikeComponent,
    ItemShortPopupComponent,
    ItemFilterPopupComponent,
    OrdersComponent,
    AccountDetailsComponent,
    AddressBookComponent,
    PaymentCardComponent,
    MarketingPreferencesComponent,
    ReferTeacherComponent,
    OrdersListComponent,
    AddAddressBookComponent,
    AddCardDetailsComponent,
    InviteTechComponent,
    InviteStuComponent,
    GoogleClsComponent,
    ReUpdateClsComponent,
    AddStuClsComponent,
    RewardClassComponent,
    AddNewClsComponent,
    ProductCardComponent,
    OverviewCardsComponent,
    InvitedtlsCardsComponent,
    ButtonsBtnComponent,
    ListProductComponent,
    InviteBtnComponent,
    SubBtnComponent,
    SleProductCardComponent,
    MyAccountDetailsComponent,
    AddToCartDetlsComponent,
    YourOrderCardComponent,
    YourOrderDetailsComponent,
    MyAccontHeaderComponent,
    SideMenuComponent,
    AddressBookCardComponent,
    FavoritesComponent,
    InviteSuccessComponent,
    SearchResultComponent,
    ReviewInputComponent,
    ReviewSubmitPopupComponent,
    InviteConformComponent,
    InvitedTeachersComponent,
    DeleteDialogComponent,
    SavedcardDataComponent,
    ShowmoreBtnComponent,
    AddAddresUpdateComponent,
    MobListProductComponent,
    SubmitDilogComponent,
    MobileNavComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    ImgMagnifier,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    InfiniteScrollModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    SocialLoginModule,
    AppRoutingModule,
    MatDividerModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSliderModule,
    MatStepperModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    ScrollingModule,
    MatRadioModule,
    MatMomentDateModule,
    MatExpansionModule,
    LayoutModule,
    NgbPaginationModule,
    MatTooltipModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatSortModule,
    GooglePlaceModule,
    MatAutocompleteScrollModule
  ],
  providers: [
    DatePipe,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
