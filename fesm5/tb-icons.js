import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icon = 'tb-filledcircle';
    }
    IconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'm4-icon',
                    template: "\n        <i class=\"m4-icon m4-{{ icon }}\"></i>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}"]
                }] }
    ];
    IconsComponent.propDecorators = {
        icon: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { IconsComponent, TbIconsModule };

//# sourceMappingURL=tb-icons.js.map