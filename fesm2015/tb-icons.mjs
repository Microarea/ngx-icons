import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';

class IconsComponent {
    constructor() {
        this._icon = 'tb-filledcircle';
    }
    set icon(icon) {
        this._icon = icon instanceof Object ? icon.value : icon;
    }
    get icon() {
        return this._icon;
    }
}
/** @nocollapse */ /** @nocollapse */ IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
/** @nocollapse */ /** @nocollapse */ IconsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IconsComponent, selectors: [["m4-icon"]], inputs: { icon: "icon" }, decls: 1, vars: 3, template: function IconsComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i");
        }
        if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("m4-icon m4-", ctx.icon, "");
        }
    }, styles: ["m4-icon[_nghost-%COMP%]{display:flex}m4-icon[_nghost-%COMP%]   i[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconsComponent, [{
            type: Component,
            args: [{ selector: 'm4-icon', template: `
        <i class="m4-icon m4-{{ icon }}"></i>
    `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}\n"] }]
        }], null, { icon: [{
                type: Input
            }] });
})();

class TbIconsModule {
}
/** @nocollapse */ /** @nocollapse */ TbIconsModule.ɵfac = function TbIconsModule_Factory(t) { return new (t || TbIconsModule)(); };
/** @nocollapse */ /** @nocollapse */ TbIconsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: TbIconsModule });
/** @nocollapse */ /** @nocollapse */ TbIconsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbIconsModule, [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [IconsComponent],
                    exports: [IconsComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbIconsModule, { declarations: [IconsComponent], exports: [IconsComponent] }); })();

/*
 * Public API Surface of icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IconsComponent, TbIconsModule };
//# sourceMappingURL=tb-icons.mjs.map
