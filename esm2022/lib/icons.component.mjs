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
    /** @nocollapse */ static { this.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); }; }
    /** @nocollapse */ static { this.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IconsComponent, selectors: [["m4-icon"]], inputs: { icon: "icon" }, decls: 1, vars: 3, template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "i");
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("m4-icon m4-", ctx.icon, "");
        } }, styles: ["m4-icon[_nghost-%COMP%]{display:flex}m4-icon[_nghost-%COMP%]   i[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconsComponent, [{
        type: Component,
        args: [{ selector: 'm4-icon', template: `
        <i class="m4-icon m4-{{ icon }}"></i>
    `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host(m4-icon){display:flex}:host(m4-icon) i{display:flex}\n"] }]
    }], null, { icon: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(IconsComponent, { className: "IconsComponent", filePath: "lib\\icons.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGIvaWNvbnMvc3JjL2xpYi9pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVTFFLE1BQU0sT0FBTyxjQUFjO0lBUjNCO1FBU0ksVUFBSyxHQUFHLGlCQUFpQixDQUFDO0tBVzdCO0lBVEcsSUFDSSxJQUFJLENBQUMsSUFBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztrR0FWUSxjQUFjO21HQUFkLGNBQWM7WUFMbkIsb0JBQXFDOztZQUFsQyxzREFBNkI7OztpRkFLM0IsY0FBYztjQVIxQixTQUFTOzJCQUNJLFNBQVMsWUFDVDs7S0FFVCxtQkFFZ0IsdUJBQXVCLENBQUMsTUFBTTtnQkFNM0MsSUFBSTtrQkFEUCxLQUFLOztrRkFIRyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtNC1pY29uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cIm00LWljb24gbTQte3sgaWNvbiB9fVwiPjwvaT5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL2ljb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSWNvbnNDb21wb25lbnQge1xuICAgIF9pY29uID0gJ3RiLWZpbGxlZGNpcmNsZSc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBpY29uKGljb246IGFueSkge1xuICAgICAgICB0aGlzLl9pY29uID0gaWNvbiBpbnN0YW5jZW9mIE9iamVjdCA/IGljb24udmFsdWUgOiBpY29uO1xuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgICB9XG5cbn1cbiJdfQ==