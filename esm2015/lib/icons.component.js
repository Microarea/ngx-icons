/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class IconsComponent {
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
if (false) {
    /** @type {?} */
    IconsComponent.prototype._icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRiL2ljb25zLyIsInNvdXJjZXMiOlsibGliL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVMUUsTUFBTSxPQUFPLGNBQWM7SUFSM0I7UUFTSSxVQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFXOUIsQ0FBQzs7Ozs7SUFURyxJQUNJLElBQUksQ0FBQyxJQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7WUFsQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7O0tBRVQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2xEOzs7bUJBSUksS0FBSzs7OztJQUZOLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbTQtaWNvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxpIGNsYXNzPVwibTQtaWNvbiBtNC17eyBpY29uIH19XCI+PC9pPlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczogWycuL2ljb25zLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbnNDb21wb25lbnQge1xyXG4gICAgX2ljb24gPSAndGItZmlsbGVkY2lyY2xlJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGljb24oaWNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5faWNvbiA9IGljb24gaW5zdGFuY2VvZiBPYmplY3QgPyBpY29uLnZhbHVlIDogaWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICAgIH1cclxuXHJcbn1cclxuIl19