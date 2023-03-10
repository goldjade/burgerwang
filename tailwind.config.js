/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        underline: "url('/src/assets/images/bg_underline.png')",
        menuselect: "url('/src/assets/images/bg_menuselect.gif')",
        "icon-deli": "url('/src/assets/images/icon_deli.png')",
        "icon-menu": "url('/src/assets/images/icon_menu.png')",
        "icon-pay": "url('/src/assets/images/icon_pay.png')",
        "icon-arrow1": "url('/src/assets/images/icon_arrow_1.png')",
        "icon-arrow2": "url('/src/assets/images/icon_arrow_2.png')",
        "icon-check": "url('/src/assets/images/icon_check.png')",
        "icon-check-red": "url('/src/assets/images/icon_check_red.png')",
        "icon-key": "url('/src/assets/images/icon_key.png')",
        "icon-key1": "url('/src/assets/images/icon_key_1.png')",
        "icon-coupon": "url('/src/assets/images/icon_coupon.png')",
        "icon-order": "url('/src/assets/images/icon_order.png')",
        "icon-welcome": "url('/src/assets/images/icon_welcome.png')",
        "icon-person": "url('/src/assets/images/icon_person.png')",
        "icon-eye": "url('/src/assets/images/icon_eye.png')",
        "icon-eye-blind": "url('/src/assets/images/icon_eye_blind.png')",
        "icon-out": "url('/src/assets/images/icon_out.png')",
        "icon-out2": "url('/src/assets/images/icon_out2.png')",
        "icon-close": "url('/src/assets/images/icon_close.png')",
        "icon-new": "url('/src/assets/images/icon_new.png')",
        "icon-best": "url('/src/assets/images/icon_best.png')",
        "icon-soldout": "url('/src/assets/images/icon_soldout.png')",
        "icon-refresh": "url('/src/assets/images/icon_refresh.png')",
        "icon-search": "url('/src/assets/images/icon_search.png')",
        "icon-position": "url('/src/assets/images/icon_position.png')",
        "icon-cart": "url('/src/assets/images/icon_cart.png')",
        "icon-position-white": "url('/src/assets/images/icon_position_white.png')",
        "icon-store-white": "url('/src/assets/images/icon_store_white.png')",
      },
      colors: {
        background: "#f2ebe6",
        f7f7f7: "#f7f7f7",
        bgwred: "#e22219",
        ededed: "#ededed",
        "2e2e2e": "#2e2e2e",
        d9d9d9: "#d9d9d9",
        512314: "#512314",
        "8d8d8d": "#8d8d8d",
        737373: "#737373",
        "9a918c": "#9a918c",
        "coupon-on": "#fbf5ee",
        "coupon-off": "#e8ddcb",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      JUA: ["BMJUA", "san-serif"],
    },
  },
};
