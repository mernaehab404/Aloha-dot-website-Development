import router, { Route } from "@mongez/react-router";

import BaseLayout from "../design-system/layouts/BaseLayout";
// import AccountLayout from "../design-system/layouts/AccountLayout";

/**
 * Should be used with public routes that allow both visitors and users to see it
 *
 * For Example: Home Page | Contact Us | About Us...
 */
export function publicRoutes(routes: Route[]) {
  return router.partOf(BaseLayout, routes);
}

/**
 * Should be used with routes that only logged in users can see it
 *
 * For Example, Account Dashboard Page | Order History | Wishlist
 */

/**
 * Should be used with guarded routes inside the account dashboard page
 * As the account dashboard routes will have similar layout, this is the preferred way to group them im one layout
 */
