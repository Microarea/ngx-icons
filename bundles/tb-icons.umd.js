(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@tb/icons', ['exports', '@angular/core'], factory) :
    (factory((global.tb = global.tb || {}, global.tb.icons = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconsComponent = /** @class */ (function () {
        function IconsComponent() {
            this._icon = 'tb-filledcircle';
        }
        Object.defineProperty(IconsComponent.prototype, "icon", {
            get: /**
             * @return {?}
             */ function () {
                return this._icon;
            },
            set: /**
             * @param {?} icon
             * @return {?}
             */ function (icon) {
                this._icon = icon instanceof Object ? icon.value : icon;
            },
            enumerable: true,
            configurable: true
        });
        IconsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'm4-icon',
                        template: "\n        <i class=\"m4-icon m4-{{ icon }}\"></i>\n    ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}"]
                    }] }
        ];
        IconsComponent.propDecorators = {
            icon: [{ type: core.Input }]
        };
        return IconsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbIconsModule = /** @class */ (function () {
        function TbIconsModule() {
        }
        TbIconsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [IconsComponent],
                        exports: [IconsComponent]
                    },] }
        ];
        return TbIconsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IconsComponent = IconsComponent;
    exports.TbIconsModule = TbIconsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tb-icons.umd.js.map