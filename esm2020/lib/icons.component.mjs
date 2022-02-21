import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class IconsComponent {
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
/** @nocollapse */ /** @nocollapse */ IconsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IconsComponent, selectors: [["m4-icon"]], inputs: { icon: "icon" }, decls: 1, vars: 3, template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i");
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("m4-icon m4-", ctx.icon, "");
    } }, styles: ["m4-icon[_nghost-%COMP%]{display:flex}m4-icon[_nghost-%COMP%]   i[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconsComponent, [{
        type: Component,
        args: [{ selector: 'm4-icon', template: `
        <i class="m4-icon m4-{{ icon }}"></i>
    `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}\n"] }]
    }], null, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvaWNvbnMvc3JjL2xpYi9pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVTFFLE1BQU0sT0FBTyxjQUFjO0lBUjNCO1FBU0ksVUFBSyxHQUFHLGlCQUFpQixDQUFDO0tBVzdCO0lBVEcsSUFDSSxJQUFJLENBQUMsSUFBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7a0hBVlEsY0FBYzttSEFBZCxjQUFjO1FBTG5CLG9CQUFxQzs7UUFBbEMsc0RBQTZCOzt1RkFLM0IsY0FBYztjQVIxQixTQUFTOzJCQUNJLFNBQVMsWUFDVDs7S0FFVCxtQkFFZ0IsdUJBQXVCLENBQUMsTUFBTTtnQkFNM0MsSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtNC1pY29uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGkgY2xhc3M9XCJtNC1pY29uIG00LXt7IGljb24gfX1cIj48L2k+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbnMuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uc0NvbXBvbmVudCB7XHJcbiAgICBfaWNvbiA9ICd0Yi1maWxsZWRjaXJjbGUnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgaWNvbihpY29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9pY29uID0gaWNvbiBpbnN0YW5jZW9mIE9iamVjdCA/IGljb24udmFsdWUgOiBpY29uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=