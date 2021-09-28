import { IndexComponent } from "../../base/index/index.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { Routes } from "@angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "add-product",
        component: AddProductComponent,
      },
      
      {
        path: "favourite-products",
        component: FavouriteProductsComponent,
      },
      {
        path: "cart-items",
        component: CartProductsComponent,
      },
      {
        path: "checkouts",
        loadChildren: () =>
          import("./checkout/checkout.module").then((m) => m.CheckoutModule),
      },
      {
        path: "product/:id",
        component: ProductDetailComponent,
      },
    ],
  },
];
