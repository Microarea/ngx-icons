import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconsComponent {
    constructor() {
        this._icon = 'tb-filledcircle';
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    set icon(icon) {
        this._icon = icon instanceof Object ? icon.value : icon;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
}
IconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'm4-icon',
                template: `
        <i class="m4-icon m4-{{ icon }}"></i>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}"]
            }] }
];
IconsComponent.propDecorators = {
    icon: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbIconsModule {
}
TbIconsModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [IconsComponent],
                exports: [IconsComponent]
            },] }
];

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