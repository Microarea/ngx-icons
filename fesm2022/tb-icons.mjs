import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';

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
    /** @nocollapse */ static { this.ɵfac = function IconsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IconsComponent)(); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IconsComponent, selectors: [["m4-icon"]], inputs: { icon: "icon" }, standalone: false, decls: 1, vars: 3, template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "i");
        } if (rf & 2) {
            i0.ɵɵclassMap(i0.ɵɵinterpolate1("m4-icon m4-", ctx.icon));
        } }, styles: ["m4-icon[_nghost-%COMP%]{display:flex}m4-icon[_nghost-%COMP%]   i[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconsComponent, [{
        type: Component,
        args: [{ selector: 'm4-icon', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<i class=\"m4-icon m4-{{ icon }}\"></i>\r\n", styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}\n"] }]
    }], null, { icon: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(IconsComponent, { className: "IconsComponent", filePath: "lib/icons.component.ts", lineNumber: 10 }); })();

class TbIconsModule {
    static forRoot() {
        return {
            ngModule: TbIconsModule,
            providers: [],
        };
    }
    /** @nocollapse */ static { this.ɵfac = function TbIconsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TbIconsModule)(); }; }
    /** @nocollapse */ static { this.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: TbIconsModule }); }
    /** @nocollapse */ static { this.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({}); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbIconsModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [IconsComponent],
                exports: [IconsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TbIconsModule, { declarations: [IconsComponent], exports: [IconsComponent] }); })();

/*
 * Public API Surface of icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IconsComponent, TbIconsModule };
//# sourceMappingURL=tb-icons.mjs.map
